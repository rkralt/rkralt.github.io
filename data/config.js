// Object.freeze zodat je de waardes in de config niet kan aanpassen via de code (zou door const niet moeten kunnen maar javascript zuigt).
const config = Object.freeze({
  // Max stat
  MAX_STAT: 6,

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
  BASE_URL_ITEMS: 'Images/Items/',

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

  // Array of all DLC tracks
  TRACKS_NO_DLC: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95],

  // Haal die pokke tracks uit het spelletje!
  TRACKS_TO_REMOVE_TOUR: [48, 52, 56, 60, 64, 68, 72, 76, 79, 80, 84, 87, 88, 92],

  // Geen idee welke idioot dit zou doen maar de optie is er!
  TRACKS_TO_REMOVE_RETRO: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 40, 41, 44, 45, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 76, 77, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 92, 93, 94, 95],

  // Lekker ouderwetse mappies spelen!
  TRACKS_TO_REMOVE_NITRO: [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 33, 34, 35, 38, 39, 42, 43, 46, 47, 55, 63, 70, 75, 83, 91],

  // Unlockables
  UNLOCKABLE_PARTS_KART: [1, 2, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 25, 26, 27, 28, 31, 32, 33, 34, 36, 37, 38, 40],
  UNLOCKABLE_PARTS_TIRE: [4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
  UNLOCKABLE_PARTS_GLIDER: [1, 2, 3, 4, 7, 8, 10, 11, 12, 13, 14],

  // Array of all karts (numbers 0 to 40).
  KARTS_ALL: Array.from({length: 41}, (v, i) => i),

  // Haal die motoren van de weg!
  REMOVE_BIKES: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 38],

  // Array of all characters (numbers 0 to 47).
  CHARACTERS_ALL: Array.from({length: 48}, (v, i) => i),
  
  // Ja ook jij Pink Gold Peach!
  CHARACTERS_REMOVE_STUPID: [5, 6, 13, 18, 19, 20, 21, 22, 34, 39, 40, 42],

  //Woman are gross
  CHARACTERS_REMOVE_FEMALE: [2, 3, 4, 6, 7, 13, 18, 19, 20, 22, 23, 34, 39, 40, 42, 46, 47],

  //feminism!
  CHARACTERS_REMOVE_MALE: [0, 1, 5, 8, 9, 10, 11, 12, 14, 15, 16, 17, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 41, 43, 44, 45, 46, 47],

  // Array of all tires (numbers 0 to 21).
  TIRES_ALL: Array.from({length: 22}, (v, i) => i),

  // Array of all gliders (numbers 0 to 14).
  GLIDERS_ALL: Array.from({length: 15}, (v, i) => i),

  // Array of all items (numbers 0 to 20).
  ITEMS_ALL: Array.from({length: 21}, (v, i) => i),

  // Default settings for inputs.
  SETTING_MAX_PLAYER_COUNT: 12,
  SETTING_MAX_ITEMS_COUNT: 21,

  // Default settings
  SETTING_PLAYER_COUNT: 2,
  SETTING_EXCLUDE_TOUR_TRACKS: false,
  SETTING_EXCLUDE_NITRO_TRACKS: false,
  SETTING_EXCLUDE_RETRO_TRACKS: false,
  SETTING_EXCLUDE_DLC_TRACKS: false,
  SETTING_NO_TRACK_TWICE: false,
  SETTING_EXCLUDE_STUPID_CHARACTERS: false,
  SETTING_EXCLUDE_FEMALE_CHARACTERS: false,
  SETTING_EXCLUDE_MALE_CHARACTERS: false,
  SETTINS_NO_CHARACTER_TWICE: false,
  SETTING_EXCLUDE_BIKES: false,
  SETTING_NO_KART_TWICE: false,
  SETTING_NO_TIRES_TWICE: false,
  SETTING_NO_GLIDER_TWICE: false,
  SETTING_USE_RANDOM_ITEMS: false,
  SETTING_MIN_ITEMS: 1,
  SETTING_MAX_ITEMS: 21,

  DEFAULT_SETTINGS_KEY: 'defaultSettings',

  // Inward drifting vehicles
  INWARD_VEHICLES: [30, 31, 32, 33, 34],
})

export default config;
