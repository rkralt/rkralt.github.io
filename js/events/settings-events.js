import config from "../../data/config.js";
import { getSettings, loadSettings, saveSettings, clearSettings, randomizeAll } from "../functions/localStorage.js";
import { setValueMinMax, checkValueBiggerThanMin, checkValueSmallerThanMax } from "../functions/helpers.js";

const settingsMenu = document.querySelector('#settings-menu');

// For all inputs with min and max value, keep value between min and max.
const inputsMinMax = settingsMenu.querySelectorAll('input[min][max]');

inputsMinMax.forEach(input => {
  input.addEventListener('change', () => {
    setValueMinMax(input);
  })
})

// ITEMS
// Keep min items below max items, and max items above min items.
const minItems = settingsMenu.querySelector('#min-items');
const maxItems = settingsMenu.querySelector('#max-items');

minItems.addEventListener('change', () => {
  checkValueSmallerThanMax(minItems, maxItems);
})

maxItems.addEventListener('change', () => {
  checkValueBiggerThanMin(maxItems, minItems);
})

// TRACKS
// Exclude retro tracks
const excludeRetroTracks = settingsMenu.querySelector('#no-retro-tracks');
excludeRetroTracks.addEventListener('click', () => {
  if(excludeRetroTracks.checked) {
    excludeNitroTracks.checked = false;
  }
})

// Exclude nitro tracks
const excludeNitroTracks = settingsMenu.querySelector('#no-nitro-tracks');
excludeNitroTracks.addEventListener('click', () => {
  if(excludeNitroTracks.checked) {
    excludeRetroTracks.checked = false;
  }
})

// CHARACTERS
// No female characters
const excludeFemaleCharacters = settingsMenu.querySelector('#no-female-characters');
excludeFemaleCharacters.addEventListener('click', () => {
  if(excludeMaleCharacters.checked) {
    excludeMaleCharacters.checked = false;
  }
})

// No male characters
const excludeMaleCharacters = settingsMenu.querySelector('#no-male-characters');
excludeMaleCharacters.addEventListener('click', () => {
  if(excludeFemaleCharacters.checked) {
    excludeFemaleCharacters.checked = false;
  }
})

// Close dialog
const closeSettingsMenuBtn = document.querySelector('#close-dialog');

closeSettingsMenuBtn.addEventListener('click', (event) => {
  const settings = getSettings();
  loadSettings(settings);
})

// BUTTON EVENTS
const saveSettingsBtn = settingsMenu.querySelector('#save-settings');
saveSettingsBtn.addEventListener('click', () => {
  saveSettings(config.USER_CURRENT_SETTINGS_KEY);
  randomizeAll();
});

const setDefaultBtn = settingsMenu.querySelector('#set-default');
setDefaultBtn.addEventListener('click', () => {
  saveSettings(config.USER_DEFAULT_SETTINGS_KEY);

  randomizeAll();

  alert('Your custom default settings have been saved!');
});

const resetDefault = settingsMenu.querySelector('#reset-default');
resetDefault.addEventListener('click', () => {
  clearSettings(config.USER_DEFAULT_SETTINGS_KEY);

  const settings = getSettings();
  loadSettings(settings);

  randomizeAll();

  alert('Your custom default settings have been reset!');
});

const dialogOverlay = settingsMenu.querySelector('.dialog-overlay');
dialogOverlay.addEventListener('click', () => {
  settingsMenu.hidePopover();
})