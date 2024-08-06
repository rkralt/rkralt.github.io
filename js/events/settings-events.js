import config from "../../data/config.js";
import randomizePlayerKarts from "../functions/randomizeKarts.js";
import randomizeTrack from "../functions/randomizeTrack.js";
import randomizeItems from "../functions/randomizeItems.js";
import { resetSettings } from "../functions/ux.js";
import { saveDefaultSettings, clearDefaultSettings } from "../functions/localStorage.js";

const playerCountInput = document.querySelector('#player-count');

// PLAYERS
// Player count
playerCountInput.addEventListener('change', randomizePlayerKarts);

// No unlockables
const noUnlockables = document.querySelector('#no-unlockables');
noUnlockables.addEventListener('click', randomizePlayerKarts);

// TRACKS
// Exclude tour tracks
const excludeTourTracks = document.querySelector('#no-tour-tracks');
excludeTourTracks.addEventListener('click', randomizeTrack);

// Exclude retro tracks
const excludeRetroTracks = document.querySelector('#no-retro-tracks');

excludeRetroTracks.addEventListener('click', () => {
  if(excludeRetroTracks.checked) {
    excludeNitroTracks.checked = false;
  }
})

excludeRetroTracks.addEventListener('click', randomizeTrack); 

// Exclude nitro tracks
const excludeNitroTracks = document.querySelector('#no-nitro-tracks');

excludeNitroTracks.addEventListener('click', () => {
  if(excludeNitroTracks.checked) {
    excludeRetroTracks.checked = false;
  }
})

excludeNitroTracks.addEventListener('click', randomizeTrack);

// Exclude DLC tracks
const excludeDLCTracks = document.querySelector('#no-dlc-tracks');
excludeDLCTracks.addEventListener('click', randomizeTrack);

// No track twice in a row
const noTrackTwice = document.querySelector('#no-track-twice');
noTrackTwice.addEventListener('click', randomizeTrack);

// CHARACTERS
// Exclude stupid characters
const excludeStupidCharacters = document.querySelector('#no-stupid-characters');
excludeStupidCharacters.addEventListener('click', randomizePlayerKarts);

// No characters twice in a row
const noCharacterTwice = document.querySelector('#no-character-twice');
noCharacterTwice.addEventListener('click', randomizePlayerKarts);

// No female characters
const excludeFemaleCharacters = document.querySelector('#no-female-characters');

excludeFemaleCharacters.addEventListener('click', () => {
  if(excludeMaleCharacters.checked) {
    excludeMaleCharacters.checked = false;
  }
})

excludeFemaleCharacters.addEventListener('click', randomizePlayerKarts);

// No male characters
const excludeMaleCharacters = document.querySelector('#no-male-characters');

excludeMaleCharacters.addEventListener('click', () => {
  if(excludeFemaleCharacters.checked) {
    excludeFemaleCharacters.checked = false;
  }
})

excludeMaleCharacters.addEventListener('click', randomizePlayerKarts);

// KARTS
// Exclude bikes
const excludeBikes = document.querySelector('#no-bikes');
excludeBikes.addEventListener('click', randomizePlayerKarts);

// No kart twice in a row
const noKartTwice = document.querySelector('#no-kart-twice');
noKartTwice.addEventListener('click', randomizePlayerKarts);

// No tires twice in a row
const noTiresTwice = document.querySelector('#no-tires-twice');
noTiresTwice.addEventListener('click', randomizePlayerKarts);

// No glider twice in a row
const noGliderTwice = document.querySelector('#no-glider-twice');
noGliderTwice.addEventListener('click', randomizePlayerKarts);

// ITEMS
// Minimum items
const minItems = document.querySelector('#min-items');

minItems.addEventListener('change', () => {
  let minItemsCurrentMin = document.querySelector('#min-items');
  let maxItemsCurrentMin = document.querySelector('#max-items');

  if(parseInt(minItemsCurrentMin.value) > parseInt(maxItemsCurrentMin.value)) {
    maxItemsCurrentMin.value = minItemsCurrentMin.value;
  }

  randomizeItems();
});

// Maximum items
const maxItems = document.querySelector('#max-items');

maxItems.addEventListener('change', () => {
  let minItemsCurrentMax = document.querySelector('#min-items');
  let maxItemsCurrentMax = document.querySelector('#max-items');

  if(parseInt(maxItemsCurrentMax.value) < parseInt(minItemsCurrentMax.value)) {
    minItemsCurrentMax.value = maxItemsCurrentMax.value;
  }

  randomizeItems();
});

// Reset settings on button click.
const resetSettingsBtn = document.querySelector('.reset-settings');
resetSettingsBtn.addEventListener('click', resetSettings);

// Save current settings.
const saveSettings = document.querySelector('.save-settings');
saveSettings.addEventListener('click', () => {
  const settingsToSave = {
    playerCount: playerCountInput.value,
    excludeTourTracks: excludeTourTracks.checked,
    excludeRetroTracks: excludeRetroTracks.checked,
    excludeNitroTracks: excludeNitroTracks.checked,
    excludeDLCTracks: excludeDLCTracks.checked,
    noTrackTwice: noTrackTwice.checked,
    excludeStupidCharacters: excludeStupidCharacters.checked,
    excludeFemaleCharacters: excludeFemaleCharacters.checked,
    excludeMaleCharacters: excludeMaleCharacters.checked,
    noCharacterTwice: noCharacterTwice.checked,
    excludeBikes: excludeBikes.checked,
    noKartTwice: noKartTwice.checked,
    noTiresTwice: noTiresTwice.checked,
    noGliderTwice: noGliderTwice.checked,
    minItems: minItems.value,
    maxItems: maxItems.value,
    noUnlockables: noUnlockables.value
  }

  saveDefaultSettings(config.DEFAULT_SETTINGS_KEY, settingsToSave);
})

// Clear settings.
const clearSettings = document.querySelector('.clear-settings');
clearSettings.addEventListener('click', () => {
  clearDefaultSettings(config.DEFAULT_SETTINGS_KEY);
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
    settingsMenu.close();
  }
});

// Open settings menu
const openSettingsMenuBtn = document.querySelector('#open-dialog');

openSettingsMenuBtn.addEventListener('click', () => {
  settingsMenu.showModal();
})

// Close dialog
const closeSettingsMenuBtn = document.querySelector('#close-dialog');

closeSettingsMenuBtn.addEventListener('click', () => {
  settingsMenu.close();
})