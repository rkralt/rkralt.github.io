import config from "../../data/config.js";
import { getSettings ,loadSettings, saveSettings, clearSettings } from "../functions/localStorage.js";
import randomizePlayerKarts from "../functions/randomizeKarts.js";
import randomizeTrack from "../functions/randomizeTrack.js";
import randomizeItems from "../functions/randomizeItems.js";

// PLAYERS
// Player count
const playerCountInput = document.querySelector('#player-count');
playerCountInput.addEventListener('change', () => {
  if(playerCountInput.value > config.SETTING_MAX_PLAYER_COUNT) {
    playerCountInput.value = config.SETTING_MAX_PLAYER_COUNT
  }
});

// Exclude retro tracks
const excludeRetroTracks = document.querySelector('#no-retro-tracks');
excludeRetroTracks.addEventListener('click', () => {
  if(excludeRetroTracks.checked) {
    excludeNitroTracks.checked = false;
  }
})

// Exclude nitro tracks
const excludeNitroTracks = document.querySelector('#no-nitro-tracks');
excludeNitroTracks.addEventListener('click', () => {
  if(excludeNitroTracks.checked) {
    excludeRetroTracks.checked = false;
  }
})

// CHARACTERS
// No female characters
const excludeFemaleCharacters = document.querySelector('#no-female-characters');
excludeFemaleCharacters.addEventListener('click', () => {
  if(excludeMaleCharacters.checked) {
    excludeMaleCharacters.checked = false;
  }
})

// No male characters
const excludeMaleCharacters = document.querySelector('#no-male-characters');
excludeMaleCharacters.addEventListener('click', () => {
  if(excludeFemaleCharacters.checked) {
    excludeFemaleCharacters.checked = false;
  }
})

// ITEMS
// Minimum items
const minItems = document.querySelector('#min-items');
minItems.addEventListener('change', () => {
  let minItemsCurrentMin = document.querySelector('#min-items');
  let maxItemsCurrentMin = document.querySelector('#max-items');

  if(minItemsCurrentMin.value > config.SETTING_MAX_ITEMS_COUNT) {
    minItemsCurrentMin.value = config.SETTING_MAX_ITEMS_COUNT;
  }

  if(parseInt(minItemsCurrentMin.value) > parseInt(maxItemsCurrentMin.value)) {
    maxItemsCurrentMin.value = minItemsCurrentMin.value;
  }
});

// Maximum items
const maxItems = document.querySelector('#max-items');
maxItems.addEventListener('change', () => {
  let minItemsCurrentMax = document.querySelector('#min-items');
  let maxItemsCurrentMax = document.querySelector('#max-items');

  if(maxItemsCurrentMax.value > config.SETTING_MAX_ITEMS_COUNT) {
    maxItemsCurrentMax.value = config.SETTING_MAX_ITEMS_COUNT;
  }

  if(parseInt(maxItemsCurrentMax.value) < parseInt(minItemsCurrentMax.value)) {
    minItemsCurrentMax.value = maxItemsCurrentMax.value;
  }
});

// OPEN/CLOSE MENU
// Open settings menu
const openSettingsMenuBtn = document.querySelector('#open-dialog');

openSettingsMenuBtn.addEventListener('click', () => {
  settingsMenu.showModal();
})

// Close settings menu when clicked outside of it.
const settingsMenu = document.querySelector('#settings-menu');

settingsMenu.addEventListener('click', (event) => {
  const rect = settingsMenu.getBoundingClientRect();
  const isInDialog = (
      rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && event.clientX <= rect.left + rect.width
  );

  if (!isInDialog) {
    const settings = getSettings();
    loadSettings(settings);
    settingsMenu.close();
  }
});

// Close dialog
const closeSettingsMenuBtn = document.querySelector('#close-dialog');

closeSettingsMenuBtn.addEventListener('click', (event) => {
  const settings = getSettings();
  loadSettings(settings);

  settingsMenu.close();
  event.stopPropagation();
})

// BUTTON EVENTS
const saveSettingsBtn = document.querySelector('#save-settings');
saveSettingsBtn.addEventListener('click', () => {
  saveSettings(config.USER_CURRENT_SETTINGS_KEY);

  randomizePlayerKarts();
  randomizeTrack();
  randomizeItems();

  settingsMenu.close();
});

const setDefaultBtn = document.querySelector('#set-default');
setDefaultBtn.addEventListener('click', () => {
  saveSettings(config.USER_DEFAULT_SETTINGS_KEY);

  alert('Your custom default settings have been saved!');
});

const resetDefault = document.querySelector('#reset-default');
resetDefault.addEventListener('click', () => {
  clearSettings();

  const settings = getSettings();
  loadSettings(settings);

  alert('Your custom default settings have been reset!');
});