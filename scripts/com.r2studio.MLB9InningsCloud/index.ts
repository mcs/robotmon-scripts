import { default as MD5 } from 'md5';
import { Rerouter, rerouter, Utils, RouteConfig, Page } from 'Rerouter';
import { ScriptConfig, EventName, GameStatusContent } from './src/types';
import { defaultConfig } from './src/defaultConfig';

import * as PAGE from './src/pages';
import * as CONSTANTS from './src/constants';
import { TASK } from './src/task';
import { executeCommands, isSameColor, getColorCountInRange, isSameColorCount, arrayFind } from './src/utils';

const VERSION_CODE: number = 15.31;

class MLB9I {
  public static packageName: string = 'com.com2us.ninepb3d.normal.freefull.google.global.android.common';
  public static licenseFilePath: string = '/sdcard/Robotmon/license.txt';
  public static scriptCacheRoot = '/sdcard/Robotmon/loginCache';
  public static appSessionRoot = `data/data/${MLB9I.packageName}`;
  public static appRecordRoot = `/sdcard/Android/data/${MLB9I.packageName}/files`;
  public static endpoint = 's3.robotmon.app:9000';
  public static bucket = 'mlb-record';

  public config: ScriptConfig = defaultConfig;
  public rerouter: Rerouter;
  public state = {
    lastGameStatusEvent: '',
    lastRunningEvent: 0,
    lastUploadSession: 0,

    leagueGame: {
      lastCheckPowerSaveAt: 0,
      powerSaveColorCount: {},
      tryEnterGameCnts: 0,
      needResetProgress: false,
    },
  };

  constructor(config: ScriptConfig) {
    console.log('############ new MLB9I ############');
    this.config = config;

    this.config.hasCoolFeature = this.config.hasCoolFeature || this.config.isCloud || this.config.isLocalPaid;

    // rerouter setups
    this.rerouter = rerouter;

    this.rerouter.defaultConfig.TaskConfigAutoStop = true;
    this.rerouter.defaultConfig.RouteConfigDebug = false;

    // if not set packageName first, cannot handle start/ stop app
    this.rerouter.rerouterConfig.packageName = MLB9I.packageName;
    this.rerouter.rerouterConfig.startAppDelay = 10 * 1000;
    this.rerouter.rerouterConfig.autoLaunchApp = this.config.hasCoolFeature;

    this.rerouter.screenConfig.rotation = 'horizontal';
    this.rerouter.screenConfig.devHeight = 360;
    this.rerouter.screenConfig.devWidth = 640;

    this.rerouter.debug = true;
    console.log(`script version ${VERSION_CODE}`);
  }

  public init() {
    if (this.config.isLocalPaid) {
      var plan = getUserPlan();
      if (plan != 'user_plan_mlb9i') {
        console.log('user plan id: ', JSON.stringify(plan));
        console.log('please subscribe premium plan');
        return;
      }
    }

    this.addRoutes();
    this.handleUnknown();
    // this.rerouter.getCurrentMatchNames();

    if (this.config.isLocalPaid) {
      this.addPremiumTasks();
      this.addBasicTasks();
      return;
    }
    if (!this.config.isCloud) {
      this.addBasicTasks();
      return;
    }
    if (!this.config.licenseId) {
      console.log('no license id');
      this.addStayInLoginTasks();
      return;
    }

    this.addPremiumTasks();
    this.addBasicTasks();
  }

  public start() {
    if (this.config.isCloud) {
      this.handleCloudState();
    }
    this.init();

    this.rerouter.start(MLB9I.packageName);
  }
  public stop() {
    this.rerouter.stop();
    if (!this.config.isCloud) {
      return;
    }
    if (this.config.licenseId) {
      this.handleCloudLogOut();
      sleep(3000);
      console.log('==== stop script: has licenseId; close app and clear session');
    } else {
      console.log('==== stop script: no licenseId; not to close app for let new user login');
    }
  }

  public handleCloudState() {
    const lastLicenseId = readFile(MLB9I.licenseFilePath) || '';
    const currentLicenseId = this.config.licenseId || '';
    writeFile(MLB9I.licenseFilePath, currentLicenseId);

    console.log(`lastLicenseId: ${lastLicenseId}, currentLicenseId: ${currentLicenseId}`);
    this.handleSendEventLaunching();

    // lastLicenseId === '' means already logout
    if (lastLicenseId !== '' && currentLicenseId !== lastLicenseId) {
      this.handleCloudLogOut();
      sleep(3000);
    }

    const hasCloudSession = this.fetchSession();
    if (hasCloudSession) {
      this.handleCloudLogIn();
      sleep(3000);
    }

    // restart app
    let isInApp = this.rerouter.checkInApp();
    while (!isInApp) {
      this.rerouter.startApp();
      sleep(3000);
      isInApp = this.rerouter.checkInApp();
    }
    sleep(3000);
  }
  public handleCloudLogOut() {
    console.log(`do logout`);
    let isInApp = this.rerouter.checkInApp();
    while (isInApp) {
      this.rerouter.stopApp();
      sleep(3000);
      isInApp = this.rerouter.checkInApp();
    }
    console.log('app is stopped, clear session start');
    this.clearSession();
    writeFile(MLB9I.licenseFilePath, '');
  }
  public handleCloudLogIn() {
    console.log(`do login`);
    let isInApp = this.rerouter.checkInApp();
    while (isInApp) {
      this.rerouter.stopApp();
      sleep(3000);
      isInApp = this.rerouter.checkInApp();
    }
    console.log('app is stopped, set session start');
    this.setSession();
  }

  public fetchSession(): boolean {
    const { xrobotmonS3Key, xrobotmonS3Token, licenseId } = this.config;
    if (!(xrobotmonS3Key && xrobotmonS3Token && licenseId)) {
      console.log('xrobotmonS3Key or xrobotmonS3Token is empty');
      return false;
    }

    console.log(`fetchSession start ${licenseId}`);
    const { scriptCacheRoot, endpoint, bucket } = MLB9I;
    const now = Date.now();

    executeCommands(
      // remove old files
      `rm -rf ${scriptCacheRoot}`,
      `rm -f ${scriptCacheRoot}.gz`,

      // create tmp file root
      `mkdir -p ${scriptCacheRoot}`
    );

    const sessionFileName = `loginCache/${licenseId}.gz`;
    const resultOrError = s3DownloadFile(`${scriptCacheRoot}.gz`, sessionFileName, endpoint, bucket, xrobotmonS3Key, xrobotmonS3Token, '', false);
    if (resultOrError !== true) {
      console.log(`fetchSession failed ${resultOrError}`);
      return false;
    }
    console.log(`Download session from ${endpoint} finish. usedTime`, Date.now() - now, licenseId, resultOrError);
    return true;
  }
  public setSession() {
    const { scriptCacheRoot, appSessionRoot, appRecordRoot } = MLB9I;

    // clear app session to avoid cannot overwrite
    const gameRecordFileName = this.getGameRecordFileName() || 'NOT_EXIST_RECORD';
    executeCommands(`rm -rf ${appSessionRoot}/files`, `rm -rf ${appSessionRoot}/shared_prefs`, `rm -rf ${appRecordRoot}/${gameRecordFileName}`);

    // untargz cloud session and overwrite app session
    console.log(`set session start`);
    untargz(`${scriptCacheRoot}.gz`);
    executeCommands(
      `cp -r ${scriptCacheRoot}/files ${appSessionRoot}/`,
      `cp -r ${scriptCacheRoot}/shared_prefs ${appSessionRoot}/`,
      `cp -r ${scriptCacheRoot}/gameRecord/* ${appRecordRoot}/`,

      `chmod -R 777 ${appSessionRoot}/files`,
      `chmod -R 777 ${appSessionRoot}/shared_prefs`
    );
    this.setAndroidId('cloud');

    console.log('set session done');
    sleep(2000);
  }
  public uploadSession() {
    const { xrobotmonS3Key, xrobotmonS3Token, licenseId } = this.config;
    if (!(xrobotmonS3Key && xrobotmonS3Token && licenseId)) {
      console.log('failed upload; required key is empty');
      return false;
    }

    console.log(`upload session ${licenseId} start`);
    const { scriptCacheRoot, appSessionRoot, endpoint, bucket } = MLB9I;
    executeCommands(
      // remove tmp file root
      `rm -rf ${scriptCacheRoot}`,
      `rm -f ${scriptCacheRoot}.gz`,

      // copy local session to tmp file root
      `mkdir -p ${scriptCacheRoot}/`,
      `cp -r ${appSessionRoot}/files ${scriptCacheRoot}/`,
      `cp -r ${appSessionRoot}/shared_prefs ${scriptCacheRoot}/`
    );
    this.copyGameRecordToCache();

    // copy current android id to tmp file root
    const androidId = execute('ANDROID_DATA=/data settings get secure android_id');
    console.log(`upload androidId: ${androidId}`);
    writeFile(`${scriptCacheRoot}/android_id.txt`, androidId);

    targz(`${scriptCacheRoot}.gz`, `${scriptCacheRoot}`);

    // upload session
    const now = Date.now();
    const sessionFileName = `loginCache/${licenseId}.gz`;
    const sizeOrError = s3UploadFile(
      `${scriptCacheRoot}.gz`,
      sessionFileName,
      'application/octet-stream',
      endpoint,
      bucket,
      xrobotmonS3Key,
      xrobotmonS3Token,
      '',
      false
    );
    console.log(`upload session to ${endpoint} finish. sizeOrError ${sizeOrError}; usedTime ${Date.now() - now}`);

    // remove tmp file root
    executeCommands(`rm -rf ${scriptCacheRoot}`, `rm -f ${scriptCacheRoot}.gz`);
  }
  public clearSession() {
    this.setAndroidId('random');
    const { scriptCacheRoot, appSessionRoot, appRecordRoot } = MLB9I;
    const gameRecordFileName = this.getGameRecordFileName() || 'NOT_EXIST_RECORD';
    executeCommands(
      `rm -rf ${scriptCacheRoot}.gz`,
      `rm -rf ${scriptCacheRoot}`,

      `rm -rf ${appSessionRoot}/files`,
      `rm -rf ${appSessionRoot}/shared_prefs`,
      `rm -rf ${appRecordRoot}/${gameRecordFileName}`
    );

    console.log('clear session done');
    sleep(2000);
  }
  public setAndroidId(source: 'random' | 'cloud') {
    let [oriAndroidId] = executeCommands('ANDROID_DATA=/data settings get secure android_id');
    let androidId = MD5(`${Date.now()}${oriAndroidId}`).substring(0, 16);
    if (source === 'cloud') {
      androidId = readFile(`${MLB9I.scriptCacheRoot}/android_id.txt`) || androidId;
    }
    executeCommands('ANDROID_DATA=/data settings put secure android_id ' + androidId);
    console.log('oriAndroidId', oriAndroidId);
    console.log('setAndroidId', androidId);
  }
  public copyGameRecordToCache() {
    const { scriptCacheRoot, appRecordRoot } = MLB9I;
    const fileName = this.getGameRecordFileName();
    if (!fileName) {
      return;
    }
    executeCommands(`mkdir -p ${scriptCacheRoot}/gameRecord`, `cp -r ${appRecordRoot}/${fileName} ${scriptCacheRoot}/gameRecord/${fileName}/`);
  }
  public getGameRecordFileName() {
    const { appRecordRoot } = MLB9I;
    const files = executeCommands(`ls ${appRecordRoot}`)[0].split('\n');
    for (let fileName of files) {
      if (fileName.length === 32) {
        fileName = fileName.trim();
        console.log(`game record ${fileName}`);
        return fileName;
      }
    }
    return '';
  }

  public addBasicTasks() {
    this.rerouter.addTask({
      name: TASK.playLeagueGame,
      // maxTaskRunTimes: 2,
      maxTaskDuring: 10 * CONSTANTS.hourInMs,
      forceStop: true,
    });
  }
  public addPremiumTasks() {
    // only run once
    this.rerouter.addTask({
      name: TASK.settingDefault,
      // maxTaskRunTimes: 1,
      minRoundInterval: Number.POSITIVE_INFINITY,
      maxTaskDuring: 10 * CONSTANTS.minuteInMs,
      forceStop: true,
    });

    // FIXME: this should only run when needed
    this.rerouter.addTask({
      name: TASK.settingResetLeagueProgress,
      minRoundInterval: 1 * CONSTANTS.minuteInMs,
      maxTaskDuring: 10 * CONSTANTS.minuteInMs,
      beforeRoute: task => {
        const { needResetProgress } = this.state.leagueGame;
        if (!needResetProgress) {
          return 'skipRouteLoop';
        }
      },
      forceStop: true,
    });

    this.rerouter.addTask({
      name: TASK.restartAppPerDay,
      // maxTaskRunTimes: 1,
      minRoundInterval: CONSTANTS.dayInMs,
      beforeRoute: task => {
        if (task.lastRunTime !== 0) {
          console.log('restart app task');
          this.rerouter.restartApp();
        }
        return 'skipRouteLoop';
      },
      maxTaskDuring: 30 * CONSTANTS.minuteInMs,
      forceStop: true,
    });

    this.rerouter.addTask({
      name: TASK.weeklyMission,
      // maxTaskRunTimes: 1,
      minRoundInterval: CONSTANTS.dayInMs,
      maxTaskDuring: 30 * CONSTANTS.minuteInMs,
      forceStop: true,
    });

    this.rerouter.addTask({
      name: TASK.adReward,
      // maxTaskRunTimes: 1,
      minRoundInterval: CONSTANTS.minuteInMs * 30,
      findRouteDelay: CONSTANTS.sleepMedium,

      maxTaskDuring: CONSTANTS.sleepForAd + CONSTANTS.duringMaxAdRetry,
      forceStop: true,
    });

    this.rerouter.addTask({
      name: TASK.playBattleGame,
      minRoundInterval: CONSTANTS.hourInMs,
      maxTaskDuring: 10 * CONSTANTS.hourInMs,
      forceStop: true,
    });
  }
  public addStayInLoginTasks() {
    this.rerouter.addTask({
      name: TASK.stayInLogin,
      forceStop: false,
    });
  }

  public addRoutes() {
    // ** launching pages
    this.rerouter.addRoute({
      path: `/${PAGE.logo.name}`,
      match: PAGE.logo,
      action: context => {
        console.log('wait app loading ...');
        Utils.sleep(CONSTANTS.sleepMedium);
        if (!this.config.hasCoolFeature) {
          return;
        }

        // reopen if stuck
        const now = Date.now();
        if (now - context.matchStartTS > 5 * CONSTANTS.minuteInMs) {
          console.log('stuck in launch page too long, restart app');
          this.rerouter.restartApp();
          Utils.sleep(CONSTANTS.sleepMedium);
          return;
        }

        this.handleSendEventLaunching();
      },
    });
    this.rerouter.addRoute({
      path: `/${PAGE.landingLoading.name}`,
      match: PAGE.landingLoading,
      action: this.wrapRouteAction(_ => {
        console.log('landing loading...');
        this.handleSendEventLaunching();
      }),
      afterActionDelay: CONSTANTS.sleepMedium,
    });
    [PAGE.downloadData, PAGE.progressBarRunning].forEach(p => {
      this.rerouter.addRoute({
        path: `/${p.name}`,
        match: p,
        action: this.wrapRouteAction('goNext'),
        afterActionDelay: CONSTANTS.sleepLong,
      });
    });
    [PAGE.TOS, PAGE.TOS90].forEach(p => {
      this.rerouter.addRoute({
        path: `/${p.name}`,
        match: p,
        action: this.wrapRouteAction('goNext'),
      });
    });

    // ** login pages
    this.rerouter.addRoute({
      path: `/${PAGE.landing.name}`,
      match: PAGE.landing,
      action: context => {
        if (!this.config.isCloud) {
          console.log('stay in login');
          return;
        }

        // use interval
        this.handleSendEventRunning(true);
        if (context.task.name === TASK.stayInLogin) {
          console.log('stay in login');
          if (context.matchDuring < CONSTANTS.switchWaitingLoginPagesInterval) {
            return;
          }
          console.log('click hive login for avoid app crush');
        }

        this.rerouter.goNext(PAGE.landing);
      },
    });

    [PAGE.logIn, PAGE.logIn90].forEach(p => {
      this.rerouter.addRoute({
        path: `/${p.name}`,
        match: p,
        action: context => {
          if (!this.config.isCloud) {
            console.log('stay in login');
            return;
          }
          if (context.task.name === TASK.stayInLogin) {
            console.log('stay in login');
            keycode('BACK', 100);
            console.log('keycode back');
            return;
          }

          // use interval
          this.handleSendEventRunning(true);
          this.handleSendEventLoginInputing();
        },
      });
    });
    [PAGE.fbLogIn90, PAGE.googleLogIn90].forEach(p => {
      this.rerouter.addRoute({
        path: `/${p.name}`,
        match: p,
        action: 'keycodeBack',
      });
    });

    // ** main
    this.rerouter.addRoute({
      path: `/${PAGE.main.name}`,
      match: PAGE.main,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        const task = context.task.name;
        console.log(task);

        switch (task) {
          case TASK.stayInLogin:
            // should be inaccessible unless clear session is failed
            this.handleCloudLogOut();
            return;

          case TASK.settingDefault:
          case TASK.settingResetLeagueProgress:
            this.rerouter.screen.tap(PAGE.mainBtns.settings);
            break;

          case TASK.playLeagueGame:
            this.rerouter.screen.tap(PAGE.mainBtns.leagueMode);
            this.state.leagueGame.tryEnterGameCnts++;
            break;
          case TASK.playBattleGame:
            this.rerouter.screen.tap(PAGE.mainBtns.battleMode);
            break;

          case TASK.adReward:
            // sometimes won't trigger anything if still on cd
            if (context.matchTimes > 2) {
              console.log('ad is still on cd');
              finishRound(true);
            } else {
              this.rerouter.screen.tap(PAGE.mainBtns.adTab);
            }
            break;
          case TASK.weeklyMission:
            this.rerouter.screen.tap(PAGE.mainBtns.achievement);
            break;
          default:
            break;
        }

        // sleep for send 1+ events
        this.handleSendEventLoginSuccess() && Utils.sleep(CONSTANTS.sleepMedium);
        this.handleSendEventPlaying();
        this.handleSendEventRunning();
      }),
    });

    // ** game setting
    this.rerouter.addRoute({
      path: `/${PAGE.settings.name}`,
      match: PAGE.settings,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        const inactiveTabColor = { r: 58, g: 65, b: 74 };
        const tab = arrayFind(Object.keys(PAGE.settingsTabs), t => {
          const { x, y } = PAGE.settingsTabs[t as keyof typeof PAGE.settingsTabs];
          return !isSameColor(image, { x, y, ...inactiveTabColor });
        });

        switch (context.task.name) {
          case TASK.settingDefault:
            if (tab === 'graphicTab') {
              this.rerouter.screen.tap(PAGE.settingsGraphTabBtns.powerSaveOn);
              Utils.sleep(CONSTANTS.sleepShort);
              finishRound(true);
              this.handleSendEventRunning();
            } else {
              // go to graphicTab
              this.rerouter.screen.tap(PAGE.settingsTabs.graphicTab);
            }
            break;
          case TASK.settingResetLeagueProgress:
            if (!this.state.leagueGame.needResetProgress) {
              finishRound(true);
              break;
            }
            // go to leagueResetDialog
            this.rerouter.screen.tap(PAGE.settingsBtns.leagueReset);
            this.state.leagueGame.needResetProgress = false;

            break;
          default:
            this.rerouter.goBack(PAGE.settings);
            break;
        }
      }),
    });

    // ** ad reward
    this.rerouter.addRoute({
      path: `/${PAGE.adReward.name}`,
      match: PAGE.adReward,
      action: this.wrapRouteAction(context => {
        if (context.task.name !== TASK.adReward) {
          this.rerouter.goBack(PAGE.adReward);
          return;
        }

        console.log('watch ad');
        this.rerouter.goNext(PAGE.adReward);
        Utils.sleep(CONSTANTS.sleepForAd);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.adRewardRedeem.name}`,
      match: PAGE.adRewardRedeem,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('ad reward get');
        this.rerouter.goNext(PAGE.adRewardRedeem);
        Utils.sleep(CONSTANTS.sleepShort);
        if (context.task.name === TASK.adReward) {
          finishRound(true);
          this.handleSendEventRunning();
        }
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.adRewardOnCD.name}`,
      match: PAGE.adRewardOnCD,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('ad is still cd');
        this.rerouter.goBack(PAGE.adRewardOnCD);
        Utils.sleep(CONSTANTS.sleepShort);
        if (context.task.name === TASK.adReward) {
          finishRound(true);
          this.handleSendEventRunning();
        }
      }),
    });

    // ** weekly mission
    this.rerouter.addRoute({
      path: `/${PAGE.achivementMission.name}`,
      match: PAGE.achivementMission,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.weeklyMission) {
          this.rerouter.goBack(PAGE.achivementMission);
          return;
        }
        // collect daily one if available
        const x = 613;
        const canCollectColor = { r: 8, g: 125, b: 255 };
        for (let y = 128; y < 260; y += 44) {
          const canCollect = isSameColor(image, { x, y, ...canCollectColor });
          if (canCollect) {
            this.rerouter.screen.tap({ x, y });
            console.log('collect');
            Utils.sleep(CONSTANTS.sleepMedium);
          }
        }

        this.rerouter.goNext(PAGE.achivementMission);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.weeklyMissionBox.name}`,
      match: PAGE.weeklyMissionBox,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.weeklyMission) {
          this.rerouter.goBack(PAGE.weeklyMissionBox);
          return;
        }

        const canCollectColor = { r: 189, g: 194, b: 197 };
        const [x, y] = [27, 115];
        const [w, h] = [198, 75];
        // click openBox only when all mission is complete
        // bc it is abled once a week
        for (var dx = 0; dx < 3 * w; dx += w) {
          for (var dy = 0; dy < 3 * h; dy += h) {
            const canCollect = isSameColor(image, { x: x + dx, y: y + dy, ...canCollectColor });
            if (!canCollect) {
              console.log('wait all weekly mission complete');
              finishRound(true);
              this.handleSendEventRunning();
              return;
            }
          }
          console.log('click open');
          this.rerouter.screen.tap(PAGE.weeklyMissionBoxBtns.openBox);
          Utils.sleep(CONSTANTS.sleepMedium);

          // TODO: let user select the item they want in the future
          // select the left bottom one
          console.log('select right bottom item');
          this.rerouter.screen.tap({ x, y: y + 2 * h });
          Utils.sleep(CONSTANTS.sleepMedium);

          console.log('receive right bottom item');
          this.rerouter.screen.tap(PAGE.weeklyMissionBoxBtns.receiveReward);

          // enter receive confirm page
          finishRound(true);
          this.handleSendEventRunning();
        }
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.weeklyMissionBoxConfirm.name}`,
      match: PAGE.weeklyMissionBoxConfirm,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.weeklyMissionBoxReceived.name}`,
      match: PAGE.weeklyMissionBoxReceived,
      action: this.wrapRouteAction('goNext'),
    });

    // ** playBattleGame
    this.rerouter.addRoute({
      path: `/${PAGE.battleModePanel.name}`,
      match: PAGE.battleModePanel,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playBattleGame) {
          this.rerouter.goBack(PAGE.battleModePanel);
          return;
        }
        // TODO: check if play other mode too
        this.rerouter.screen.tap(PAGE.battleModePanelBtns.rankedBattle);
        console.log('play ranked battle');
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.rankedBattlePanel.name}`,
      match: PAGE.rankedBattlePanel,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playBattleGame) {
          this.rerouter.goBack(PAGE.rankedBattlePanel);
          return;
        }

        // cannot play
        if (context.matchTimes > 5) {
          finishRound(true);
          this.handleSendEventRunning();
          return;
        }

        // check if play is available
        const isPlayDisabled = isSameColor(image, PAGE.rankedBattlePanelBtns.disabledPlayBtn);
        if (isPlayDisabled) {
          finishRound(true);
          this.handleSendEventRunning();
          console.log('ranked battle play disabled');
          return;
        }

        this.rerouter.goNext(PAGE.rankedBattlePanel);
        console.log('play ranked battle (single)');
        Utils.sleep(CONSTANTS.sleepLong);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.rankedBattleWaitToRefresh.name}`,
      match: PAGE.rankedBattleWaitToRefresh,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name === TASK.playBattleGame) {
          console.log('play rank game disabled');
          finishRound(true);
          this.handleSendEventRunning();
        }
        this.rerouter.goBack(PAGE.rankedBattleWaitToRefresh);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.rankedBattleGameInfo.name}`,
      match: PAGE.rankedBattleGameInfo,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playBattleGame) {
          this.rerouter.goBack(PAGE.rankedBattleGameInfo);
          return;
        }
        this.rerouter.goNext(PAGE.rankedBattleGameInfo);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.rankedBattleResult.name}`,
      match: PAGE.rankedBattleResult,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.autoGameConfirm.name}`,
      match: PAGE.autoGameConfirm,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playBattleGame) {
          this.rerouter.goBack(PAGE.autoGameConfirm);
          return;
        }
        this.rerouter.goNext(PAGE.autoGameConfirm);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.autoGameConfirmEnd.name}`,
      match: PAGE.autoGameConfirmEnd,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playBattleGame) {
          this.rerouter.goBack(PAGE.autoGameConfirmEnd);
          return;
        }
        this.rerouter.goNext(PAGE.autoGameConfirmEnd);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.rankedBattleGameInfo.name}`,
      match: PAGE.rankedBattleGameInfo,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playBattleGame) {
          this.rerouter.goBack(PAGE.rankedBattleGameInfo);
          return;
        }
        this.rerouter.goNext(PAGE.rankedBattleGameInfo);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.rechargeBall.name}`,
      match: PAGE.rechargeBall,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        switch (context.task.name) {
          case TASK.playBattleGame:
          case TASK.playLeagueGame:
            console.log('cannot continue: recharge ball needed');
            finishRound(true);
          default:
            break;
        }
        this.rerouter.goBack(PAGE.rechargeBall);
      }),
    });

    // ** playLeagueMode
    // enter game info
    this.rerouter.addRoute({
      path: `/${PAGE.leagueModePanel.name}`,
      match: PAGE.leagueModePanel,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playLeagueGame) {
          this.rerouter.goBack(PAGE.leagueModePanel);
          return;
        }

        // can play league mode
        this.state.leagueGame.tryEnterGameCnts++;

        // avoid to click btn too many time for trigger next page immediately
        if (context.matchTimes < 2) {
          this.rerouter.goNext(PAGE.leagueModePanel);
        }
        Utils.sleep(CONSTANTS.sleepShort);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.leagueModeGameInfo.name}`,
      match: PAGE.leagueModeGameInfo,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playLeagueGame) {
          this.rerouter.goBack(PAGE.leagueModeGameInfo);
          return;
        }

        console.log('check energy');
        const emptyEnergy = { x: 551, y: 281, r: 3, g: 124, b: 213 };
        const hasEnergy0 = isSameColor(image, emptyEnergy, 0.9);
        if (hasEnergy0) {
          console.log('no energy');
          finishRound(true);
          this.handleSendEventRunning();
          return;
        }

        const digit1 = { x: 561, y: 278, r: 169, g: 172, b: 179 };
        const hasEnergy10 = isSameColor(image, digit1);
        console.log('has10Energy:', hasEnergy10);

        // use quick play when has 10+ energy,
        // and slow play when has 10- energy
        const quickPlayOnBtn = { x: 37, y: 284, r: 33, g: 255, b: 140 };
        const isQuickPlayOn = isSameColor(image, quickPlayOnBtn);

        if (hasEnergy10 && !isQuickPlayOn) {
          this.rerouter.screen.tap(quickPlayOnBtn); // select quick play
          console.log('turn on quick play');
          Utils.sleep(CONSTANTS.sleepLong);
        }
        if (!hasEnergy10 && isQuickPlayOn) {
          this.rerouter.screen.tap(quickPlayOnBtn); // cancel quick play
          console.log('turn off quick play');
          Utils.sleep(CONSTANTS.sleepLong);
        }

        this.rerouter.goNext(PAGE.leagueModeGameInfo); // play ball
        console.log('play league mode game');
        Utils.sleep(CONSTANTS.sleepLong);
      }),
    });

    // select things
    this.rerouter.addRoute({
      path: `/${PAGE.selectPlayRole.name}`,
      match: PAGE.selectPlayRole,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('handle select play role');
        this.rerouter.goNext(PAGE.selectPlayRole);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.selectYear.name}`,
      match: PAGE.selectYear,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('handle select year page');
        this.rerouter.goNext(PAGE.selectYear);

        // go to the min year
        const activeButton = {
          x: PAGE.selectYearBtns.prevYear.x,
          y: PAGE.selectYearBtns.prevYear.y,
          r: 49,
          g: 85,
          b: 123,
        };

        let isNotMinYear = this.rerouter.screen.isSameColor(activeButton);
        for (let remainClick = 12; remainClick > 0 && isNotMinYear; remainClick--) {
          this.rerouter.screen.tap(PAGE.selectYearBtns.prevYear);
          Utils.sleep(CONSTANTS.sleepShort);
          isNotMinYear = this.rerouter.screen.isSameColor(activeButton);
        }

        // check the diff, return to prev year
        for (var yearDiff = this.config.leagueYear - CONSTANTS.leagueYearMin; yearDiff > 0; yearDiff--) {
          this.rerouter.screen.tap(PAGE.selectYearBtns.nextYear);
          Utils.sleep(CONSTANTS.sleepShort);
        }

        // submit changes
        this.rerouter.screen.tap(PAGE.selectYearBtns.submit);
        Utils.sleep(CONSTANTS.sleepShort);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.selectSeasonMode.name}`,
      match: PAGE.selectSeasonMode,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('handle select season page');
        this.rerouter.goNext(PAGE.selectSeasonMode);
        Utils.sleep(CONSTANTS.sleepMedium);
        this.rerouter.screen.tap({ x: 568, y: 333 }); // normal mode
        Utils.sleep(CONSTANTS.sleepShort);
        // TODO split page
        this.rerouter.screen.tap({ x: 332, y: 301 }); // next season
        Utils.sleep(CONSTANTS.sleepLong);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.selectLeagueGameAmount.name}`,
      match: PAGE.selectLeagueGameAmount,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('handle select league game amount page');
        // use config user setted to select which they want to play
        // TODO: handle the half, quarter, full has 2 next page
        switch (this.config.leagueSeasonMode) {
          case 'full':
            console.log('select full league');
            this.rerouter.screen.tap(PAGE.selectLeagueGameAmountBtns.full);
            Utils.sleep(CONSTANTS.sleepShort);
            this.rerouter.screen.tap({ x: 564, y: 328 }); // go next
            break;
          case 'half':
            console.log('select 1/2 league');
            this.rerouter.screen.tap(PAGE.selectLeagueGameAmountBtns.half);
            Utils.sleep(CONSTANTS.sleepShort);
            this.rerouter.screen.tap({ x: 564, y: 328 }); // go next
            // ? will go to ok / next pages
            break;
          case 'quarter':
            console.log('select 1/4 league');
            this.rerouter.screen.tap(PAGE.selectLeagueGameAmountBtns.quarter);
            Utils.sleep(CONSTANTS.sleepShort);
            this.rerouter.screen.tap({ x: 564, y: 328 }); // go next
            // ? will go to ok / next pages
            break;
          case 'postSeason':
            console.log('select postSeason');
            this.rerouter.screen.tap(PAGE.selectLeagueGameAmountBtns.post);
            // ? will go to ok / next pages
            break;
        }
        Utils.sleep(CONSTANTS.sleepMedium);
        this.rerouter.screen.tap({ x: 564, y: 328 }); // go next
        Utils.sleep(CONSTANTS.sleepLong);
      }),
    });

    // season new/ end
    this.rerouter.addRoute({
      path: `/${PAGE.newSeason.name}`,
      match: PAGE.newSeason,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.endSeason.name}`,
      match: PAGE.endSeason,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.endSeasonProceed.name}`,
      match: PAGE.endSeasonProceed,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('handle end season proceed');
        this.rerouter.screen.tap({ x: 182, y: 178 }); // tap new season of left
        // will go to endSeasonProceedSelected
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.endSeasonProceedSelected.name}`,
      match: PAGE.endSeasonProceedSelected,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.selectNormalMasterLeagueMode.name}`,
      match: PAGE.selectNormalMasterLeagueMode,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('handle select normal / master mode');

        // if cannot select master mode, at least select normal mode
        this.rerouter.screen.tap(PAGE.selectNormalMasterLeagueModeBtns.normal);
        Utils.sleep(CONSTANTS.sleepShort);
        this.rerouter.screen.tap(PAGE.selectNormalMasterLeagueModeBtns.master);
        Utils.sleep(CONSTANTS.sleepShort);
        // whether choose any mode, will jump to proceed page
        this.rerouter.goNext(PAGE.selectNormalMasterLeagueMode);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.selectNormalMasterLeagueModeProceed.name}`,
      match: PAGE.selectNormalMasterLeagueModeProceed,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.leagueResetDialogYN.name}`,
      match: PAGE.leagueResetDialogYN,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('handle reset league dialog with yes/no');

        // TODO: let user choose in config
        if (context.lastMatchedPath === `/${PAGE.selectNormalMasterLeagueModeProceed.name}`) {
          console.log('reset league mode');
          this.rerouter.goNext(PAGE.leagueResetDialogYN);
          return;
        }

        // not reset
        this.rerouter.goBack(PAGE.leagueResetDialogYN);
        return;
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.leagueResetDialog.name}`,
      match: PAGE.leagueResetDialog,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.settingResetLeagueProgress) {
          // cancel
          this.rerouter.goBack(PAGE.leagueResetDialog);
          return;
        }
        console.log('handle reset league dialog');
        // TODO: let user can select specific mode and year to play
        // reset
        this.rerouter.goNext(PAGE.leagueResetDialog);
        this.state.leagueGame.needResetProgress = false;
        finishRound(true);
        return;
      }),
    });

    // other
    this.rerouter.addRoute({
      path: `/${PAGE.gameLineUp.name}`,
      match: PAGE.gameLineUp,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.playerGrowthComplete.name}`,
      match: PAGE.playerGrowthComplete,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.pitcherOfTheMonth.name}`,
      match: PAGE.pitcherOfTheMonth,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.mvp.name}`,
      match: PAGE.mvp,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('handleMvpPage');
        const okBtn = { x: 568, y: 320, r: 52, g: 120, b: 210 };
        let isOkBtnOnScreen = this.rerouter.screen.isSameColor(okBtn);

        // ok button still on the screen
        for (var maxOkButtonRemain = 10; isOkBtnOnScreen && maxOkButtonRemain > 0; maxOkButtonRemain--) {
          this.rerouter.goNext(PAGE.mvp); // ok
          Utils.sleep(CONSTANTS.sleepMedium);
          isOkBtnOnScreen = this.rerouter.screen.isSameColor(okBtn);
        }

        // reward bonus player popup
        Utils.sleep(CONSTANTS.sleepMedium);
        this.rerouter.screen.tap({ x: 322, y: 309 }); // click next
        Utils.sleep(CONSTANTS.sleepMedium);
      }),
    });

    // game over
    this.rerouter.addRoute({
      path: `/${PAGE.gameResult.name}`,
      match: PAGE.gameResult,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        switch (context.task.name) {
          case TASK.playBattleGame:
          case TASK.playLeagueGame:
            console.log('complete a game');
            finishRound();
            this.handleSendEventRunning();
            break;
          default:
            break;
        }
        this.rerouter.goNext(PAGE.gameResult);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.gameResultAquired.name}`,
      match: PAGE.gameResultAquired,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.gameResultWorldChampion.name}`,
      match: PAGE.gameResultWorldChampion,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.gameResultOther.name}`,
      match: PAGE.gameResultOther,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        this.rerouter.screen.tap({ x: 0, y: 0 });
        console.log('tap');
      }),
    });

    // game reward pages
    this.rerouter.addRoute({
      path: `/${PAGE.gameReward.name}`,
      match: PAGE.gameReward,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.leagueRewardAchievementGrade.name}`,
      match: PAGE.leagueRewardAchievementGrade,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.leagueRewardAchievementGradeBonusPlayer.name}`,
      match: PAGE.leagueRewardAchievementGradeBonusPlayer,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.bestPositionAwardBonusGroup.name}`,
      match: PAGE.bestPositionAwardBonusGroup,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.bonusGrantedByTeamRecord.name}`,
      match: PAGE.bonusGrantedByTeamRecord,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.postSeasonAwardBonus.name}`,
      match: PAGE.postSeasonAwardBonus,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.selectRewardPlayer.name}`,
      match: PAGE.selectRewardPlayer,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('handleSelectRewardPlayer');
        let bestCardRank = -1;
        let bestCardPos = PAGE.selectRewardPlayerBtns[0];

        for (const pos of PAGE.selectRewardPlayerBtns) {
          const rgb = getImageColor(image, pos.x, pos.y);
          const k = rgb.r + '-' + rgb.g + '-' + rgb.b;
          console.log(pos.x, pos.y, k);
          // select if not in basic type
          const rank = PAGE.playerCardColorToRank[k] ?? 5;
          if (rank > bestCardRank) {
            bestCardRank = rank;
            bestCardPos = pos;
          }
        }

        this.rerouter.screen.tap(bestCardPos);
        console.log('select', bestCardPos.x, bestCardPos.y);
        Utils.sleep(CONSTANTS.sleepShort);
        this.rerouter.goNext(PAGE.selectRewardPlayer);
        Utils.sleep(CONSTANTS.sleepMedium);
      }),
    });

    // on play pages
    this.rerouter.addRoute({
      path: `/${PAGE.onQuickPlayGroup.name}`,
      match: PAGE.onQuickPlayGroup,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        console.log('on quick playing');

        if (context.task.name === TASK.playLeagueGame) {
          // success enter game
          this.state.leagueGame.tryEnterGameCnts = 0;
        }
        this.handleSendEventRunning(true);
        this.rerouter.goNext(PAGE.onQuickPlayGroup);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.onQuickPlayPause.name}`,
      match: PAGE.onQuickPlayPause,
      action: this.wrapRouteAction('goNext'),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.onPlayPowerSaveOn.name}`,
      match: PAGE.onPlayPowerSaveOn,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        // this is share between all mode
        let isOnPlayTask = false;
        switch (context.task.name) {
          case TASK.playBattleGame:
          case TASK.playLeagueGame:
            isOnPlayTask = true;
            break;
          default:
            break;
        }

        if (!this.config.hasCoolFeature || !isOnPlayTask || this.rerouter.isPageMatch(PAGE.powerSaving)) {
          this.handlePowerSavingPage();
          return;
        }

        const now = Date.now();
        const { lastCheckPowerSaveAt: lastCheckTimeAt, powerSaveColorCount: colorCount } = this.state.leagueGame;
        if (now - lastCheckTimeAt < CONSTANTS.sendRunningEventInterval) {
          return;
        }

        // use time to check whether game is still playing
        const colorCntNow = getColorCountInRange(image, { x: 331, y: 310 }, { x: 403, y: 311 });
        const isSame = isSameColorCount(colorCntNow, colorCount);

        this.state.leagueGame.lastCheckPowerSaveAt = now;
        this.state.leagueGame.powerSaveColorCount = colorCntNow;

        if (!isSame) {
          console.log('game is still playing with power save on');
          this.handleSendEventRunning();
          return;
        }

        console.log('game is stuck');
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.leagueOnPlayPowerSaveOffGroups.name}`,
      match: PAGE.leagueOnPlayPowerSaveOffGroups,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        // page will be stopped here in any tasks
        // need to handle immediately if match
        for (const pageOrGroup of matched) {
          if (pageOrGroup.name === PAGE.leagueOnPlayPowerSaveOffStopped.name) {
            this.rerouter.goNext(PAGE.leagueOnPlayPowerSaveOffStopped);
            break;
          }
        }

        if (context.task.name !== TASK.playLeagueGame) {
          // turn off autoplay to return
          this.rerouter.goBack(PAGE.leagueOnPlayPowerSaveOff);
          Utils.sleep(CONSTANTS.sleepMedium);
          return;
        }

        // success enter game
        this.state.leagueGame.tryEnterGameCnts = 0;

        // TODO: handle quick switch to auto play off if was stopped
        if (this.config.hasCoolFeature) {
          console.log('turn on power save play');
          this.rerouter.goNext(PAGE.leagueOnPlayPowerSaveOff);
        }
        this.rerouter.screen.tap({ x: 0, y: 0 });
        console.log('tap');
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.leagueOnPlayAutoOffGroup.name}`,
      match: PAGE.leagueOnPlayAutoOffGroup,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playLeagueGame) {
          // open pause panel
          keycode('KEYCODE_BACK', 100);
          // this.rerouter.goBack(PAGE.leagueOnPlayAutoOffGroup);
          return;
        }
        console.log('turn on auto play');
        this.rerouter.goNext(PAGE.leagueOnPlayAutoOffGroup);
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.leagueOnPlayPause.name}`,
      match: PAGE.leagueOnPlayPause,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        if (context.task.name !== TASK.playLeagueGame) {
          // open pause panel
          this.rerouter.goBack(PAGE.leagueOnPlayPause);
          return;
        }
        // continue play
        keycode('KEYCODE_BACK', 100);
        console.log('tap back to stay in game');
      }),
    });
    this.rerouter.addRoute({
      path: `/${PAGE.leagueContinuePlaying.name}`,
      match: PAGE.leagueContinuePlaying,
      action: this.wrapRouteAction('goNext'),
    });

    // ** general pages
    this.rerouter.addRoute({
      path: `/${PAGE.powerSaving.name}`,
      match: PAGE.powerSaving,
      action: this.wrapRouteAction((context, image, matched, finishRound) => {
        this.handlePowerSavingPage();
      }),
    });
    [PAGE.errorNewUpdateAvailable, PAGE.appIsNotResponding].forEach(p => {
      this.rerouter.addRoute({
        path: `/${p.name}`,
        match: p,
        action: 'goNext',
        afterActionDelay: CONSTANTS.sleepWaitPageLong,
      });
    });

    this.rerouter.addRoute({
      path: `/${PAGE.unexpectedError.name}`,
      match: PAGE.unexpectedError,
      action: (context, image, matched, finishRound) => {
        switch (context.task.name) {
          case TASK.playLeagueGame:
            if (!this.config.hasCoolFeature) {
              break;
            }
            // sometimes some unknown reason cannot enter game
            const { tryEnterGameCnts } = this.state.leagueGame;
            console.log('try enter game cnts', tryEnterGameCnts);
            if (tryEnterGameCnts === 3) {
              this.rerouter.restartApp();
            }
            if (tryEnterGameCnts === 4) {
              // can only resolved by resetting league mode progress
              console.log('handleResetLeagueModeProgress');

              this.state.leagueGame.needResetProgress = true;
              finishRound(true);
            }

            break;
          default:
            break;
        }

        this.rerouter.goNext(PAGE.unexpectedError);
      },
    });

    [
      PAGE.reviewApp,
      PAGE.promotion1,
      PAGE.promotion2,
      PAGE.promotion3,
      PAGE.rechargePromotion,
      PAGE.teamSupportPackagePromotion,
      PAGE.event,
      PAGE.ok,
      PAGE.next,
      PAGE.confirmWithYS,
      PAGE.quitApp,
      PAGE.quitApp1,
    ].forEach(p => {
      this.rerouter.addRoute({
        path: `/${p.name}`,
        match: p,
        action: this.wrapRouteAction('goNext'),
      });
    });
  }

  public handleUnknown() {
    this.rerouter.addUnknownAction((context, image, finishRound) => {
      // this.rerouter.getCurrentMatchNames();
      Utils.log(`unknown count ${context.matchTimes}, during ${context.matchDuring}, last matched: ${context.lastMatchedPath}`);
      const isInApp = this.rerouter.checkInApp();
      if (!isInApp) {
        console.log('not in app');
        if (this.config.hasCoolFeature) {
          this.rerouter.restartApp();
        }
        return;
      }

      switch (context.lastMatchedPath.substring(1)) {
        case PAGE.adReward.name:
          return this.handleCloseAd();
        default:
          break;
      }
      if (this.state.lastGameStatusEvent === GameStatusContent.WAIT_FOR_LOGIN_INPUT) {
        console.log('wait user input');
        return;
      }

      this.rerouter.screen.tap({ x: 0, y: 0 });
      console.log('tap');

      if (context.matchTimes % 11 === 0) {
        keycode('KEYCODE_BACK', 100);
        Utils.log('keycode back for unknown');
      }
      if (context.matchDuring > CONSTANTS.minuteInMs * 30) {
        console.log('stuck in unknown page more than 30 min');
        this.config.hasCoolFeature && this.rerouter.restartApp();
      }
    });
  }

  public handleCloseAd() {
    console.log('try close ad');
    keycode('BACK', 100);
    console.log('key code back');
    Utils.sleep(CONSTANTS.sleepMedium);
    if (this.rerouter.getCurrentMatchNames().length !== 0) {
      return;
    }

    // try tap close btn
    for (const closeBtn of [
      // right
      { x: 622, y: 19 },

      // left
      { x: 8, y: 15 },
    ]) {
      this.rerouter.screen.tap(closeBtn);
      Utils.sleep(CONSTANTS.sleepShort);
    }
  }
  public handlePowerSavingPage() {
    console.log('handlePowerSavingPage');
    this.rerouter.screen.tapDown({ x: 100, y: 180 });
    Utils.sleep(CONSTANTS.sleepMedium);
    this.rerouter.screen.moveTo({ x: 500, y: 180 });
    Utils.sleep(CONSTANTS.sleepMedium);
    this.rerouter.screen.tapUp({ x: 500, y: 180 });
    Utils.sleep(CONSTANTS.sleepMedium);
  }

  public wrapRouteAction(action: RouteConfig['action']): RouteConfig['action'] {
    if (!this.config.isCloud) {
      return action;
    }

    return (context, image, matched, finishRound) => {
      console.log('wrapRouteAction', context.task.name, matched[0].name);
      if (typeof action === 'function') {
        action(context, image, matched, finishRound);
      }
      if (action === 'goNext') {
        this.rerouter.goNext(matched[0]);
      }
      if (action === 'goBack') {
        this.rerouter.goBack(matched[0]);
      }

      // upload session if needed
      this.handleImplementUploadSession();
    };
  }

  public handleSendEventLoginInputing() {
    const content = GameStatusContent.WAIT_FOR_LOGIN_INPUT;
    return this.handleSendGameStatusEvent(content);
  }
  public handleSendEventLoginSuccess() {
    if (this.state.lastGameStatusEvent !== GameStatusContent.WAIT_FOR_LOGIN_INPUT) {
      return false;
    }
    const content = GameStatusContent.LOGIN_SUCCEEDED;
    return this.handleSendGameStatusEvent(content);
  }
  public handleSendEventLaunching() {
    // set to default once app is launched (first and again)
    this.state.lastRunningEvent = 0;
    this.state.lastUploadSession = 0;
    this.state.leagueGame = {
      lastCheckPowerSaveAt: 0,
      powerSaveColorCount: {},
      tryEnterGameCnts: this.state.leagueGame.tryEnterGameCnts,
      needResetProgress: false,
    };
    const content = GameStatusContent.LAUNCHING;
    return this.handleSendGameStatusEvent(content);
  }

  public handleSendEventPlaying() {
    const content = GameStatusContent.PLAYING;
    return this.handleSendGameStatusEvent(content);
  }
  public handleSendGameStatusEvent(content: string): boolean {
    if (this.state.lastGameStatusEvent === content) {
      return false;
    }
    this.state.lastGameStatusEvent = content;
    sendEvent(EventName.GAME_STATUS, content);
    console.log(`send event: ${content}`);
    return true;
  }

  public handleSendEventRunning(useInterval: boolean = false) {
    const now = Date.now();
    if (useInterval && now - this.state.lastRunningEvent < CONSTANTS.sendRunningEventInterval) {
      return;
    }
    this.state.lastRunningEvent = now;
    sendEvent(EventName.RUNNING, '');
    console.log('send event: running');
  }
  public handleImplementUploadSession() {
    // only upload session when is playing
    if (!this.config.isCloud || this.state.lastGameStatusEvent !== GameStatusContent.PLAYING) {
      return;
    }

    const now = Date.now();
    if (now - this.state.lastUploadSession < CONSTANTS.uploadSessionInterval) {
      return;
    }

    this.state.lastUploadSession = now;
    console.log('upload session');
    this.uploadSession();
  }
}

// * =========== entry point ===========
let mlb9i: MLB9I | undefined;
export function start(jsonConfig: any) {
  const config = defaultConfig;
  if (typeof jsonConfig === 'string') {
    jsonConfig = JSON.parse(jsonConfig);

    config.leagueSeasonMode = jsonConfig.leagueSeasonMode ?? config.leagueSeasonMode;
    config.leagueYear = jsonConfig.leagueYear ?? config.leagueYear;

    config.xrobotmonS3Key = jsonConfig.xrobotmonS3Key ?? config.xrobotmonS3Key;
    config.xrobotmonS3Token = jsonConfig.xrobotmonS3Token ?? config.xrobotmonS3Token;
    config.amazonawsS3Key = jsonConfig.amazonawsS3Key ?? config.amazonawsS3Key;
    config.amazonawsS3Token = jsonConfig.amazonawsS3Token ?? config.amazonawsS3Token;
    config.licenseId = jsonConfig.licenseId ?? config.licenseId;
  }
  mlb9i = new MLB9I(config);
  mlb9i.start();
}
export function stop() {
  if (mlb9i === undefined) {
    return;
  }
  mlb9i.stop();
  mlb9i = undefined;
}

// ! following is only for dev
// function run() {
//   const mlb = new MLB9I(defaultConfig);
//   mlb.start();
// }

// run();

declare global {
  interface Window {}
}
(window as any).start = start;
(window as any).stop = stop;
