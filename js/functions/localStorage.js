import config from "../../data/config.js";
import randomizePlayerKarts from './randomizeKarts.js';
import randomizeTrack from './randomizeTrack.js';
import randomizeItems from './randomizeItems.js';

function getSettings(clearDefaultSettings = false) {
  if(clearDefaultSettings) {
    localStorage.removeItem(config.USER_CURRENT_SETTINGS_KEY);
  }

  const userCurrentSettings = localStorage.getItem(config.USER_CURRENT_SETTINGS_KEY);
  if(userCurrentSettings !== null) return JSON.parse(userCurrentSettings);

  const userDefaultSettings = localStorage.getItem(config.USER_DEFAULT_SETTINGS_KEY)
  if(userDefaultSettings !== null) return JSON.parse(userDefaultSettings);

  const systemDefaultSettings = getSystemDefaultSettings();
  return systemDefaultSettings;
}

function getSystemDefaultSettings() {
  return {
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
}

function loadSettings(settings) {
  const inputs = document.querySelectorAll('#settings-menu input');

  inputs.forEach(input => {
    const key = input.dataset.key;

    if (input.type === 'number') {
      input.value = parseInt(settings[key]);
    }

    if (input.type === 'checkbox') {
      input.checked = settings[key];
    }
  })
}

function saveSettings(localStorageKey) {
  const inputs = document.querySelectorAll('#settings-menu input');
  let settings = {};

  inputs.forEach(input => {
    const key = input.dataset.key;
    let value = null;

    if(input.type === 'number') {
      value = parseInt(input.value);
    }

    if(input.type === 'checkbox') {
      value = input.checked;
    }

    settings[key] = value;
  })

  localStorage.setItem(localStorageKey, JSON.stringify(settings));
}

function clearSettings() {
  localStorage.clear(config.USER_DEFAULT_SETTINGS_KEY);
}

function randomizeAll() {
  randomizePlayerKarts();
  randomizeTrack();
  randomizeItems();
}

export { getSettings, loadSettings, saveSettings, clearSettings, randomizeAll };