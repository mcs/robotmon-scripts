import { GroupPage, Page } from 'rerouter';

export const logo = new Page(
  'logo',
  [
    { x: 227, y: 184, r: 228, g: 4, b: 33 },
    { x: 258, y: 187, r: 228, g: 4, b: 33 },
    { x: 278, y: 190, r: 232, g: 48, b: 72 },
    { x: 285, y: 183, r: 254, g: 254, b: 254 },
    { x: 301, y: 172, r: 229, g: 19, b: 46 },
    { x: 316, y: 187, r: 254, g: 254, b: 254 },
    { x: 335, y: 188, r: 228, g: 4, b: 33 },
    { x: 372, y: 188, r: 252, g: 233, b: 235 },
    { x: 375, y: 169, r: 228, g: 4, b: 33 },
    { x: 395, y: 184, r: 254, g: 254, b: 254 },
    { x: 398, y: 170, r: 228, g: 4, b: 33 },
    { x: 403, y: 186, r: 254, g: 254, b: 254 },
    { x: 117, y: 114, r: 254, g: 254, b: 254 },

    // loading on left top if stuck
    // { x: 2, y: 5, r: 142, g: 208, b: 202 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

// term of service
export const TOS = new Page(
  'TOS',
  [
    // logo
    { x: 289, y: 40, r: 232, g: 52, b: 74 },
    { x: 293, y: 34, r: 229, g: 21, b: 46 },
    { x: 299, y: 38, r: 227, g: 6, b: 33 },
    { x: 308, y: 37, r: 248, g: 192, b: 199 },
    { x: 313, y: 39, r: 248, g: 192, b: 199 },
    { x: 321, y: 37, r: 255, g: 255, b: 255 },
    { x: 325, y: 42, r: 255, g: 255, b: 255 },
    { x: 333, y: 33, r: 252, g: 223, b: 227 },
    { x: 338, y: 38, r: 255, g: 255, b: 255 },
    { x: 342, y: 38, r: 246, g: 176, b: 185 },
    { x: 344, y: 37, r: 246, g: 177, b: 185 },
    { x: 346, y: 36, r: 234, g: 68, b: 89 },
    { x: 335, y: 34, r: 234, g: 67, b: 87 },
    { x: 335, y: 37, r: 255, g: 255, b: 255 },
    { x: 344, y: 35, r: 227, g: 6, b: 33 },

    // copyright
    { x: 289, y: 335, r: 255, g: 255, b: 255 },
    { x: 300, y: 336, r: 194, g: 197, b: 195 },
    { x: 301, y: 336, r: 187, g: 192, b: 189 },
    { x: 307, y: 336, r: 255, g: 255, b: 255 },
    { x: 310, y: 336, r: 255, g: 255, b: 255 },
    { x: 320, y: 335, r: 255, g: 255, b: 255 },
    { x: 323, y: 336, r: 255, g: 255, b: 255 },
    { x: 332, y: 336, r: 181, g: 186, b: 183 },
    { x: 340, y: 336, r: 255, g: 255, b: 255 },

    // agree btn bg
    { x: 17, y: 293, r: 232, g: 232, b: 232 },
    { x: 54, y: 305, r: 255, g: 255, b: 255 },
    { x: 62, y: 317, r: 255, g: 255, b: 255 },
    { x: 111, y: 316, r: 255, g: 255, b: 255 },
    { x: 243, y: 297, r: 232, g: 232, b: 232 },
    { x: 255, y: 291, r: 232, g: 232, b: 232 },
    { x: 599, y: 304, r: 255, g: 255, b: 255 },
    { x: 613, y: 295, r: 232, g: 232, b: 232 },
    { x: 603, y: 316, r: 255, g: 255, b: 255 },
    { x: 421, y: 322, r: 232, g: 232, b: 232 },

    // bg corner outside
    { x: 72, y: 32, r: 255, g: 255, b: 255 },
    { x: 511, y: 40, r: 255, g: 255, b: 255 },
    { x: 586, y: 39, r: 255, g: 255, b: 255 },
    { x: 14, y: 340, r: 255, g: 255, b: 255 },
    { x: 619, y: 340, r: 255, g: 255, b: 255 },

    // bg corner inside
    { x: 22, y: 77, r: 232, g: 232, b: 232 },
    { x: 100, y: 77, r: 197, g: 197, b: 197 },
    { x: 18, y: 253, r: 232, g: 232, b: 232 },
    { x: 613, y: 286, r: 216, g: 216, b: 216 },
    { x: 613, y: 80, r: 215, g: 215, b: 215 },
    { x: 609, y: 73, r: 232, g: 232, b: 232 },
    { x: 305, y: 76, r: 183, g: 183, b: 183 },
    { x: 304, y: 291, r: 232, g: 232, b: 232 },
  ],
  { x: 320, y: 306 },
  { x: 320, y: 306 }
);

// like landing but has progress bar
export const landingLoading = new Page(
  'landingLoading',
  [
    // logo in center
    // 9innings
    { x: 295, y: 242, r: 30, g: 50, b: 82 },
    { x: 283, y: 220, r: 60, g: 69, b: 94 },
    { x: 292, y: 220, r: 255, g: 255, b: 255 },
    { x: 300, y: 215, r: 234, g: 235, b: 237 },
    { x: 350, y: 220, r: 244, g: 235, b: 237 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

export const landing = new Page(
  'landing',
  [
    // logo in center
    { x: 297, y: 246, r: 255, g: 255, b: 255 },
    { x: 281, y: 244, r: 8, g: 28, b: 66 },
    { x: 303, y: 243, r: 219, g: 149, b: 164 },

    // 9innings
    { x: 218, y: 269, r: 88, g: 99, b: 130 },
    { x: 239, y: 277, r: 26, g: 45, b: 65 },
    { x: 274, y: 274, r: 25, g: 41, b: 74 },
    { x: 313, y: 278, r: 134, g: 143, b: 160 },
    { x: 327, y: 282, r: 99, g: 104, b: 128 },
    { x: 350, y: 269, r: 255, g: 255, b: 255 },
  ],
  { x: 254, y: 200 }, // hive login
  { x: 254, y: 200 }
);

export const logIn = new Page(
  'logIn',
  [
    { x: 226, y: 76, r: 48, g: 48, b: 48 },
    { x: 322, y: 78, r: 48, g: 48, b: 48 },
    { x: 535, y: 42, r: 48, g: 48, b: 48 },
    { x: 624, y: 40, r: 255, g: 255, b: 255 },
    { x: 66, y: 333, r: 238, g: 238, b: 238 },
    { x: 44, y: 235, r: 238, g: 238, b: 238 },
    { x: 136, y: 236, r: 238, g: 238, b: 238 },
    { x: 258, y: 232, r: 143, g: 186, b: 227 },
    { x: 548, y: 169, r: 43, g: 132, b: 216 },
    { x: 583, y: 195, r: 43, g: 132, b: 216 },
    { x: 43, y: 142, r: 255, g: 255, b: 255 },
    { x: 43, y: 195, r: 255, g: 255, b: 255 },
  ],
  { x: 554, y: 177 }, // login
  { x: 0, y: 0 }
);

export const downloadData = new Page(
  'downloadData',
  [
    { x: 103, y: 41, r: 181, g: 186, b: 189 },
    { x: 167, y: 59, r: 22, g: 30, b: 31 },
    { x: 188, y: 58, r: 39, g: 47, b: 47 },
    { x: 200, y: 59, r: 181, g: 186, b: 189 },
    { x: 209, y: 62, r: 84, g: 88, b: 92 },
    { x: 236, y: 58, r: 50, g: 56, b: 58 },
    { x: 243, y: 58, r: 144, g: 150, b: 152 },
    { x: 290, y: 57, r: 181, g: 186, b: 189 },
    { x: 317, y: 58, r: 16, g: 24, b: 24 },
    { x: 355, y: 54, r: 97, g: 101, b: 105 },
    { x: 407, y: 60, r: 16, g: 24, b: 24 },
    { x: 513, y: 48, r: 181, g: 182, b: 188 },
    { x: 527, y: 54, r: 177, g: 175, b: 177 },
    { x: 519, y: 60, r: 181, g: 185, b: 189 },
    { x: 168, y: 298, r: 222, g: 219, b: 222 },
    { x: 224, y: 296, r: 49, g: 85, b: 123 },
    { x: 249, y: 298, r: 102, g: 133, b: 171 },
    { x: 391, y: 299, r: 195, g: 221, b: 255 },
    { x: 461, y: 302, r: 222, g: 219, b: 222 },
    { x: 423, y: 303, r: 8, g: 109, b: 255 },
    { x: 526, y: 318, r: 222, g: 219, b: 222 },
  ],
  { x: 421, y: 293 },
  { x: 421, y: 293 }
);
export const progressBarRunning = new Page(
  'progressBarRunning',
  [
    // progress bar
    { x: 207, y: 316, r: 0, g: 150, b: 255 },
    { x: 19, y: 320, r: 8, g: 12, b: 16 },
    { x: 628, y: 320, r: 8, g: 12, b: 16 },
    { x: 195, y: 329, r: 255, g: 202, b: 0 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

export const main = new Page(
  'main',
  [
    { x: 289, y: 11, r: 214, g: 215, b: 214 },
    { x: 315, y: 11, r: 222, g: 223, b: 222 },
    { x: 380, y: 7, r: 207, g: 210, b: 210 },
    { x: 390, y: 12, r: 130, g: 128, b: 130 },
    { x: 481, y: 7, r: 74, g: 85, b: 90 },
    { x: 493, y: 11, r: 252, g: 209, b: 38 },
    { x: 622, y: 9, r: 214, g: 211, b: 214 },
    { x: 41, y: 324, r: 110, g: 112, b: 102 },
    { x: 58, y: 341, r: 41, g: 52, b: 33 },
    { x: 86, y: 323, r: 255, g: 255, b: 255 },
    { x: 103, y: 340, r: 208, g: 211, b: 208 },
    { x: 187, y: 325, r: 255, g: 255, b: 255 },
    { x: 211, y: 341, r: 57, g: 65, b: 49 },
    { x: 241, y: 323, r: 123, g: 132, b: 122 },
    { x: 326, y: 331, r: 57, g: 71, b: 49 },
    { x: 520, y: 323, r: 131, g: 46, b: 44 },
    { x: 530, y: 350, r: 57, g: 65, b: 49 },
    { x: 587, y: 325, r: 255, g: 255, b: 255 },
    { x: 627, y: 341, r: 49, g: 65, b: 41 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

export const mainBtns = {
  leagueMode: { x: 204, y: 154 },
  battleMode: { x: 350, y: 145 },
  specialMode: { x: 438, y: 145 },
  clubMode: { x: 556, y: 145 },
  settings: { x: 243, y: 323 },
  adTab: { x: 590, y: 77 },
  achievement: { x: 141, y: 323 },
};

export const settings = new Page(
  'settings',
  [
    { x: 22, y: 92, r: 231, g: 235, b: 239 },
    { x: 20, y: 178, r: 206, g: 211, b: 222 },
    { x: 19, y: 290, r: 206, g: 211, b: 222 },
    { x: 457, y: 292, r: 206, g: 211, b: 222 },
    { x: 457, y: 90, r: 231, g: 235, b: 239 },
    { x: 480, y: 86, r: 33, g: 44, b: 49 },
    { x: 485, y: 287, r: 41, g: 44, b: 49 },
    { x: 498, y: 108, r: 56, g: 85, b: 117 },
    { x: 501, y: 169, r: 16, g: 118, b: 255 },
    { x: 499, y: 158, r: 32, g: 46, b: 54 },
    { x: 504, y: 217, r: 160, g: 159, b: 164 },
    { x: 499, y: 274, r: 74, g: 121, b: 181 },
    { x: 25, y: 313, r: 214, g: 218, b: 214 },
    { x: 41, y: 321, r: 110, g: 120, b: 110 },
    { x: 30, y: 330, r: 214, g: 219, b: 214 },
    { x: 295, y: 9, r: 214, g: 211, b: 214 },
    { x: 314, y: 8, r: 247, g: 243, b: 247 },
    { x: 388, y: 7, r: 232, g: 233, b: 232 },
    { x: 474, y: 16, r: 74, g: 81, b: 90 },
    { x: 492, y: 12, r: 59, g: 50, b: 43 },
    { x: 623, y: 12, r: 214, g: 211, b: 214 },
  ],
  { x: 41, y: 320 },
  { x: 41, y: 320 }
);
export const settingsBtns = {
  graphicTab: { x: 152, y: 62 },
};

// FIXME: add page
export const settingsGraphTab = new Page(
  'settings/graph',
  [
    // nav bar right
    { x: 621, y: 8, r: 214, g: 210, b: 214 },
    { x: 595, y: 10, r: 74, g: 97, b: 131 },
    { x: 503, y: 15, r: 74, g: 85, b: 90 },
    { x: 392, y: 12, r: 176, g: 173, b: 176 },
    { x: 315, y: 8, r: 238, g: 243, b: 238 },
    { x: 302, y: 17, r: 214, g: 214, b: 214 },

    // highlighted graph tab
    { x: 123, y: 59, r: 0, g: 101, b: 254 },
    { x: 149, y: 59, r: 28, g: 119, b: 254 },
    { x: 177, y: 64, r: 0, g: 97, b: 238 },

    // other tabs
    { x: 37, y: 63, r: 58, g: 65, b: 74 },
    { x: 62, y: 62, r: 134, g: 143, b: 158 },
    { x: 232, y: 57, r: 58, g: 65, b: 74 },
    { x: 267, y: 63, r: 156, g: 167, b: 180 },
    { x: 322, y: 63, r: 160, g: 165, b: 180 },
    { x: 353, y: 63, r: 58, g: 65, b: 74 },
    { x: 401, y: 64, r: 171, g: 179, b: 192 },
    { x: 440, y: 61, r: 155, g: 159, b: 177 },

    // bg table
    { x: 19, y: 90, r: 230, g: 231, b: 238 },
    { x: 23, y: 291, r: 230, g: 231, b: 238 },
    { x: 459, y: 84, r: 230, g: 231, b: 238 },
    { x: 458, y: 287, r: 230, g: 231, b: 238 },
  ],
  { x: 41, y: 320 },
  { x: 41, y: 320 }
);
export const settingsGraphTabBtns = {
  powerSaveOn: { x: 222, y: 222 },
  // add more if need more setting
};

// tell user the season start
export const newSeason = new Page(
  'newSeason',
  [
    { x: 153, y: 21, r: 0, g: 89, b: 165 },
    { x: 294, y: 50, r: 154, g: 182, b: 203 },
    { x: 316, y: 58, r: 226, g: 234, b: 240 },
    { x: 443, y: 55, r: 0, g: 65, b: 117 },
    { x: 425, y: 55, r: 255, g: 255, b: 255 },
    { x: 537, y: 13, r: 0, g: 93, b: 181 },
    { x: 272, y: 301, r: 0, g: 113, b: 247 },
    { x: 311, y: 302, r: 101, g: 158, b: 235 },
    { x: 324, y: 296, r: 252, g: 253, b: 255 },
    { x: 367, y: 305, r: 8, g: 109, b: 254 },
  ],
  { x: 292, y: 297 },
  { x: 292, y: 297 }
);

// check there might be many diff titles for end season
export const endSeason = new Page(
  'endSeason',
  [
    // x
    { x: 518, y: 47, r: 71, g: 73, b: 72 },

    // logo on center
    { x: 290, y: 132, r: 8, g: 28, b: 66 },
    { x: 325, y: 150, r: 255, g: 255, b: 255 },
    { x: 357, y: 133, r: 189, g: 0, b: 33 },

    // next
    { x: 280, y: 301, r: 8, g: 113, b: 247 },
    { x: 312, y: 299, r: 16, g: 115, b: 242 },
    { x: 339, y: 301, r: 8, g: 113, b: 247 },
    { x: 368, y: 301, r: 8, g: 113, b: 247 },
  ],
  { x: 320, y: 300 },
  { x: 320, y: 300 }
);

// after endSeason, xx season is over
export const endSeasonProceed = new Page(
  'endSeasonProceed',
  [
    // how would you like to proceed with next season ?
    { x: 452, y: 38, r: 195, g: 213, b: 229 },
    { x: 508, y: 36, r: 8, g: 85, b: 148 },
    { x: 545, y: 34, r: 253, g: 253, b: 254 },
    { x: 566, y: 34, r: 43, g: 107, b: 167 },
    { x: 277, y: 34, r: 255, g: 255, b: 255 },
    { x: 568, y: 31, r: 219, g: 232, b: 237 },
    { x: 568, y: 38, r: 45, g: 107, b: 165 },
    { x: 553, y: 38, r: 30, g: 98, b: 160 },

    // bg corner
    { x: 8, y: 13, r: 0, g: 97, b: 181 },
    { x: 8, y: 343, r: 16, g: 16, b: 8 },
    { x: 625, y: 22, r: 0, g: 89, b: 164 },
    { x: 628, y: 350, r: 16, g: 20, b: 16 },

    // ok
    { x: 539, y: 325, r: 8, g: 113, b: 247 },
    { x: 558, y: 325, r: 255, g: 255, b: 255 },
    { x: 571, y: 325, r: 255, g: 255, b: 255 },
    { x: 606, y: 325, r: 8, g: 113, b: 247 },
  ],
  { x: 570, y: 325 },
  { x: 570, y: 325 }
);

export const endSeasonProceedSelected = new Page(
  'endSeasonProceedSelected',
  [
    // how would you like to proceed with next season ?
    { x: 223, y: 36, r: 212, g: 224, b: 236 },
    { x: 271, y: 40, r: 233, g: 240, b: 245 },
    { x: 320, y: 33, r: 141, g: 176, b: 209 },
    { x: 393, y: 31, r: 98, g: 150, b: 190 },
    { x: 433, y: 39, r: 245, g: 245, b: 250 },
    { x: 474, y: 37, r: 231, g: 239, b: 246 },
    { x: 512, y: 34, r: 228, g: 236, b: 244 },
    { x: 557, y: 36, r: 251, g: 249, b: 253 },
    { x: 608, y: 29, r: 8, g: 85, b: 156 },

    // bg corner
    { x: 8, y: 13, r: 0, g: 97, b: 181 },
    { x: 8, y: 343, r: 16, g: 16, b: 8 },
    { x: 625, y: 22, r: 0, g: 89, b: 164 },
    { x: 628, y: 350, r: 16, g: 20, b: 16 },

    // ok
    { x: 539, y: 325, r: 8, g: 113, b: 247 },
    { x: 558, y: 325, r: 255, g: 255, b: 255 },
    { x: 571, y: 325, r: 255, g: 255, b: 255 },
    { x: 606, y: 325, r: 8, g: 113, b: 247 },
  ],
  { x: 570, y: 325 },
  { x: 570, y: 325 }
);

export const selectSeasonMode = new Page(
  'selectSeasonMode',
  [
    { x: 104, y: 16, r: 0, g: 93, b: 173 },
    { x: 235, y: 37, r: 143, g: 181, b: 207 },
    { x: 309, y: 36, r: 145, g: 182, b: 209 },
    { x: 337, y: 38, r: 103, g: 149, b: 191 },
    { x: 376, y: 32, r: 245, g: 247, b: 253 },
    { x: 422, y: 36, r: 145, g: 177, b: 209 },
    { x: 40, y: 75, r: 181, g: 186, b: 189 },
    { x: 314, y: 183, r: 33, g: 36, b: 33 },
    { x: 341, y: 93, r: 41, g: 48, b: 49 },
    { x: 539, y: 323, r: 0, g: 69, b: 149 },
    { x: 553, y: 328, r: 0, g: 65, b: 148 },
  ],
  { x: 178, y: 183 },
  { x: 178, y: 183 }
);

export const selectLeagueGameAmount = new Page(
  'selectLeagueGameAmount',
  [
    { x: 625, y: 8, r: 206, g: 215, b: 222 },
    { x: 603, y: 15, r: 66, g: 93, b: 123 },
    { x: 597, y: 14, r: 66, g: 93, b: 123 },
    { x: 494, y: 11, r: 249, g: 194, b: 26 },
    { x: 391, y: 11, r: 79, g: 80, b: 79 },
    { x: 313, y: 10, r: 229, g: 229, b: 229 },
    { x: 162, y: 58, r: 5, g: 68, b: 122 },
    { x: 187, y: 60, r: 21, g: 77, b: 128 },
    { x: 25, y: 87, r: 231, g: 231, b: 239 },
    { x: 191, y: 88, r: 231, g: 231, b: 239 },
    { x: 346, y: 88, r: 231, g: 231, b: 239 },
    { x: 492, y: 91, r: 231, g: 231, b: 239 },
    { x: 610, y: 286, r: 41, g: 52, b: 57 },
    { x: 449, y: 279, r: 41, g: 52, b: 57 },
    { x: 298, y: 282, r: 41, g: 52, b: 57 },
    { x: 141, y: 284, r: 41, g: 52, b: 57 },
  ],
  { x: 39, y: 314 },
  { x: 39, y: 314 }
);
export const selectLeagueGameAmountBtns = {
  full: { x: 25, y: 285 },
  half: { x: 245, y: 285 },
  quarter: { x: 400, y: 112 },
  post: { x: 600, y: 112 },
};

export const selectYear = new Page(
  'selectYear',
  [
    { x: 274, y: 63, r: 16, g: 24, b: 24 },
    { x: 330, y: 58, r: 61, g: 69, b: 72 },
    { x: 358, y: 62, r: 30, g: 37, b: 42 },
    { x: 211, y: 105, r: 8, g: 121, b: 255 },
    { x: 217, y: 302, r: 41, g: 73, b: 123 },
    { x: 262, y: 302, r: 82, g: 109, b: 154 },
    { x: 337, y: 300, r: 126, g: 182, b: 253 },
    { x: 393, y: 299, r: 246, g: 249, b: 253 },
    { x: 465, y: 223, r: 181, g: 186, b: 189 },
    { x: 518, y: 52, r: 171, g: 173, b: 173 },
    { x: 482, y: 311, r: 222, g: 219, b: 222 },
    { x: 144, y: 308, r: 222, g: 219, b: 222 },
  ],
  { x: 392, y: 302 },
  { x: 520, y: 49 }
);

export const selectYearBtns = {
  prevYear: { x: 178, y: 156 },
  nextYear: { x: 455, y: 156 },
  submit: { x: 285, y: 303 },
};

// * BattleModes
export const battleModePanel = new Page(
  'battleModePanel',
  [
    // nav bar right
    { x: 301, y: 5, r: 206, g: 214, b: 222 },
    { x: 313, y: 10, r: 229, g: 225, b: 229 },
    { x: 324, y: 7, r: 58, g: 97, b: 132 },
    { x: 388, y: 10, r: 238, g: 234, b: 238 },
    { x: 396, y: 6, r: 242, g: 240, b: 242 },
    { x: 492, y: 10, r: 246, g: 208, b: 45 },
    { x: 486, y: 4, r: 206, g: 214, b: 222 },
    { x: 598, y: 13, r: 104, g: 126, b: 153 },
    { x: 616, y: 12, r: 206, g: 214, b: 222 },

    // bg in bottom (top will shine)
    { x: 9, y: 346, r: 16, g: 28, b: 33 },
    { x: 623, y: 344, r: 16, g: 28, b: 33 },
    { x: 397, y: 342, r: 16, g: 28, b: 33 },

    // player helmet to diff gSelectLeagueGameAmount
    { x: 8, y: 121, r: 115, g: 44, b: 41 },

    // back
    { x: 25, y: 313, r: 206, g: 210, b: 214 },
    { x: 42, y: 320, r: 206, g: 210, b: 214 },
    { x: 31, y: 333, r: 206, g: 210, b: 214 },
  ],
  { x: 41, y: 320 }, // back
  { x: 41, y: 320 }
);
export const battleModePanelBtns = {
  rankedBattle: { x: 287, y: 160 },
  friendBattle: { x: 287, y: 245 },
  powerRanking: { x: 526, y: 160 }, // unsure what is
  pvp: { x: 525, y: 245 },
};

export const rankedBattlePanel = new Page(
  'rankedBattlePanel',
  [
    // nav bar right part icon
    // sometimes nav bar will disappear
    // { x: 312, y: 9, r: 238, g: 234, b: 238 },
    // { x: 390, y: 12, r: 127, g: 128, b: 127 },
    // { x: 493, y: 13, r: 208, g: 189, b: 51 },
    // { x: 597, y: 13, r: 74, g: 93, b: 123 },

    // match list
    { x: 18, y: 60, r: 238, g: 235, b: 230 },
    { x: 39, y: 63, r: 234, g: 230, b: 226 },
    { x: 78, y: 63, r: 238, g: 235, b: 230 },
    { x: 100, y: 65, r: 238, g: 235, b: 230 },

    // ranked shop btn
    { x: 342, y: 321, r: 94, g: 52, b: 25 },
    { x: 379, y: 322, r: 219, g: 161, b: 85 },
    { x: 400, y: 322, r: 234, g: 193, b: 137 },

    // back
    { x: 24, y: 313, r: 200, g: 201, b: 198 },
    { x: 29, y: 331, r: 214, g: 218, b: 214 },
  ],
  { x: 557, y: 332 }, // play ball
  { x: 41, y: 320 }
);

// click refresh btn in rankedBattlePanel
export const rankedBattleWaitToRefresh = new Page(
  'rankedBattleWaitToRefresh',
  [
    // title and x
    { x: 207, y: 52, r: 181, g: 186, b: 189 },
    { x: 286, y: 53, r: 127, g: 131, b: 135 },
    { x: 362, y: 57, r: 181, g: 186, b: 189 },
    { x: 396, y: 51, r: 36, g: 44, b: 52 },
    { x: 518, y: 50, r: 145, g: 146, b: 145 },

    // count down bg
    { x: 114, y: 151, r: 25, g: 85, b: 82 },
    { x: 520, y: 155, r: 25, g: 53, b: 49 },

    // other bg
    { x: 106, y: 91, r: 181, g: 186, b: 189 },
    { x: 106, y: 311, r: 214, g: 219, b: 222 },
    { x: 527, y: 300, r: 214, g: 219, b: 222 },
    { x: 528, y: 255, r: 181, g: 186, b: 189 },
    { x: 523, y: 99, r: 181, g: 186, b: 189 },
  ],
  { x: 520, y: 50 }, // x
  { x: 520, y: 50 }
);

export const rankedBattleResult = new Page(
  'rankedBattleResult',
  [
    // bg in mid
    { x: 10, y: 94, r: 58, g: 93, b: 140 },
    { x: 8, y: 248, r: 140, g: 158, b: 181 },
    { x: 624, y: 95, r: 58, g: 94, b: 140 },
    { x: 621, y: 246, r: 140, g: 158, b: 181 },
    { x: 336, y: 98, r: 58, g: 97, b: 140 },
    { x: 345, y: 255, r: 148, g: 162, b: 181 },

    // tier/ score / rank
    { x: 49, y: 127, r: 198, g: 203, b: 214 },
    { x: 59, y: 130, r: 196, g: 205, b: 212 },
    { x: 74, y: 133, r: 216, g: 221, b: 228 },
    { x: 101, y: 130, r: 85, g: 117, b: 153 },
    { x: 126, y: 126, r: 207, g: 216, b: 227 },
    { x: 168, y: 129, r: 233, g: 235, b: 238 },
    { x: 188, y: 132, r: 222, g: 229, b: 230 },

    // ok
    { x: 284, y: 296, r: 8, g: 118, b: 255 },
    { x: 330, y: 297, r: 8, g: 117, b: 255 },
    { x: 364, y: 306, r: 8, g: 101, b: 247 },
    { x: 317, y: 297, r: 229, g: 237, b: 250 },
  ],
  { x: 316, y: 310 }, // ok
  { x: 316, y: 310 }
);

export const rankedBattleGameInfo = new Page(
  'rankedBattleGameInfo',
  [
    // right part of nav bar
    { x: 616, y: 10, r: 214, g: 210, b: 214 },
    { x: 595, y: 13, r: 74, g: 93, b: 123 },
    { x: 589, y: 15, r: 75, g: 94, b: 123 },
    { x: 567, y: 14, r: 74, g: 85, b: 90 },
    { x: 573, y: 15, r: 74, g: 85, b: 90 },
    { x: 478, y: 20, r: 214, g: 210, b: 214 },
    { x: 471, y: 11, r: 205, g: 218, b: 230 },
    { x: 473, y: 10, r: 206, g: 219, b: 230 },
    { x: 393, y: 8, r: 129, g: 127, b: 129 },
    { x: 319, y: 14, r: 197, g: 198, b: 197 },

    // game info title
    { x: 284, y: 58, r: 41, g: 45, b: 58 },
    { x: 298, y: 62, r: 110, g: 111, b: 121 },
    { x: 307, y: 63, r: 163, g: 166, b: 171 },
    { x: 320, y: 62, r: 41, g: 45, b: 58 },
    { x: 332, y: 63, r: 221, g: 221, b: 225 },
    { x: 348, y: 60, r: 41, g: 45, b: 58 },
    { x: 205, y: 62, r: 41, g: 45, b: 58 },
    { x: 473, y: 66, r: 41, g: 45, b: 58 },
    { x: 148, y: 61, r: 41, g: 45, b: 58 },

    // playball/ playing btn
    { x: 487, y: 328, r: 212, g: 188, b: 32 },
    { x: 610, y: 325, r: 214, g: 179, b: 0 },
    { x: 552, y: 339, r: 181, g: 142, b: 0 },

    // back
    { x: 26, y: 316, r: 214, g: 218, b: 214 },
    { x: 40, y: 316, r: 214, g: 219, b: 214 },
    { x: 33, y: 329, r: 211, g: 215, b: 210 },

    // bg between back and play
    { x: 138, y: 325, r: 58, g: 69, b: 49 },
    { x: 200, y: 329, r: 49, g: 61, b: 41 },
    { x: 265, y: 330, r: 52, g: 62, b: 44 },
    { x: 345, y: 333, r: 66, g: 75, b: 58 },
    { x: 402, y: 334, r: 49, g: 53, b: 33 },
  ],
  { x: 518, y: 329 },
  { x: 26, y: 316 }
);

// a page to start auto game
export const autoGameConfirm = new Page(
  'autoGameConfirm',
  [
    // title
    { x: 277, y: 60, r: 180, g: 186, b: 189 },
    { x: 295, y: 58, r: 16, g: 24, b: 33 },
    { x: 308, y: 61, r: 16, g: 24, b: 33 },
    { x: 328, y: 58, r: 177, g: 183, b: 185 },
    { x: 353, y: 61, r: 177, g: 182, b: 185 },

    // bg
    { x: 108, y: 49, r: 181, g: 186, b: 189 },
    { x: 107, y: 314, r: 214, g: 219, b: 222 },
    { x: 516, y: 302, r: 214, g: 219, b: 222 },
    { x: 491, y: 171, r: 181, g: 186, b: 189 },

    // x
    { x: 510, y: 48, r: 168, g: 173, b: 176 },
    { x: 516, y: 55, r: 103, g: 105, b: 109 },
    { x: 524, y: 48, r: 71, g: 70, b: 71 },

    // no and yes
    { x: 223, y: 298, r: 41, g: 77, b: 123 },
    { x: 248, y: 298, r: 158, g: 183, b: 214 },
    { x: 388, y: 299, r: 196, g: 223, b: 255 },
    { x: 430, y: 302, r: 8, g: 113, b: 247 },

    // content to diff with confirm end (you selected)
    { x: 286, y: 180, r: 82, g: 86, b: 94 },
    { x: 304, y: 178, r: 120, g: 128, b: 136 },
    { x: 324, y: 178, r: 95, g: 103, b: 112 },
  ],
  { x: 390, y: 304 }, // yes, start auto play
  { x: 237, y: 304 } // no, not start auto play
);

// a page to end auto game
export const autoGameConfirmEnd = new Page(
  'autoGameConfirmEnd',
  [
    // title
    { x: 277, y: 60, r: 180, g: 186, b: 189 },
    { x: 295, y: 58, r: 16, g: 24, b: 33 },
    { x: 308, y: 61, r: 16, g: 24, b: 33 },
    { x: 328, y: 58, r: 177, g: 183, b: 185 },
    { x: 353, y: 61, r: 177, g: 182, b: 185 },

    // bg
    { x: 108, y: 49, r: 181, g: 186, b: 189 },
    { x: 107, y: 314, r: 214, g: 219, b: 222 },
    { x: 516, y: 302, r: 214, g: 219, b: 222 },
    { x: 491, y: 171, r: 181, g: 186, b: 189 },

    // x
    { x: 510, y: 48, r: 168, g: 173, b: 176 },
    { x: 516, y: 55, r: 103, g: 105, b: 109 },
    { x: 524, y: 48, r: 71, g: 70, b: 71 },

    // no and yes
    { x: 223, y: 298, r: 41, g: 77, b: 123 },
    { x: 248, y: 298, r: 158, g: 183, b: 214 },
    { x: 388, y: 299, r: 196, g: 223, b: 255 },
    { x: 430, y: 302, r: 8, g: 113, b: 247 },

    // TODO: use end game content
  ],
  { x: 237, y: 304 }, // no, continue auto play
  { x: 390, y: 304 } // yes, end auto play
);

// * LeagueModes
export const leagueModePanelContinue = new Page(
  'leagueModePanelNextSchedule', // same behaviour as gLeagueModePanelNextSchedule
  [
    // nav bar star
    { x: 314, y: 10, r: 231, g: 231, b: 231 },
    { x: 320, y: 8, r: 247, g: 243, b: 247 },
    { x: 392, y: 13, r: 168, g: 169, b: 168 },
    { x: 394, y: 9, r: 142, g: 144, b: 142 },
    { x: 620, y: 6, r: 214, g: 211, b: 214 },

    // button on bottom
    { x: 41, y: 323, r: 67, g: 71, b: 60 },
    { x: 81, y: 324, r: 118, g: 132, b: 156 },
    { x: 131, y: 325, r: 57, g: 91, b: 124 },
    { x: 167, y: 321, r: 122, g: 138, b: 156 },
    { x: 180, y: 327, r: 24, g: 69, b: 123 },
    { x: 254, y: 327, r: 255, g: 255, b: 255 },
    { x: 338, y: 322, r: 255, g: 255, b: 255 },
    { x: 351, y: 334, r: 24, g: 60, b: 107 },
  ],
  { x: 616, y: 336 },
  { x: 41, y: 320 }
);

export const leagueModePanelNextSchedule = new Page(
  'leagueModePanelNextSchedule',
  [
    { x: 313, y: 10, r: 229, g: 229, b: 229 },
    { x: 321, y: 7, r: 165, g: 169, b: 173 },
    { x: 389, y: 9, r: 250, g: 248, b: 250 },
    { x: 495, y: 11, r: 253, g: 203, b: 18 },
    { x: 631, y: 11, r: 214, g: 211, b: 214 },
    { x: 41, y: 322, r: 62, g: 77, b: 62 },
    { x: 91, y: 324, r: 24, g: 69, b: 132 },
    { x: 173, y: 324, r: 93, g: 112, b: 140 },
    { x: 254, y: 327, r: 255, g: 255, b: 255 },
    { x: 351, y: 329, r: 24, g: 63, b: 109 },
    { x: 533, y: 335, r: 181, g: 150, b: 0 },
    { x: 459, y: 334, r: 48, g: 56, b: 33 },
  ],
  { x: 616, y: 336 },
  { x: 41, y: 320 }
);

export const leagueModePanelNextSchedule2 = new Page(
  'leagueModePanelNextSchedule',
  [
    { x: 199, y: 215, r: 0, g: 0, b: 0 },
    { x: 299, y: 9, r: 214, g: 215, b: 214 },
    { x: 312, y: 7, r: 255, g: 251, b: 255 },
    { x: 371, y: 12, r: 57, g: 97, b: 132 },
    { x: 387, y: 8, r: 221, g: 221, b: 221 },
    { x: 390, y: 10, r: 143, g: 141, b: 143 },
    { x: 393, y: 11, r: 67, g: 70, b: 67 },
    { x: 470, y: 12, r: 177, g: 191, b: 202 },
    { x: 476, y: 12, r: 177, g: 191, b: 202 },
    { x: 493, y: 9, r: 255, g: 246, b: 192 },
    { x: 496, y: 13, r: 245, g: 166, b: 8 },
    { x: 568, y: 13, r: 117, g: 124, b: 134 },
    { x: 573, y: 15, r: 74, g: 81, b: 90 },
    { x: 580, y: 18, r: 214, g: 211, b: 214 },
    { x: 597, y: 13, r: 74, g: 93, b: 123 },
    { x: 603, y: 15, r: 74, g: 93, b: 123 },
    { x: 622, y: 14, r: 214, g: 215, b: 214 },
    { x: 621, y: 29, r: 0, g: 56, b: 90 },
    { x: 600, y: 30, r: 246, g: 242, b: 246 },
    { x: 600, y: 30, r: 246, g: 242, b: 246 },
    { x: 27, y: 315, r: 214, g: 219, b: 214 },
    { x: 45, y: 319, r: 215, g: 219, b: 214 },
    { x: 37, y: 330, r: 214, g: 219, b: 214 },
    { x: 71, y: 316, r: 24, g: 77, b: 141 },
    { x: 80, y: 320, r: 144, g: 162, b: 185 },
    { x: 108, y: 320, r: 194, g: 214, b: 233 },
    { x: 174, y: 315, r: 24, g: 77, b: 148 },
    { x: 173, y: 320, r: 168, g: 181, b: 198 },
    { x: 206, y: 321, r: 214, g: 231, b: 244 },
    { x: 245, y: 320, r: 24, g: 73, b: 140 },
    { x: 251, y: 321, r: 181, g: 195, b: 214 },
    { x: 286, y: 323, r: 94, g: 133, b: 172 },
    { x: 315, y: 328, r: 24, g: 65, b: 116 },
    { x: 337, y: 324, r: 177, g: 193, b: 207 },
    { x: 376, y: 320, r: 185, g: 207, b: 227 },
    { x: 402, y: 330, r: 21, g: 62, b: 112 },
    { x: 611, y: 327, r: 194, g: 173, b: 87 },
    { x: 599, y: 326, r: 255, g: 255, b: 254 },
    { x: 561, y: 326, r: 255, g: 255, b: 255 },
    { x: 506, y: 324, r: 240, g: 230, b: 196 },
  ],
  { x: 616, y: 336 },
  { x: 41, y: 320 }
);

export const leagueModeScheduleGroup = new GroupPage(
  'leagueModeScheduleGroup',
  [leagueModePanelContinue, leagueModePanelNextSchedule, leagueModePanelNextSchedule2],
  leagueModePanelContinue.next /* next*/,
  leagueModePanelContinue.back /* back*/
);

export const leagueModeGameInfo = new Page(
  'leagueModeGameInfo',
  [
    { x: 292, y: 9, r: 214, g: 213, b: 214 },
    { x: 314, y: 7, r: 255, g: 251, b: 255 },
    { x: 379, y: 3, r: 214, g: 215, b: 214 },
    { x: 389, y: 10, r: 239, g: 236, b: 239 },
    { x: 482, y: 3, r: 214, g: 218, b: 220 },
    { x: 493, y: 9, r: 255, g: 246, b: 192 },
    { x: 589, y: 11, r: 74, g: 93, b: 123 },
    { x: 596, y: 11, r: 81, g: 104, b: 131 },
    { x: 624, y: 12, r: 214, g: 211, b: 214 },
    { x: 26, y: 312, r: 209, g: 214, b: 209 },
    { x: 631, y: 56, r: 206, g: 207, b: 214 },
    { x: 631, y: 70, r: 168, g: 177, b: 193 },
    { x: 623, y: 64, r: 33, g: 125, b: 255 },
    { x: 270, y: 179, r: 206, g: 211, b: 222 },
    { x: 256, y: 214, r: 206, g: 211, b: 222 },
    { x: 242, y: 242, r: 206, g: 211, b: 222 },
    { x: 612, y: 281, r: 24, g: 36, b: 49 },
  ],
  { x: 546, y: 325 }, // playBall
  { x: 41, y: 320 }
);

// normal game play start
export const selectPlayRoleBtns = {
  playOffenseOnly: { x: 128, y: 279 },
  playAll: { x: 317, y: 282 },
  playDeffenseOnly: { x: 506, y: 281 },
};

export const selectPlayRole = new Page(
  'selectPlayRole',
  [
    { x: 97, y: 282, r: 255, g: 255, b: 255 },
    { x: 145, y: 282, r: 255, g: 255, b: 255 },
    { x: 499, y: 282, r: 255, g: 255, b: 255 },
    { x: 539, y: 282, r: 255, g: 255, b: 255 },
    { x: 543, y: 282, r: 255, g: 255, b: 255 },
    { x: 563, y: 282, r: 255, g: 255, b: 255 },

    { x: 90, y: 110, r: 194, g: 82, b: 24 },
    { x: 552, y: 112, r: 57, g: 120, b: 197 },
  ],
  // TODO: make which role can be selected if need
  selectPlayRoleBtns.playAll,
  selectPlayRoleBtns.playAll
);

// sometimes happened when restarting a continued game
// or cancel auto play during playing
export const leagueContinuePlaying = new Page(
  'leagueContinuePlaying',
  [
    // fast progression
    { x: 452, y: 279, r: 8, g: 109, b: 255 },
    { x: 476, y: 279, r: 251, g: 252, b: 255 },
    { x: 502, y: 275, r: 190, g: 220, b: 255 },
    { x: 530, y: 279, r: 218, g: 233, b: 255 },
    { x: 552, y: 273, r: 8, g: 125, b: 255 },
    { x: 563, y: 276, r: 234, g: 244, b: 255 },
    { x: 579, y: 279, r: 8, g: 109, b: 255 },
    { x: 587, y: 273, r: 8, g: 125, b: 255 },
    // continue
    { x: 458, y: 320, r: 8, g: 109, b: 255 },
    { x: 480, y: 324, r: 122, g: 168, b: 247 },
    { x: 520, y: 317, r: 84, g: 159, b: 250 },
    { x: 544, y: 324, r: 226, g: 234, b: 252 },
    { x: 572, y: 319, r: 8, g: 113, b: 255 },
    { x: 591, y: 325, r: 0, g: 97, b: 247 },
  ],
  { x: 458, y: 320 }, // continue game
  { x: 458, y: 320 } // continue game
);

export const leagueOnPlayAutoOff = new Page(
  'leagueOnPlayAutoOff',
  [
    // auto
    { x: 514, y: 20, r: 255, g: 255, b: 255 },
    { x: 525, y: 21, r: 255, g: 255, b: 255 },
    // camera
    { x: 556, y: 21, r: 183, g: 185, b: 186 },
    { x: 560, y: 23, r: 197, g: 198, b: 197 },
    { x: 569, y: 21, r: 206, g: 207, b: 206 },
  ],
  { x: 511, y: 20 }, // switch to auto mode
  { x: 611, y: 20 } // pause button
);

export const leagueOnPlayAutoOff1 = new Page(
  'leagueOnPlayAutoOff',
  // has swing button
  [
    { x: 521, y: 263, r: 24, g: 29, b: 16 },
    { x: 520, y: 255, r: 213, g: 213, b: 212 },
    { x: 533, y: 255, r: 223, g: 221, b: 222 },
    { x: 514, y: 244, r: 16, g: 28, b: 16 },
  ],
  { x: 511, y: 20 }, // switch to auto mode
  { x: 611, y: 20 } // pause button
);

export const leagueOnPlayAutoOffGroup = new GroupPage(
  'leagueOnPlayAutoOffGroup',
  [leagueOnPlayAutoOff, leagueOnPlayAutoOff1],
  leagueOnPlayAutoOff.next /* next */,
  leagueOnPlayAutoOff.back /* back */
);

// auto play on, power save off
export const leagueOnPlayPowerSaveOff = new Page(
  'leagueOnPlayPowerSaveOff',
  [
    // battery
    { x: 486, y: 13, r: 255, g: 255, b: 255 },
    { x: 492, y: 16, r: 101, g: 103, b: 101 },
    { x: 488, y: 22, r: 210, g: 208, b: 210 },
    { x: 481, y: 27, r: 102, g: 101, b: 101 },
    { x: 489, y: 29, r: 197, g: 197, b: 197 },
  ],
  { x: 485, y: 21 }, // turn on power save
  { x: 552, y: 21 } // turn off auto play
);

// same as gLeagueOnPlayPowerSaveOff, but is stopped
// need to turn on autoplay
export const leagueOnPlayPowerSaveOffStopped = new Page(
  'leagueOnPlayPowerSaveOff',
  [
    // battery
    { x: 486, y: 13, r: 255, g: 255, b: 255 },
    { x: 492, y: 16, r: 101, g: 103, b: 101 },
    { x: 488, y: 22, r: 210, g: 208, b: 210 },
    { x: 481, y: 27, r: 102, g: 101, b: 101 },
    { x: 489, y: 29, r: 197, g: 197, b: 197 },

    // disabled autoplay text
    { x: 524, y: 23, r: 91, g: 110, b: 158 },
    { x: 530, y: 20, r: 140, g: 146, b: 152 },
    { x: 533, y: 24, r: 93, g: 106, b: 143 },
    { x: 550, y: 25, r: 85, g: 105, b: 153 },
    { x: 552, y: 21, r: 147, g: 153, b: 156 },
    { x: 557, y: 20, r: 148, g: 154, b: 156 },
    { x: 566, y: 24, r: 99, g: 121, b: 173 },
    { x: 575, y: 18, r: 107, g: 121, b: 173 },
    { x: 584, y: 19, r: 97, g: 122, b: 169 },
    { x: 589, y: 22, r: 118, g: 127, b: 149 },
    { x: 595, y: 18, r: 141, g: 150, b: 156 },
    { x: 606, y: 23, r: 74, g: 93, b: 132 },
  ],
  { x: 0, y: 0 }, // turn on auto play
  { x: 0, y: 0 } // turn on auto play
);

// don't do any thing, just avoid to enter unknown
export const leagueOnPlayPowerSaveOffMid = new Page(
  'leagueOnPlayPowerSaveOff',
  [
    // battery
    { x: 486, y: 13, r: 255, g: 255, b: 255 },

    // dialog on
    { x: 604, y: 47, r: 170, g: 171, b: 170 },
    { x: 607, y: 49, r: 246, g: 246, b: 246 },
    { x: 611, y: 54, r: 213, g: 210, b: 213 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);
export const leagueOnPlayPowerSaveOffMid1 = new Page(
  'leagueOnPlayPowerSaveOff',
  [
    // battery
    { x: 486, y: 13, r: 255, g: 255, b: 255 },

    // dialog off
    { x: 605, y: 50, r: 95, g: 99, b: 97 },
    { x: 602, y: 51, r: 109, g: 114, b: 116 },
    { x: 603, y: 49, r: 131, g: 133, b: 131 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

export const leagueOnPlayPowerSaveOffGroups = new GroupPage('leagueOnPlayPowerSaveOffGroup', [
  leagueOnPlayPowerSaveOff,
  leagueOnPlayPowerSaveOffStopped,
  leagueOnPlayPowerSaveOffMid,
  leagueOnPlayPowerSaveOffMid1,
]);

export const onPlayPowerSaveOn = new Page(
  'onPlayPowerSaveOn',
  [
    { x: 304, y: 136, r: 156, g: 160, b: 165 },
    { x: 305, y: 136, r: 156, g: 160, b: 165 },
    { x: 306, y: 136, r: 156, g: 160, b: 165 },
    { x: 307, y: 136, r: 156, g: 160, b: 165 },
    { x: 308, y: 136, r: 156, g: 160, b: 165 },

    { x: 301, y: 133, r: 165, g: 162, b: 165 },
    { x: 302, y: 133, r: 165, g: 162, b: 165 },
    { x: 303, y: 133, r: 165, g: 162, b: 165 },
    { x: 304, y: 133, r: 165, g: 162, b: 165 },
    { x: 305, y: 133, r: 165, g: 162, b: 165 },
    { x: 36, y: 26, r: 0, g: 0, b: 0 },
    { x: 36, y: 326, r: 0, g: 0, b: 0 },
    { x: 613, y: 330, r: 0, g: 0, b: 0 },
    { x: 618, y: 10, r: 0, g: 0, b: 0 },
    { x: 602, y: 27, r: 0, g: 0, b: 0 },
    { x: 174, y: 162, r: 0, g: 0, b: 0 },
    { x: 476, y: 158, r: 0, g: 0, b: 0 },
    // score bg
    { x: 497, y: 300, r: 16, g: 20, b: 16 },
    { x: 498, y: 300, r: 16, g: 20, b: 16 },
    { x: 499, y: 300, r: 16, g: 20, b: 16 },
    { x: 500, y: 300, r: 16, g: 20, b: 16 },
    { x: 501, y: 300, r: 16, g: 20, b: 16 },
    { x: 502, y: 300, r: 16, g: 20, b: 16 },
    { x: 503, y: 300, r: 16, g: 20, b: 16 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

// FIXME: change colors
export const onQuickPlay = new Page(
  'onQuickPlay',
  [
    // bg right panel
    { x: 456, y: 11, r: 58, g: 77, b: 123 },
    { x: 623, y: 10, r: 58, g: 73, b: 115 },
    { x: 457, y: 348, r: 33, g: 40, b: 58 },
    { x: 632, y: 350, r: 33, g: 40, b: 58 },

    // blue btn: play manually
    { x: 298, y: 321, r: 33, g: 131, b: 255 },
    { x: 311, y: 335, r: 158, g: 191, b: 235 },
    { x: 433, y: 334, r: 8, g: 57, b: 123 },
    { x: 433, y: 349, r: 0, g: 81, b: 238 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

export const onQuickPlay1 = new Page(
  'onQuickPlay', // same behaviour, without blue btn on right bottom
  [
    // bg right panel
    { x: 454, y: 8, r: 58, g: 77, b: 123 },
    { x: 455, y: 351, r: 33, g: 40, b: 58 },
    { x: 628, y: 348, r: 33, g: 40, b: 58 },
    { x: 627, y: 9, r: 58, g: 73, b: 115 },

    // diff from other page
    { x: 433, y: 324, r: 85, g: 107, b: 68 },
    { x: 433, y: 320, r: 83, g: 109, b: 66 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

// sometimes the quick play will be paused
export const onQuickPlayPause = new Page(
  'onQuickPlayPause',
  [
    { x: 456, y: 11, r: 49, g: 73, b: 123 },
    { x: 472, y: 22, r: 201, g: 207, b: 218 },
    { x: 532, y: 22, r: 81, g: 100, b: 128 },
    { x: 453, y: 347, r: 24, g: 36, b: 57 },
    { x: 306, y: 276, r: 8, g: 118, b: 255 },
    { x: 421, y: 283, r: 2, g: 105, b: 247 },
    { x: 325, y: 337, r: 0, g: 97, b: 247 },
    { x: 430, y: 336, r: 0, g: 97, b: 247 },
  ],
  { x: 376, y: 329 }, // play ball // TODO: might need to set inning
  { x: 376, y: 329 }
);

export const onQuickPlayGroup = new GroupPage('onQuickPlay', [onQuickPlay, onQuickPlay1], onQuickPlay.next /* next */);

// when playing, press back
export const leagueOnPlayPause = new Page(
  'leagueOnPlayPause',
  [
    // continue button
    { x: 89, y: 148, r: 255, g: 255, b: 255 },
    { x: 99, y: 138, r: 82, g: 89, b: 99 },
    // leave button
    { x: 527, y: 165, r: 255, g: 255, b: 255 },
    { x: 555, y: 153, r: 255, g: 255, b: 255 },
    // mlb logo
    { x: 554, y: 291, r: 0, g: 28, b: 57 },
    { x: 563, y: 294, r: 255, g: 255, b: 255 },
    { x: 565, y: 290, r: 30, g: 54, b: 88 },
  ],
  { x: 89, y: 148 }, // continue game
  { x: 527, y: 165 } // leave
);

export const gameResult = new Page(
  'gameResult',
  [
    { x: 458, y: 24, r: 41, g: 44, b: 49 }, // title
    { x: 126, y: 333, r: 49, g: 81, b: 123 }, // view all btn
    { x: 247, y: 335, r: 41, g: 81, b: 115 }, // box score btn
    { x: 609, y: 335, r: 8, g: 109, b: 255 }, // next btn
  ],
  { x: 609, y: 335 },
  { x: 609, y: 335 }
);

export const gameResultAquired = new Page(
  'gameResultAquired',
  [
    { x: 449, y: 23, r: 41, g: 44, b: 49 }, // title
    { x: 39, y: 329, r: 213, g: 218, b: 213 }, // back btn
    { x: 158, y: 287, r: 247, g: 126, b: 51 }, // player pack btn
    { x: 612, y: 328, r: 8, g: 109, b: 247 }, // ok btn
  ],
  { x: 612, y: 328 },
  { x: 612, y: 328 }
);

export const gameResultOther = new Page(
  'gameResultOther',
  [
    { x: 71, y: 29, r: 0, g: 85, b: 156 },
    { x: 556, y: 15, r: 212, g: 228, b: 241 },
    { x: 595, y: 13, r: 0, g: 93, b: 181 },
    { x: 610, y: 13, r: 0, g: 28, b: 57 },
    { x: 618, y: 13, r: 17, g: 26, b: 58 },
    { x: 624, y: 8, r: 243, g: 244, b: 245 },
    { x: 627, y: 24, r: 165, g: 186, b: 202 },
    { x: 578, y: 23, r: 70, g: 132, b: 182 },
    { x: 249, y: 56, r: 84, g: 121, b: 161 },
    { x: 267, y: 56, r: 255, g: 255, b: 255 },
    { x: 319, y: 60, r: 168, g: 191, b: 208 },
    { x: 377, y: 58, r: 255, g: 255, b: 255 },
    { x: 29, y: 93, r: 0, g: 36, b: 66 },
    { x: 617, y: 314, r: 16, g: 24, b: 17 },
    { x: 108, y: 322, r: 8, g: 20, b: 16 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

export const gameResultWorldChampion = new Page(
  'gameResultWorldChampion',
  [
    { x: 252, y: 22, r: 57, g: 67, b: 74 },
    { x: 323, y: 42, r: 116, g: 109, b: 83 },
    { x: 350, y: 73, r: 66, g: 91, b: 96 },
    { x: 49, y: 331, r: 16, g: 32, b: 41 },
    { x: 209, y: 322, r: 8, g: 20, b: 24 },
    { x: 294, y: 326, r: 208, g: 208, b: 212 },
    { x: 400, y: 323, r: 192, g: 190, b: 192 },
    { x: 439, y: 323, r: 85, g: 98, b: 100 },
    { x: 578, y: 195, r: 16, g: 36, b: 41 },
    { x: 316, y: 167, r: 212, g: 210, b: 212 },
    { x: 338, y: 173, r: 65, g: 71, b: 71 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

export const gameReward = new Page(
  'gameReward',
  [
    { x: 24, y: 336, r: 16, g: 32, b: 41 },
    { x: 577, y: 26, r: 0, g: 4, b: 0 },
    { x: 601, y: 335, r: 16, g: 32, b: 41 },
    { x: 411, y: 268, r: 8, g: 114, b: 255 },
    { x: 434, y: 270, r: 66, g: 144, b: 252 },
    { x: 487, y: 274, r: 0, g: 102, b: 247 },
    { x: 497, y: 122, r: 255, g: 255, b: 255 },
    { x: 461, y: 193, r: 42, g: 58, b: 58 },
  ],
  { x: 412, y: 271 },
  { x: 412, y: 271 }
);

export const bestPositionAwardBonus = new Page(
  'bestPositionAwardBonus',
  [
    // bg
    { x: 141, y: 21, r: 0, g: 81, b: 148 },
    { x: 609, y: 26, r: 0, g: 81, b: 148 },
    { x: 26, y: 335, r: 16, g: 24, b: 24 },
    { x: 626, y: 339, r: 16, g: 24, b: 24 },
    { x: 4, y: 148, r: 8, g: 24, b: 33 },
    { x: 628, y: 140, r: 16, g: 32, b: 49 },

    // team 1 being selected
    { x: 173, y: 18, r: 0, g: 117, b: 255 },
    { x: 176, y: 30, r: 158, g: 173, b: 199 },
    { x: 184, y: 36, r: 8, g: 105, b: 255 },

    // team 2 not being selected
    { x: 328, y: 27, r: 49, g: 85, b: 123 },
    { x: 337, y: 31, r: 16, g: 48, b: 82 },
    { x: 343, y: 37, r: 41, g: 77, b: 115 },

    // ok
    { x: 547, y: 320, r: 0, g: 113, b: 248 },
    { x: 566, y: 321, r: 255, g: 255, b: 255 },
    { x: 577, y: 324, r: 228, g: 239, b: 248 },
    { x: 605, y: 325, r: 8, g: 109, b: 247 },
    { x: 611, y: 316, r: 0, g: 117, b: 255 },
  ],
  { x: 570, y: 325 },
  { x: 570, y: 325 }
);

export const bestPositionAwardBonus2 = new Page(
  'bestPositionAwardBonus',
  [
    // bg
    { x: 141, y: 21, r: 0, g: 81, b: 148 },
    { x: 609, y: 26, r: 0, g: 81, b: 148 },
    { x: 26, y: 335, r: 16, g: 24, b: 24 },
    { x: 626, y: 339, r: 16, g: 24, b: 24 },
    { x: 4, y: 148, r: 8, g: 24, b: 33 },
    { x: 628, y: 140, r: 16, g: 32, b: 49 },

    // team 1 not being selected
    { x: 189, y: 22, r: 49, g: 85, b: 123 },
    { x: 178, y: 34, r: 8, g: 48, b: 82 },
    { x: 169, y: 39, r: 41, g: 77, b: 115 },

    // team 2 being selected
    { x: 343, y: 21, r: 2, g: 117, b: 255 },
    { x: 337, y: 31, r: 163, g: 170, b: 197 },
    { x: 331, y: 40, r: 8, g: 97, b: 255 },

    // ok
    { x: 547, y: 320, r: 0, g: 113, b: 248 },
    { x: 566, y: 321, r: 255, g: 255, b: 255 },
    { x: 577, y: 324, r: 228, g: 239, b: 248 },
    { x: 605, y: 325, r: 8, g: 109, b: 247 },
    { x: 611, y: 316, r: 0, g: 117, b: 255 },
  ],
  { x: 570, y: 325 },
  { x: 570, y: 325 }
);

export const bestPositionAwardBonusGroup = new GroupPage(
  'bestPositionAwardBonus',
  [bestPositionAwardBonus, bestPositionAwardBonus2],
  bestPositionAwardBonus.next /* next */
);

// next page of gBestPositionAwardBonus
export const bonusGrantedByTeamRecord = new Page(
  'bonusGrantedByTeamRecord',
  [
    // table bg
    { x: 38, y: 75, r: 49, g: 69, b: 107 },
    { x: 600, y: 73, r: 49, g: 69, b: 107 },
    { x: 601, y: 289, r: 0, g: 8, b: 16 },
    { x: 28, y: 285, r: 8, g: 12, b: 16 },

    // title
    { x: 176, y: 76, r: 49, g: 68, b: 107 },
    { x: 217, y: 77, r: 128, g: 136, b: 159 },
    { x: 255, y: 76, r: 131, g: 137, b: 157 },
    { x: 278, y: 76, r: 78, g: 95, b: 128 },
    { x: 324, y: 77, r: 113, g: 122, b: 150 },
    { x: 362, y: 75, r: 46, g: 66, b: 104 },
    { x: 405, y: 77, r: 178, g: 185, b: 206 },
    { x: 425, y: 72, r: 184, g: 187, b: 206 },
    { x: 439, y: 77, r: 53, g: 70, b: 110 },

    // ok
    { x: 547, y: 320, r: 0, g: 113, b: 248 },
    { x: 566, y: 321, r: 255, g: 255, b: 255 },
    { x: 577, y: 324, r: 228, g: 239, b: 248 },
    { x: 605, y: 325, r: 8, g: 109, b: 247 },
    { x: 611, y: 316, r: 0, g: 117, b: 255 },
  ],
  { x: 570, y: 325 },
  { x: 570, y: 325 }
);

export const postSeasonAwardBonus = new Page(
  'postSeasonAwardBonus',
  [
    // bg
    { x: 39, y: 24, r: 0, g: 81, b: 148 },
    { x: 320, y: 15, r: 0, g: 85, b: 165 },
    { x: 615, y: 23, r: 0, g: 81, b: 148 },
    { x: 11, y: 268, r: 16, g: 28, b: 33 },
    { x: 621, y: 258, r: 16, g: 28, b: 33 },
    { x: 624, y: 351, r: 16, g: 24, b: 24 },
    { x: 17, y: 338, r: 16, g: 24, b: 24 },
    { x: 316, y: 342, r: 16, g: 24, b: 24 },

    // ok
    { x: 531, y: 318, r: 0, g: 117, b: 255 },
    { x: 564, y: 323, r: 218, g: 234, b: 254 },
    { x: 577, y: 323, r: 255, g: 255, b: 255 },
    { x: 608, y: 318, r: 0, g: 117, b: 255 },
    { x: 606, y: 331, r: 8, g: 105, b: 255 },
  ],
  { x: 570, y: 325 },
  { x: 570, y: 325 }
);

export const gameLineUp = new Page(
  'gameLineUp',
  [
    // content top bg
    { x: 591, y: 59, r: 49, g: 73, b: 107 },
    // progress bg
    { x: 19, y: 211, r: 24, g: 32, b: 49 },
    // battle lineup button in bottom
    { x: 536, y: 322, r: 41, g: 81, b: 137 },
    { x: 553, y: 322, r: 188, g: 209, b: 224 },
    { x: 568, y: 322, r: 204, g: 220, b: 234 },
    { x: 585, y: 324, r: 107, g: 139, b: 177 },
    { x: 604, y: 324, r: 25, g: 73, b: 132 },
    // back
    { x: 26, y: 314, r: 214, g: 219, b: 214 },
    { x: 43, y: 321, r: 214, g: 219, b: 214 },
    { x: 36, y: 329, r: 211, g: 216, b: 210 },
  ],
  { x: 40, y: 324 },
  { x: 40, y: 324 }
);

export const playerGrowthComplete = new Page(
  'playerGrowthComplete',
  [
    { x: 163, y: 79, r: 181, g: 186, b: 189 },
    { x: 223, y: 60, r: 41, g: 49, b: 49 },
    { x: 347, y: 57, r: 49, g: 56, b: 58 },
    { x: 308, y: 70, r: 181, g: 186, b: 189 },
    { x: 303, y: 62, r: 82, g: 89, b: 91 },
    { x: 517, y: 50, r: 188, g: 189, b: 189 },
    { x: 521, y: 63, r: 181, g: 183, b: 189 },
    { x: 527, y: 46, r: 60, g: 63, b: 67 },
    { x: 131, y: 165, r: 206, g: 211, b: 222 },
    { x: 146, y: 144, r: 57, g: 81, b: 99 },
    { x: 489, y: 138, r: 214, g: 32, b: 247 },
    { x: 488, y: 157, r: 187, g: 190, b: 203 },
    { x: 172, y: 246, r: 181, g: 186, b: 189 },
    { x: 265, y: 297, r: 8, g: 118, b: 255 },
    { x: 287, y: 306, r: 219, g: 231, b: 255 },
    { x: 298, y: 302, r: 232, g: 240, b: 251 },
    { x: 310, y: 305, r: 255, g: 255, b: 255 },
    { x: 324, y: 298, r: 251, g: 253, b: 255 },
    { x: 407, y: 294, r: 8, g: 122, b: 255 },
    { x: 416, y: 315, r: 0, g: 85, b: 239 },
    { x: 464, y: 309, r: 222, g: 219, b: 222 },
    { x: 108, y: 300, r: 222, g: 219, b: 222 },
  ],
  { x: 325, y: 304 },
  { x: 325, y: 304 }
);

export const leagueRewardAchievementGrade = new Page(
  'leagueRewardAchievementGrade',
  [
    { x: 17, y: 32, r: 181, g: 186, b: 189 },
    { x: 179, y: 45, r: 45, g: 50, b: 54 },
    { x: 287, y: 53, r: 73, g: 78, b: 81 },
    { x: 334, y: 48, r: 72, g: 79, b: 80 },
    { x: 394, y: 51, r: 16, g: 24, b: 24 },
    { x: 439, y: 50, r: 118, g: 122, b: 126 },
    { x: 442, y: 50, r: 79, g: 85, b: 92 },
    { x: 587, y: 46, r: 181, g: 186, b: 189 },
    { x: 595, y: 37, r: 179, g: 180, b: 186 },
    { x: 601, y: 44, r: 189, g: 186, b: 189 },
    { x: 597, y: 52, r: 149, g: 154, b: 156 },
    { x: 608, y: 37, r: 188, g: 185, b: 188 },
    { x: 609, y: 51, r: 181, g: 183, b: 182 },
    { x: 615, y: 68, r: 181, g: 186, b: 189 },
    { x: 614, y: 84, r: 16, g: 65, b: 107 },
    { x: 609, y: 197, r: 16, g: 65, b: 107 },
    { x: 607, y: 217, r: 24, g: 28, b: 33 },
    { x: 614, y: 323, r: 33, g: 40, b: 49 },
    { x: 610, y: 348, r: 8, g: 8, b: 0 },
    { x: 17, y: 83, r: 0, g: 48, b: 90 },
    { x: 18, y: 199, r: 0, g: 48, b: 90 },
    { x: 20, y: 325, r: 33, g: 40, b: 49 },
  ],
  { x: 600, y: 45 },
  { x: 600, y: 45 }
);

export const leagueRewardAchievementGradeBonusPlayer = new Page(
  'leagueRewardAchievementGradeBonusPlayer',
  [
    // title and x
    { x: 173, y: 58, r: 147, g: 153, b: 156 },
    { x: 229, y: 58, r: 79, g: 82, b: 82 },
    { x: 320, y: 60, r: 160, g: 163, b: 164 },
    { x: 373, y: 55, r: 177, g: 184, b: 185 },
    { x: 443, y: 60, r: 101, g: 105, b: 110 },
    { x: 521, y: 51, r: 66, g: 69, b: 66 },

    // logo on center
    { x: 290, y: 132, r: 8, g: 28, b: 66 },
    { x: 325, y: 150, r: 255, g: 255, b: 255 },
    { x: 357, y: 133, r: 189, g: 0, b: 33 },

    // next
    { x: 281, y: 298, r: 8, g: 117, b: 255 },
    { x: 323, y: 299, r: 220, g: 234, b: 250 },
    { x: 365, y: 307, r: 8, g: 101, b: 247 },
    { x: 307, y: 301, r: 250, g: 252, b: 254 },
    { x: 329, y: 297, r: 252, g: 253, b: 255 },
  ],
  { x: 320, y: 300 },
  { x: 320, y: 300 }
);

export const pitcherOfTheMonth = new Page(
  'pitcherOfTheMonth',
  [
    { x: 27, y: 38, r: 181, g: 186, b: 198 },
    { x: 602, y: 46, r: 154, g: 152, b: 155 },
    { x: 535, y: 309, r: 139, g: 188, b: 255 },
    { x: 605, y: 316, r: 0, g: 97, b: 247 },
    { x: 391, y: 309, r: 222, g: 219, b: 222 },
  ],
  { x: 545, y: 310 },
  { x: 545, y: 310 }
);

export const mvp = new Page(
  'mvp',
  [
    { x: 273, y: 23, r: 0, g: 89, b: 165 },
    { x: 297, y: 25, r: 90, g: 145, b: 200 },
    { x: 320, y: 25, r: 255, g: 255, b: 255 },
    { x: 332, y: 29, r: 126, g: 169, b: 204 },
    { x: 380, y: 53, r: 0, g: 65, b: 122 },
    { x: 493, y: 322, r: 16, g: 20, b: 8 },
    { x: 568, y: 320, r: 38, g: 120, b: 218 },
    { x: 635, y: 341, r: 8, g: 16, b: 8 },
    { x: 620, y: 164, r: 0, g: 8, b: 8 },
    { x: 9, y: 176, r: 12, g: 24, b: 24 },
  ],
  { x: 568, y: 320 },
  { x: 568, y: 320 }
);

export const selectRewardPlayer = new Page(
  'selectRewardPlayer',
  [
    // bg
    { x: 4, y: 6, r: 0, g: 97, b: 189 },
    { x: 11, y: 346, r: 16, g: 16, b: 8 },
    { x: 7, y: 350, r: 16, g: 20, b: 16 },

    // title
    { x: 191, y: 29, r: 146, g: 180, b: 211 },
    { x: 223, y: 27, r: 234, g: 241, b: 248 },
    { x: 287, y: 22, r: 24, g: 103, b: 170 },
    { x: 357, y: 29, r: 234, g: 241, b: 247 },
    { x: 426, y: 29, r: 13, g: 94, b: 162 },
    { x: 456, y: 31, r: 8, g: 85, b: 156 },
    { x: 223, y: 26, r: 239, g: 244, b: 250 },
  ],
  { x: 568, y: 320 },
  { x: 568, y: 320 }
);
// TODO: check the position, must be bg of 'diamond', 'old' ...
// bg of the word
// ref: https://www.facebook.com/mlb9innings/photos/1366596103748570
// left, mid and right respectively
export const selectRewardPlayerBtns = [
  { x: 66, y: 217 },
  { x: 221, y: 217 },
  { x: 377, y: 217 },
];
// only include basic types
// {r}-{g}-{b}: prority
// try x 23, y 260 in player info
export const playerCardColorToRank: { [k: string]: number } = {
  '66-74-74': 1, // normal TODO: unknown color
  '99-65-41': 2, // brown
  '99-65-49': 2, // brown
  '132-129-148': 3, // silver
  '189-166-49': 4, // gold
  '189-166-58': 4, // gold
  '198-170-57': 4, // gold
  '148-101-25': 4, // gold
  '165-166-90': 4, // gold
  '41-69-107': 5, // diamond TODO: unknown color
};

// adReward pages
export const adReward = new Page(
  'adReward',
  [
    // title
    { x: 248, y: 41, r: 181, g: 186, b: 189 },
    { x: 278, y: 48, r: 16, g: 24, b: 24 },
    { x: 307, y: 49, r: 20, g: 26, b: 28 },
    { x: 357, y: 49, r: 155, g: 161, b: 164 },
    { x: 397, y: 41, r: 181, g: 186, b: 189 },

    // watch ad
    { x: 342, y: 299, r: 49, g: 166, b: 90 },
    { x: 365, y: 303, r: 211, g: 236, b: 241 },
    { x: 413, y: 305, r: 255, g: 255, b: 255 },
    { x: 448, y: 305, r: 49, g: 158, b: 90 },
    { x: 466, y: 312, r: 41, g: 150, b: 82 },

    // cancel
    { x: 187, y: 304, r: 8, g: 114, b: 255 },
    { x: 232, y: 303, r: 197, g: 223, b: 255 },
    { x: 280, y: 308, r: 8, g: 109, b: 247 },
  ],
  { x: 404, y: 310 },
  { x: 117, y: 308 }
);

export const adRewardRedeem = new Page(
  'adRewardRedeem',
  [
    // title
    { x: 248, y: 41, r: 181, g: 186, b: 189 },
    { x: 278, y: 48, r: 16, g: 24, b: 24 },
    { x: 307, y: 49, r: 20, g: 26, b: 28 },
    { x: 357, y: 49, r: 155, g: 161, b: 164 },
    { x: 397, y: 41, r: 181, g: 186, b: 189 },

    // ok
    { x: 301, y: 310, r: 8, g: 109, b: 247 },
    { x: 319, y: 307, r: 19, g: 117, b: 244 },
    { x: 349, y: 307, r: 8, g: 113, b: 255 },
  ],
  { x: 303, y: 304 },
  { x: 303, y: 304 }
);

export const adRewardOnCD = new Page(
  'adRewardOnCD',
  [
    // title
    { x: 249, y: 53, r: 181, g: 186, b: 189 },
    { x: 270, y: 65, r: 16, g: 24, b: 24 },
    { x: 329, y: 63, r: 181, g: 186, b: 189 },
    { x: 367, y: 56, r: 79, g: 84, b: 87 },

    // x
    { x: 516, y: 48, r: 142, g: 140, b: 143 },
    { x: 522, y: 57, r: 186, g: 185, b: 188 },
    { x: 522, y: 45, r: 188, g: 186, b: 189 },

    // ok
    { x: 282, y: 299, r: 8, g: 118, b: 255 },
    { x: 317, y: 297, r: 115, g: 178, b: 255 },
    { x: 413, y: 303, r: 222, g: 219, b: 222 },
    { x: 364, y: 305, r: 1, g: 105, b: 248 },
  ],
  { x: 516, y: 48 },
  { x: 516, y: 48 }
);

export const adGroup = new GroupPage('adPages', [adReward, adRewardRedeem, adRewardOnCD]);

// weekly mission pages
export const achivementMission = new Page(
  'achivementMission',
  [
    // nav bar right part (p, star ...)
    { x: 299, y: 13, r: 214, g: 214, b: 214 },
    { x: 318, y: 9, r: 238, g: 234, b: 238 },
    { x: 313, y: 9, r: 238, g: 234, b: 238 },
    { x: 392, y: 9, r: 232, g: 229, b: 232 },
    { x: 385, y: 2, r: 214, g: 214, b: 214 },
    { x: 496, y: 13, r: 238, g: 166, b: 16 },
    { x: 483, y: 4, r: 214, g: 219, b: 216 },
    { x: 597, y: 10, r: 213, g: 226, b: 238 },
    { x: 628, y: 14, r: 214, g: 211, b: 214 },

    // today's mission
    { x: 236, y: 65, r: 214, g: 214, b: 222 },
    { x: 246, y: 63, r: 214, g: 214, b: 222 },
    { x: 295, y: 64, r: 66, g: 71, b: 82 },
    { x: 343, y: 63, r: 214, g: 214, b: 222 },

    // complete weekly mission box
    { x: 233, y: 262, r: 230, g: 231, b: 230 },
    { x: 247, y: 269, r: 41, g: 51, b: 63 },
    { x: 257, y: 284, r: 181, g: 182, b: 189 },
    { x: 510, y: 290, r: 230, g: 231, b: 238 },

    // back btn
    { x: 24, y: 314, r: 214, g: 214, b: 214 },
    { x: 42, y: 317, r: 214, g: 219, b: 214 },
    { x: 31, y: 331, r: 214, g: 219, b: 214 },
  ],
  { x: 580, y: 278 }, // complete weekly mission box
  { x: 41, y: 320 }
);

export const weeklyMissionBox = new Page(
  'weeklyMissionBox',
  [
    // nav bar right part (p, star ...)
    { x: 299, y: 13, r: 214, g: 214, b: 214 },
    { x: 318, y: 9, r: 238, g: 234, b: 238 },
    { x: 313, y: 9, r: 238, g: 234, b: 238 },
    { x: 392, y: 9, r: 232, g: 229, b: 232 },
    { x: 385, y: 2, r: 214, g: 214, b: 214 },
    { x: 496, y: 13, r: 238, g: 166, b: 16 },
    { x: 483, y: 4, r: 214, g: 219, b: 216 },
    { x: 597, y: 10, r: 213, g: 226, b: 238 },
    { x: 628, y: 14, r: 214, g: 211, b: 214 },

    // bg of table
    { x: 14, y: 82, r: 33, g: 32, b: 41 },
    { x: 16, y: 288, r: 33, g: 44, b: 58 },
    { x: 615, y: 100, r: 33, g: 36, b: 41 },
    { x: 613, y: 283, r: 33, g: 44, b: 58 },

    // description footer
    { x: 80, y: 307, r: 202, g: 201, b: 196 },
    { x: 89, y: 315, r: 49, g: 61, b: 34 },
    { x: 103, y: 319, r: 73, g: 83, b: 66 },
    { x: 172, y: 335, r: 78, g: 84, b: 72 },
    { x: 250, y: 338, r: 101, g: 106, b: 93 },
    { x: 273, y: 307, r: 159, g: 159, b: 149 },
    { x: 284, y: 309, r: 56, g: 61, b: 40 },

    // back btn
    { x: 24, y: 314, r: 214, g: 214, b: 214 },
    { x: 42, y: 317, r: 214, g: 219, b: 214 },
    { x: 31, y: 331, r: 214, g: 219, b: 214 },
  ],
  { x: 41, y: 320 }, // back btn
  { x: 41, y: 320 }
);

export const weeklyMissionBoxBtns = {
  openBox: { x: 418, y: 325 },
  receiveReward: { x: 561, y: 326 },
};

export const weeklyMissionBoxConfirm = new Page(
  'weeklyMissionBoxConfirm',
  [
    // bg
    { x: 111, y: 42, r: 181, g: 186, b: 189 },
    { x: 117, y: 304, r: 214, g: 219, b: 222 },
    { x: 515, y: 300, r: 214, g: 219, b: 222 },
    { x: 519, y: 177, r: 181, g: 186, b: 189 },

    // title
    { x: 240, y: 58, r: 155, g: 160, b: 163 },
    { x: 267, y: 58, r: 141, g: 147, b: 149 },
    { x: 325, y: 59, r: 161, g: 167, b: 170 },
    { x: 383, y: 59, r: 171, g: 179, b: 179 },
    { x: 407, y: 59, r: 181, g: 186, b: 189 },

    // x
    { x: 515, y: 49, r: 187, g: 185, b: 188 },
    { x: 519, y: 55, r: 91, g: 91, b: 92 },

    // no & yes btn
    { x: 210, y: 293, r: 41, g: 81, b: 123 },
    { x: 238, y: 296, r: 45, g: 81, b: 128 },
    { x: 284, y: 294, r: 41, g: 78, b: 123 },

    { x: 397, y: 299, r: 40, g: 134, b: 253 },
    { x: 433, y: 307, r: 8, g: 98, b: 247 },
  ],
  { x: 387, y: 300 }, // yes btn
  { x: 387, y: 300 }
);

export const weeklyMissionBoxReceived = new Page(
  'weeklyMissionBoxReceived',
  [
    // bg
    { x: 113, y: 53, r: 181, g: 186, b: 189 },
    { x: 117, y: 307, r: 214, g: 219, b: 222 },
    { x: 496, y: 299, r: 214, g: 219, b: 222 },

    // title
    { x: 217, y: 55, r: 181, g: 186, b: 189 },
    { x: 259, y: 55, r: 177, g: 181, b: 185 },
    { x: 298, y: 59, r: 181, g: 186, b: 189 },
    { x: 341, y: 60, r: 120, g: 124, b: 128 },
    { x: 386, y: 58, r: 16, g: 24, b: 33 },
    { x: 407, y: 58, r: 181, g: 186, b: 189 },

    // x
    { x: 512, y: 47, r: 181, g: 186, b: 182 },
    { x: 519, y: 53, r: 71, g: 70, b: 71 },

    // ok btn
    { x: 288, y: 297, r: 8, g: 122, b: 255 },
    { x: 320, y: 300, r: 136, g: 190, b: 255 },
    { x: 364, y: 301, r: 8, g: 114, b: 248 },
  ],
  { x: 320, y: 300 }, // ok btn
  { x: 320, y: 300 }
);

// general pages
export const powerSaving = new Page(
  'powerSaving',
  [
    { x: 304, y: 136, r: 156, g: 160, b: 165 },
    { x: 305, y: 136, r: 156, g: 160, b: 165 },
    { x: 306, y: 136, r: 156, g: 160, b: 165 },
    { x: 307, y: 136, r: 156, g: 160, b: 165 },
    { x: 308, y: 136, r: 156, g: 160, b: 165 },

    { x: 301, y: 133, r: 165, g: 162, b: 165 },
    { x: 302, y: 133, r: 165, g: 162, b: 165 },
    { x: 303, y: 133, r: 165, g: 162, b: 165 },
    { x: 304, y: 133, r: 165, g: 162, b: 165 },
    { x: 305, y: 133, r: 165, g: 162, b: 165 },
    { x: 137, y: 155, r: 0, g: 0, b: 0 },
    { x: 521, y: 160, r: 0, g: 0, b: 0 },
    { x: 298, y: 50, r: 0, g: 0, b: 0 },
    { x: 618, y: 10, r: 0, g: 0, b: 0 },
    // to diff from power saving during playing
    { x: 497, y: 300, r: 0, g: 0, b: 0 },
    { x: 498, y: 300, r: 0, g: 0, b: 0 },
    { x: 499, y: 300, r: 0, g: 0, b: 0 },
    { x: 500, y: 300, r: 0, g: 0, b: 0 },
    { x: 501, y: 300, r: 0, g: 0, b: 0 },
    { x: 502, y: 300, r: 0, g: 0, b: 0 },
    { x: 503, y: 300, r: 0, g: 0, b: 0 },
    { x: 555, y: 282, r: 0, g: 0, b: 0 },
    { x: 555, y: 292, r: 0, g: 0, b: 0 },
    { x: 545, y: 291, r: 0, g: 0, b: 0 },

    // score
    { x: 520, y: 280, r: 0, g: 0, b: 0 },
    { x: 525, y: 280, r: 0, g: 0, b: 0 },
    { x: 530, y: 280, r: 0, g: 0, b: 0 },
    { x: 535, y: 280, r: 0, g: 0, b: 0 },
    { x: 540, y: 280, r: 0, g: 0, b: 0 },
    { x: 545, y: 280, r: 0, g: 0, b: 0 },
    { x: 550, y: 280, r: 0, g: 0, b: 0 },
    { x: 520, y: 295, r: 0, g: 0, b: 0 },
    { x: 525, y: 295, r: 0, g: 0, b: 0 },
    { x: 530, y: 295, r: 0, g: 0, b: 0 },
    { x: 535, y: 295, r: 0, g: 0, b: 0 },
    { x: 540, y: 295, r: 0, g: 0, b: 0 },
    { x: 545, y: 295, r: 0, g: 0, b: 0 },
    { x: 550, y: 295, r: 0, g: 0, b: 0 },
  ],
  { x: 0, y: 0 },
  { x: 0, y: 0 }
);

export const promotion1 = new Page(
  'promotion1',
  [
    { x: 603, y: 27, r: 124, g: 130, b: 132 },
    { x: 612, y: 33, r: 60, g: 60, b: 60 },
    { x: 605, y: 40, r: 174, g: 178, b: 181 },
    { x: 605, y: 35, r: 181, g: 178, b: 181 },
    { x: 612, y: 39, r: 181, g: 178, b: 181 },
    { x: 616, y: 39, r: 181, g: 178, b: 181 },
    { x: 615, y: 29, r: 142, g: 144, b: 142 },
  ],
  { x: 611, y: 36 },
  { x: 611, y: 36 }
);

export const promotion2 = new Page(
  'promotion2',
  [
    { x: 43, y: 31, r: 206, g: 211, b: 222 },
    { x: 306, y: 29, r: 206, g: 211, b: 222 },
    { x: 546, y: 32, r: 206, g: 211, b: 222 },
    { x: 576, y: 36, r: 173, g: 174, b: 180 },
    { x: 580, y: 40, r: 174, g: 172, b: 175 },
    { x: 587, y: 36, r: 206, g: 207, b: 213 },
    { x: 576, y: 46, r: 213, g: 211, b: 215 },
    { x: 584, y: 45, r: 212, g: 210, b: 213 },
    { x: 595, y: 55, r: 206, g: 211, b: 222 },
  ],
  { x: 578, y: 39 },
  { x: 578, y: 39 }
);

export const promotion3 = new Page(
  'promotion3',
  [
    { x: 598, y: 37, r: 101, g: 103, b: 102 },
    { x: 604, y: 45, r: 71, g: 73, b: 71 },
    { x: 612, y: 53, r: 174, g: 175, b: 176 },
    { x: 617, y: 33, r: 181, g: 186, b: 189 },
  ],
  { x: 601, y: 43 },
  { x: 601, y: 43 }
);

export const rechargePromotion = new Page(
  'rechargePromotion',
  [
    { x: 114, y: 45, r: 181, g: 186, b: 189 },
    { x: 229, y: 59, r: 16, g: 24, b: 24 },
    { x: 280, y: 60, r: 35, g: 43, b: 48 },
    { x: 340, y: 58, r: 176, g: 181, b: 185 },
    { x: 407, y: 66, r: 38, g: 45, b: 47 },
    { x: 456, y: 89, r: 181, g: 186, b: 189 },
    { x: 520, y: 50, r: 67, g: 68, b: 68 },
    { x: 524, y: 58, r: 181, g: 186, b: 189 },
    { x: 529, y: 43, r: 151, g: 155, b: 156 },
    { x: 180, y: 302, r: 75, g: 149, b: 255 },
    { x: 144, y: 289, r: 41, g: 142, b: 255 },
    { x: 110, y: 300, r: 222, g: 223, b: 222 },
    { x: 337, y: 288, r: 41, g: 142, b: 255 },
    { x: 366, y: 302, r: 252, g: 253, b: 254 },
    { x: 438, y: 302, r: 255, g: 226, b: 125 },
    { x: 522, y: 311, r: 222, g: 223, b: 222 },
  ],
  { x: 518, y: 53 },
  { x: 518, y: 53 }
);

export const teamSupportPackagePromotion = new Page(
  'teamSupportPackagePromotion',
  [
    // header bg and x
    { x: 558, y: 37, r: 90, g: 190, b: 148 },
    { x: 576, y: 42, r: 148, g: 203, b: 173 },
    { x: 590, y: 45, r: 145, g: 203, b: 171 },

    // purchase button
    { x: 576, y: 277, r: 255, g: 223, b: 0 },
    { x: 480, y: 278, r: 255, g: 210, b: 0 },
    { x: 506, y: 278, r: 120, g: 76, b: 8 },
    { x: 522, y: 274, r: 249, g: 245, b: 0 },
    { x: 538, y: 277, r: 128, g: 81, b: 7 },
  ],
  { x: 583, y: 45 },
  { x: 583, y: 45 }
);

// a page wwith a close btn but taller than promotion page
export const event = new Page(
  'event',
  [
    { x: 20, y: 21, r: 253, g: 254, b: 254 },
    { x: 47, y: 32, r: 132, g: 134, b: 140 },
    { x: 48, y: 23, r: 246, g: 247, b: 247 },
    { x: 603, y: 19, r: 124, g: 130, b: 132 },
    { x: 612, y: 22, r: 49, g: 52, b: 49 },
    { x: 622, y: 26, r: 181, g: 178, b: 181 },
  ],
  { x: 611, y: 23 },
  { x: 611, y: 23 }
);

export const reviewApp = new Page(
  'reviewApp',
  [
    { x: 106, y: 42, r: 181, g: 186, b: 189 },
    { x: 316, y: 58, r: 84, g: 90, b: 93 },
    { x: 510, y: 43, r: 168, g: 176, b: 176 },
    { x: 525, y: 57, r: 143, g: 144, b: 144 },
    { x: 305, y: 61, r: 16, g: 24, b: 24 },
    { x: 338, y: 61, r: 16, g: 24, b: 24 },
    { x: 114, y: 301, r: 222, g: 219, b: 222 },
    { x: 153, y: 297, r: 49, g: 85, b: 123 },
    { x: 178, y: 299, r: 168, g: 190, b: 224 },
    { x: 241, y: 298, r: 222, g: 219, b: 222 },
    { x: 285, y: 305, r: 49, g: 85, b: 123 },
    { x: 308, y: 302, r: 79, g: 108, b: 145 },
    { x: 365, y: 302, r: 222, g: 219, b: 222 },
    { x: 421, y: 299, r: 8, g: 114, b: 255 },
    { x: 438, y: 299, r: 47, g: 138, b: 254 },
    { x: 489, y: 301, r: 8, g: 113, b: 255 },
    { x: 528, y: 305, r: 222, g: 219, b: 222 },
  ],
  { x: 161, y: 292 },
  { x: 161, y: 292 }
);

// page has ok button
export const ok = new Page(
  'ok',
  [
    { x: 279, y: 300, r: 0, g: 113, b: 247 },
    { x: 310, y: 301, r: 136, g: 188, b: 254 },
    { x: 326, y: 301, r: 255, g: 255, b: 255 },
    { x: 362, y: 300, r: 0, g: 113, b: 247 },
    { x: 369, y: 312, r: 8, g: 101, b: 255 },
  ],
  { x: 319, y: 303 },
  { x: 319, y: 303 }
);

// page has next button
export const next = new Page(
  'next',
  [
    { x: 273, y: 304, r: 8, g: 117, b: 255 },
    { x: 305, y: 307, r: 255, g: 255, b: 255 },
    { x: 314, y: 314, r: 255, g: 255, b: 255 },
    { x: 321, y: 305, r: 224, g: 236, b: 255 },
    { x: 328, y: 310, r: 1, g: 106, b: 255 },
    { x: 333, y: 299, r: 8, g: 125, b: 255 },
    { x: 374, y: 305, r: 8, g: 117, b: 255 },
    { x: 380, y: 319, r: 0, g: 89, b: 247 },
    { x: 265, y: 318, r: 0, g: 89, b: 247 },
  ],
  { x: 346, y: 307 },
  { x: 346, y: 307 }
);

export const next2 = new Page(
  'next',
  [
    { x: 226, y: 296, r: 222, g: 219, b: 222 },
    { x: 275, y: 296, r: 8, g: 121, b: 255 },
    { x: 306, y: 299, r: 254, g: 254, b: 255 },
    { x: 314, y: 303, r: 255, g: 255, b: 255 },
    { x: 321, y: 299, r: 201, g: 223, b: 255 },
    { x: 331, y: 299, r: 255, g: 255, b: 255 },
    { x: 364, y: 310, r: 0, g: 94, b: 247 },
  ],
  { x: 346, y: 307 },
  { x: 346, y: 307 }
);

// non-specific confirm page with no and yes btn
export const confirmWithYS = new Page(
  'confirmWithYS',
  [
    // x on right top
    { x: 513, y: 46, r: 182, g: 186, b: 188 },
    { x: 520, y: 52, r: 70, g: 69, b: 70 },
    { x: 527, y: 45, r: 67, g: 68, b: 70 },
    { x: 531, y: 54, r: 174, g: 175, b: 176 },
    { x: 511, y: 51, r: 178, g: 180, b: 186 },

    // no btn
    { x: 212, y: 301, r: 49, g: 85, b: 123 },
    { x: 249, y: 300, r: 125, g: 152, b: 188 },
    { x: 278, y: 307, r: 49, g: 81, b: 123 },

    // yes btn
    { x: 363, y: 294, r: 8, g: 122, b: 255 },
    { x: 384, y: 297, r: 244, g: 248, b: 255 },
    { x: 419, y: 307, r: 0, g: 101, b: 247 },
    { x: 395, y: 294, r: 8, g: 122, b: 255 },

    // footer bg
    { x: 142, y: 304, r: 222, g: 219, b: 222 },
    { x: 530, y: 296, r: 222, g: 219, b: 222 },
  ],
  { x: 520, y: 56 }, // x btn
  { x: 520, y: 56 }
);

// need to update apk ver
export const errorNewUpdateAvailable = new Page(
  'errorNewUpdateAvailable',
  [
    // title
    { x: 208, y: 45, r: 181, g: 186, b: 189 },
    { x: 236, y: 58, r: 16, g: 24, b: 24 },
    { x: 260, y: 58, r: 125, g: 129, b: 133 },
    { x: 272, y: 57, r: 128, g: 136, b: 140 },
    { x: 313, y: 56, r: 181, g: 186, b: 189 },
    { x: 335, y: 56, r: 16, g: 24, b: 24 },
    { x: 363, y: 60, r: 181, g: 186, b: 189 },
    { x: 381, y: 61, r: 16, g: 24, b: 24 },
    { x: 388, y: 63, r: 126, g: 131, b: 134 },
    { x: 397, y: 63, r: 57, g: 64, b: 70 },
    { x: 407, y: 54, r: 181, g: 186, b: 189 },
    { x: 419, y: 59, r: 181, g: 186, b: 189 },
    // new update in content (104)
    { x: 227, y: 139, r: 176, g: 178, b: 184 },
    { x: 289, y: 144, r: 117, g: 121, b: 121 },
    { x: 260, y: 144, r: 108, g: 110, b: 108 },
    { x: 309, y: 144, r: 181, g: 186, b: 189 },
    { x: 326, y: 142, r: 87, g: 91, b: 90 },
    { x: 343, y: 143, r: 83, g: 88, b: 88 },
    { x: 376, y: 144, r: 69, g: 71, b: 69 },
    { x: 395, y: 144, r: 68, g: 72, b: 71 },
    { x: 409, y: 144, r: 122, g: 123, b: 125 },
    { x: 421, y: 144, r: 181, g: 186, b: 189 },

    // ok
    { x: 285, y: 297, r: 8, g: 118, b: 255 },
    { x: 312, y: 294, r: 8, g: 125, b: 255 },
    { x: 320, y: 299, r: 135, g: 188, b: 255 },
    { x: 364, y: 307, r: 0, g: 102, b: 247 },

    // popup bg and x
    { x: 117, y: 46, r: 181, g: 186, b: 189 },
    { x: 512, y: 46, r: 188, g: 186, b: 189 },
    { x: 524, y: 57, r: 189, g: 189, b: 189 },
    { x: 157, y: 232, r: 181, g: 186, b: 189 },
    { x: 209, y: 296, r: 222, g: 219, b: 222 },
    { x: 423, y: 304, r: 222, g: 219, b: 222 },
    { x: 443, y: 227, r: 181, g: 186, b: 189 },
  ],
  // TODO: check whether need to press ok
  { x: 314, y: 299 },
  { x: 314, y: 299 }
);

// for some situation, unexpectedError happens
// this also includes network error
export const unexpectedError = new Page(
  'unexpectedError',
  [
    { x: 323, y: 39, r: 181, g: 186, b: 189 },
    { x: 514, y: 44, r: 80, g: 81, b: 81 },
    { x: 524, y: 48, r: 64, g: 70, b: 71 },
    { x: 518, y: 54, r: 65, g: 71, b: 71 },
    { x: 315, y: 269, r: 181, g: 186, b: 189 },
    { x: 315, y: 293, r: 8, g: 125, b: 255 },
    { x: 316, y: 299, r: 241, g: 247, b: 255 },
    { x: 317, y: 310, r: 0, g: 92, b: 245 },
    { x: 317, y: 313, r: 0, g: 85, b: 240 },
    { x: 317, y: 323, r: 222, g: 219, b: 222 },
  ],
  { x: 314, y: 299 },
  { x: 314, y: 299 }
);

// with more games button
export const quitApp = new Page(
  'quitApp',
  [
    { x: 279, y: 54, r: 170, g: 173, b: 178 },
    { x: 324, y: 60, r: 20, g: 27, b: 28 },
    { x: 514, y: 50, r: 181, g: 182, b: 182 },
    { x: 466, y: 295, r: 8, g: 121, b: 255 },
    { x: 414, y: 298, r: 94, g: 157, b: 233 },
    { x: 496, y: 312, r: 0, g: 90, b: 247 },
    { x: 523, y: 309, r: 222, g: 219, b: 222 },
    { x: 111, y: 297, r: 222, g: 219, b: 222 },
    { x: 307, y: 60, r: 133, g: 137, b: 141 },
    { x: 315, y: 61, r: 181, g: 186, b: 189 },
    { x: 324, y: 61, r: 52, g: 56, b: 61 },
  ],
  { x: 300, y: 303 }, // not to quit
  { x: 300, y: 303 }
);

export const quitApp1 = new Page(
  'quitApp1',
  [
    { x: 262, y: 56, r: 181, g: 186, b: 189 },
    { x: 300, y: 54, r: 16, g: 24, b: 24 },
    { x: 323, y: 55, r: 24, g: 30, b: 32 },
    { x: 511, y: 50, r: 178, g: 180, b: 186 },
    { x: 522, y: 54, r: 141, g: 139, b: 141 },
    { x: 522, y: 54, r: 141, g: 139, b: 141 },
    { x: 167, y: 299, r: 222, g: 219, b: 222 },
    { x: 243, y: 295, r: 49, g: 85, b: 123 },
    { x: 318, y: 298, r: 222, g: 219, b: 222 },
    { x: 382, y: 297, r: 83, g: 158, b: 255 },
    { x: 503, y: 301, r: 222, g: 219, b: 222 },
    { x: 433, y: 310, r: 0, g: 94, b: 247 },
    { x: 404, y: 301, r: 8, g: 113, b: 255 },
    { x: 213, y: 307, r: 49, g: 81, b: 123 },
  ],
  { x: 213, y: 307 }, // not to quit
  { x: 213, y: 307 }
);

// export const allPages = [
//   // TODO: handle follow pages
//   logo,
//   landing,

//   // speical pages
//   logIn,
//   TOS,

//   // TODO: handle more task
//   gMain,
//   gSettings,

//   // BattleMode pages
//   gBattleModePanel,
//   gRankedBattlePanel,
//   gRankedBattleResult,
//   gRankedBattleGameInfo,
//   gAutoGameConfirm,
//   gAutoGameConfirmEnd,

//   // start new LeagueMode pages
//   gLeagueModePanelContinue,
//   gLeagueModePanelNextSchedule,
//   gLeagueModePanelNextSchedule2,
//   gLeagueModeGameInfo,

//   // play process pages
//   gSelectPlayRole,
//   gSelectYear,
//   gSelectSeasonMode,
//   gSelectLeagueGameAmount,
//   gEndSeason,
//   gNewSeason,
//   gGameLineUp,
//   gMvp,
//   gPlayerGrowthComplete,
//   gPicherOfTheMonth,
//   gGameResult,
//   gGameResultAquired,
//   gGameResultOther,
//   gGameResultWorldChampion,

//   // game reward pages
//   gGameReward,
//   gSelectRewardPlayer,
//   gLeagueRewardAchievementGrade,
//   gBestPositionAwardBonus,
//   gBestPositionAwardBonus2,
//   gBonusGrantedByTeamRecord,
//   gPostSeasonAwardBonus,

//   // on play pages
//   gOnQuickPlay,
//   gOnQuickPlay1,
//   gOnQuickPlayPause,
//   gOnPlayPowerSaveOn,
//   gLeagueOnPlayPowerSaveOff,
//   gLeagueOnPlayPowerSaveOffStopped,
//   gLeagueOnPlayPowerSaveOffMid,
//   gLeagueOnPlayPowerSaveOffMid1,
//   gLeagueOnPlayAutoOff,
//   gLeagueOnPlayAutoOff1,
//   gLeagueOnPlayPause,
//   gLeagueContinuePlaying,

//   // adReward pages
//   gAdReward,
//   gAdRewardRedeem,
//   gAdRewardOnCD,

//   // weekly mission pages
//   gAchivementMission,
//   gWeeklyMissionBox,
//   gWeeklyMissionBoxConfirm,
//   gWeeklyMissionBoxRecieved,

//   // general pages
//   gPowerSaving,
//   gReviewApp,
//   gDownloadData,

//   // gBackBtn,
//   gPromotion1,
//   gPromotion2,
//   gPromotion3,
//   gRechargePromotion,
//   gTeamSupportPackagePromotion,
//   gEvent,
//   gOk,
//   gNext,
//   gNext2,
//   gConfirmWithYS,
//   gErrorNewUpdateAvailable,
//   gUnexpectedError,
//   gQuitApp,
//   gQuitApp1,
// ];
// export const allsGroup = new Group('alls', gAlls);