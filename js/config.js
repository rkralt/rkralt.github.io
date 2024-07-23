const config = {
  // Max stat
  MAX_STAT: 6,

  // Max available characters, karts, tires & gliders to choose from.
  SELECTABLE_TIRES: 21,
  SELECTABLE_GLIDERS: 14,

  // Birdo amount of variants & character position in selectable character list.
  VARIANTS_BIRDO: 8,
  POSITION_BIRDO: 7,

  // Inkling amount of variants & character position in selectable character list.
  VARIANTS_INKLING: 5,
  POSITION_INKLING: 40,

  // Link amount of variants & character position in selectable character list.
  VARIANTS_LINK: 1,
  POSITION_LINK: 43,

  // Metal amount of variants & character position in selectable character list.
  VARIANTS_METAL: 1,
  POSITION_METAL: 21,

  // Shy Guy amount of variants & character position in selectable character list.
  VARIANTS_SHY: 8,
  POSITION_SHY: 11,

  // Villager amount of variants & character position in selectable character list.
  VARIANTS_VILLAGER: 1,
  POSITION_VILLAGER: 41,

  // Yoshi amount of variants & character position in selectable character list.
  VARIANTS_YOSHI: 8,
  POSITION_YOSHI: 8,

  // Base URLs for images.
  BASE_URL_CHARACTERS: 'Images/Characters/',
  BASE_URL_KARTS: 'Images/Carts/',
  BASE_URL_TIRES: 'Images/Tires/',
  BASE_URL_GLIDERS: 'Images/Gliders/',
  BASE_URL_CUP: 'Images/Cup/',
  BASE_URL_TRACKS: 'Images/Tracks/',

  // URL extension for specific characters with more than 1 variant.
  URL_EXTENSION_BIRDO: 'Birdo/',
  URL_EXTENSION_INKLING: 'Inkling/',
  URL_EXTENSION_LINK: 'Link/',
  URL_EXTENSION_METAL: 'Metal/',
  URL_EXTENSION_SHY: 'Shy/',
  URL_EXTENSION_VILLAGER: 'Villager/',
  URL_EXTENSION_YOSHI: 'Yoshi/',

  // Array of all tracks (numbers 0 to 95).
  TRACKS_ALL: Array.from({length: 96}, (v, i) => i),

  // Array of all karts (numbers 0 to 40).
  KARTS_ALL: Array.from({length: 41}, (v, i) => i),

  // Array of all characters (numbers 0 to 47).
  CHARACTERS_ALL: Array.from({length: 48}, (v, i) => i),

  // Haal die pokke tracks uit het spelletje!
  TRACKS_TO_REMOVE_TOUR: [48, 52, 56, 60, 64, 68, 72, 76, 79, 80, 84, 87, 88, 92],

  // Geen idee welke idioot dit zou doen maar de optie is er!
  TRACKS_TO_REMOVE_RETRO: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 40, 41, 44, 45, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 76, 77, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 92, 93, 94, 95],

  // Lekker ouderwetse mappies spelen!
  TRACKS_TO_REMOVE_NITRO: [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 33, 34, 35, 38, 39, 42, 43, 46, 47, 55, 63, 70, 75, 83, 91],
  
  // Haal die motoren van de weg!
  REMOVE_BIKES: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
  
  // Ja ook jij Pink Gold Peach!
  CHARACTERS_REMOVE_STUPID: [5, 6, 13, 18, 19, 20, 21, 22, 34, 39, 40, 42],

  // Default settings
  SETTING_PLAYER_COUNT: 2,
  SETTING_MAX_PLAYER_COUNT: 12,
  SETTING_EXCLUDE_TOUR_TRACKS: false,
  SETTING_EXCLUDE_NITRO_TRACKS: false,
  SETTINGS_EXCLUDE_RETRO_TRACKS: false,
  SETTINGS_EXCLUDE_STUPID_CHARACTERS: false,
  SETTINGS_EXCLUDE_BIKES: false,

  // Inward drifting vehicles
  INWARD_COMET: 30,
  INWARD_SPORT: 31,
  INWARD_JET: 32,
  INWARD_YOSHI: 33,
  INWARD_MASTER: 34,
}

export default config;