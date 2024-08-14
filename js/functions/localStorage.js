import config from "../../data/config.js";
import randomizeKarts from './randomizeKarts.js';
import randomizeTrack from './randomizeTrack.js';
import randomizeItems from './randomizeItems.js';

function getSettings() {
  const userCurrentSettings = localStorage.getItem(config.USER_CURRENT_SETTINGS_KEY);
  if(userCurrentSettings !== null) return JSON.parse(userCurrentSettings);

  const userDefaultSettings = localStorage.getItem(config.USER_DEFAULT_SETTINGS_KEY)
  if(userDefaultSettings !== null) return JSON.parse(userDefaultSettings);

  const systemDefaultSettings = getSystemDefaultSettings();
  return systemDefaultSettings;
}

function getSystemDefaultSettings() {
  const inputs = document.querySelectorAll('#settings-menu input[data-default][data-key]');
  const defaultSettings = {};

  inputs.forEach(input => {
    const key = input.dataset.key;
    const value = input.dataset.default;

    if (input.type === 'number') {
      defaultSettings[key] = parseInt(value);
    }

    if (input.type === 'checkbox') {
      defaultSettings[key] = (value === 'true');
    }
  })

  return defaultSettings;
}

function loadSettings(settings) {
  const inputs = document.querySelectorAll('#settings-menu input[data-key]');

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
  const inputs = document.querySelectorAll('#settings-menu input[data-key]');
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

function clearSettings(localStorageKey) {
  localStorage.clear(localStorageKey);
}

function randomizeAll() {
  randomizeKarts();
  randomizeTrack();
  randomizeItems();
}

export { getSettings, loadSettings, saveSettings, clearSettings, randomizeAll };