import config from "../../data/config.js";
import randomizePlayerKarts from "../functions/randomizeKarts.js";
import randomizeTrack from "../functions/randomizeTrack.js";
import randomizeItems from "../functions/randomizeItems.js";
import { resetSettings, toggleMenu } from "../functions/ux.js";
import { saveDefaultSettings, clearDefaultSettings } from "../functions/localStorage.js";

const playerCountInput = document.querySelector('#player-count');

// Randomize track/players on settings change.
playerCountInput.addEventListener('change', randomizePlayerKarts);

const excludeTourTracks = document.querySelector('#no-tour-tracks');
excludeTourTracks.addEventListener('click', randomizeTrack);

const excludeRetroTracks = document.querySelector('#no-retro-tracks');

// Toggle impossible settings
excludeRetroTracks.addEventListener('click', () => {
  if(excludeRetroTracks.checked) {
    excludeNitroTracks.checked = false;
  }
})

excludeRetroTracks.addEventListener('click', randomizeTrack); 

const excludeNitroTracks = document.querySelector('#no-nitro-tracks');

// Toggle impossible settings.
excludeNitroTracks.addEventListener('click', () => {
  if(excludeNitroTracks.checked) {
    excludeRetroTracks.checked = false;
  }
})

excludeNitroTracks.addEventListener('click', randomizeTrack);

const noTrackTwice = document.querySelector('#no-track-twice');
noTrackTwice.addEventListener('click', randomizeTrack);

const excludeStupidCharacters = document.querySelector('#no-stupid-characters');
excludeStupidCharacters.addEventListener('click', randomizePlayerKarts);

const noCharacterTwice = document.querySelector('#no-character-twice');
noCharacterTwice.addEventListener('click', randomizePlayerKarts);

const excludeBikes = document.querySelector('#no-bikes');
excludeBikes.addEventListener('click', randomizePlayerKarts);

const noKartTwice = document.querySelector('#no-kart-twice');
noKartTwice.addEventListener('click', randomizePlayerKarts);

const noTiresTwice = document.querySelector('#no-tires-twice');
noTiresTwice.addEventListener('click', randomizePlayerKarts);

const noGliderTwice = document.querySelector('#no-glider-twice');
noGliderTwice.addEventListener('click', randomizePlayerKarts);

const minItems = document.querySelector('#min-items');
const maxItems = document.querySelector('#max-items');

const excludeFemaleCharacters = document.querySelector('#no-female-characters');
const excludeMaleCharacters = document.querySelector('#no-male-characters');

// Toggle impossible settings.
excludeFemaleCharacters.addEventListener('click', () => {
  if(excludeMaleCharacters.checked) {
    excludeMaleCharacters.checked = false;
  }
})

// Toggle impossible settings.
excludeMaleCharacters.addEventListener('click', () => {
  if(excludeFemaleCharacters.checked) {
    excludeFemaleCharacters.checked = false;
  }
})

excludeFemaleCharacters.addEventListener('click', randomizePlayerKarts);
excludeMaleCharacters.addEventListener('click', randomizePlayerKarts);

minItems.addEventListener('change', () => {
  let minItemsCurrentMin = document.querySelector('#min-items');
  let maxItemsCurrentMin = document.querySelector('#max-items');

  if(parseInt(minItemsCurrentMin.value) > parseInt(maxItemsCurrentMin.value)) {
    maxItemsCurrentMin.value = minItemsCurrentMin.value;
  }

  randomizeItems();
});

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
    noTrackTwice: noTrackTwice.checked,
    excludeStupidCharacters: excludeStupidCharacters.checked,
    noCharacterTwice: noCharacterTwice.checked,
    excludeBikes: excludeBikes.checked,
    noKartTwice: noKartTwice.checked,
    noTiresTwice: noTiresTwice.checked,
    noGliderTwice: noGliderTwice.checked,
    minItems: minItems.value,
    maxItems: maxItems.value,
  }

  saveDefaultSettings(config.DEFAULT_SETTINGS_KEY, settingsToSave);
})

// Clear settings.
const clearSettings = document.querySelector('.clear-settings');
clearSettings.addEventListener('click', () => {
  clearDefaultSettings(config.DEFAULT_SETTINGS_KEY);
})

// Toggle individual settings.
const settingToggles = document.querySelectorAll('.setting-toggle');
settingToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggleMenu(toggle);
  })

  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
    }
  })

  toggle.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu(toggle);
    }
  })
})