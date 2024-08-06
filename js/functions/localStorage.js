import config from "../../data/config.js";

function saveDefaultSettings(key, settings) {
  if(confirm('Are you sure you want to set the current selected settings as default? Previous saved settings will be overwritten.')) {
    localStorage.setItem(key, JSON.stringify(settings));
  }
}

function loadDefaultSettings(key) {
  const arrayString = localStorage.getItem(key);
  
  if(arrayString === null) {
    const defaultSettings = {
      playerCount: config.SETTING_PLAYER_COUNT,
      excludeTourTracks: config.SETTING_EXCLUDE_TOUR_TRACKS,
      excludeRetroTracks: config.SETTING_EXCLUDE_RETRO_TRACKS,
      excludeNitroTracks: config.SETTING_EXCLUDE_NITRO_TRACKS,
      excludeDLCTracks: config.SETTING_EXCLUDE_DLC_TRACKS,
      noTrackTwice: config.SETTING_NO_TRACK_TWICE,
      excludeStupidCharacters: config.SETTING_EXCLUDE_STUPID_CHARACTERS,
      excludeFemaleCharacters: config.SETTING_EXCLUDE_FEMALE_CHARACTERS,
      excludeMaleCharacters: config.SETTING_EXCLUDE_MALE_CHARACTERS,
      noCharacterTwice: config.SETTINS_NO_CHARACTER_TWICE,
      excludeBikes: config.SETTING_EXCLUDE_BIKES,
      noKartTwice: config.SETTING_NO_KART_TWICE,
      noTiresTwice: config.SETTING_NO_TIRES_TWICE,
      noGliderTwice: config.SETTING_NO_GLIDER_TWICE,
      minItems: config.SETTING_MIN_ITEMS,
      maxItems: config.SETTING_MAX_ITEMS,
      noUnlockables: config.SETTING_NO_UNLOCKABLES
    }

    return defaultSettings;
  } else {
    return JSON.parse(arrayString);
  }
}

function clearDefaultSettings(key) {
  if(confirm('Are you sure you want to clear your current settings? The default settings will be restored.')) {
    localStorage.removeItem(key);
  }
}

export { saveDefaultSettings, loadDefaultSettings, clearDefaultSettings };