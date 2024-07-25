import config from './config.js';
import randomizePlayerKarts from './randomizeKarts.js';
import randomizeTrack from './randomizeTrack.js';

// Reset all settings
function resetSettings() {
  const defaultSettings = loadDefaultSettings(config.DEFAULT_SETTINGS_KEY);

  let randomCharacter = false;
  let randomTrack = false;

  // Reset player count
  const playerCount = document.querySelector('#player-count');
  const playerCountDefault = defaultSettings.playerCount;

  if(parseInt(playerCount.value) !== parseInt(playerCountDefault)) {
    playerCount.value = parseInt(playerCountDefault);
    randomCharacter = true;
  }

  // Reset no tour tracks
  const excludeTourTracks = document.querySelector('#no-tour-tracks');
  const excludeTourTracksDefault = defaultSettings.excludeTourTracks;

  if(excludeTourTracks.checked !== excludeTourTracksDefault) {
    excludeTourTracks.checked = excludeTourTracksDefault;
    randomTrack = true;
  }

  // Reset only nitro tracks
  const excludeRetroTracks = document.querySelector('#no-retro-tracks');
  const excludeRetroTracksDefault = defaultSettings.excludeRetroTracks;

  if(excludeRetroTracks.checked !== excludeRetroTracksDefault) {
    excludeRetroTracks.checked = excludeRetroTracksDefault;
    randomTrack = true;
  }

  // Reset only retro tracks
  const excludeNitroTracks = document.querySelector('#no-nitro-tracks');
  const excludeNitroTracksDefault = defaultSettings.excludeNitroTracks;

  if(excludeNitroTracks.checked !== excludeNitroTracksDefault) {
    excludeNitroTracks.checked = excludeNitroTracksDefault;
    randomTrack = true;
  }

  // Reset no track twice
  const noTrackTwice = document.querySelector('#no-track-twice');
  const noTrackTwiceDefault = defaultSettings.noTrackTwice;

  if(noTrackTwice.checked !== noTrackTwiceDefault) {
    noTrackTwice.checked = noTrackTwiceDefault;
    randomTrack = true;
  }

  // Reset stupid characters
  const excludeStupidCharacters = document.querySelector('#no-stupid-characters');
  const excludeStupidCharactersDefault = defaultSettings.excludeStupidCharacters;

  if(excludeStupidCharacters.checked !== excludeStupidCharactersDefault) {
    excludeStupidCharacters.checked = excludeStupidCharactersDefault;
    randomCharacter = true;
  }

  // Reset no character twice
  const noCharacterTwice = document.querySelector('#no-character-twice');
  const noCharacterTwiceDefault = defaultSettings.noCharacterTwice;

  if(noCharacterTwice.checked !== noCharacterTwiceDefault) {
    noCharacterTwice.checked = noCharacterTwiceDefault;
    randomCharacter = true;
  }

  // Reset no bikes
  const excludeBikes = document.querySelector('#no-bikes');
  const excludeBikesDefault = defaultSettings.excludeBikes;

  if(excludeBikes.checked !== excludeBikesDefault) {
    excludeBikes.checked = excludeBikesDefault;
    randomCharacter = true;
  }

  // Reset no kart twice
  const noKartTwice = document.querySelector('#no-kart-twice');
  const noKartTwiceDefault = defaultSettings.noKartTwice;

  if(noKartTwice.checked !== noKartTwiceDefault) {
    noKartTwice.checked = noKartTwiceDefault;
    randomCharacter = true;
  }

  // Reset no tires twice
  const noTiresTwice = document.querySelector('#no-tires-twice');
  const noTiresTwiceDefault = defaultSettings.noTiresTwice;

  if(noTiresTwice.checked !== noTiresTwiceDefault) {
    noTiresTwice.checked = noTiresTwiceDefault;
    randomCharacter = true;
  }

  // Reset no character twice
  const noGliderTwice = document.querySelector('#no-glider-twice');
  const noGliderTwiceDefault = defaultSettings.noGliderTwice;

  if(noGliderTwice.checked !== noGliderTwiceDefault) {
    noGliderTwice.checked = noGliderTwiceDefault;
    randomCharacter = true;
  }

  // Only randomize karts once if needed.
  if(randomCharacter) {
    randomizePlayerKarts();
  }

  // Only randomize track once if needed.
  if(randomTrack) {
    randomizeTrack();
  }
}

function saveDefaultSettings(key, settings) {
  localStorage.setItem(key, JSON.stringify(settings));
}

function loadDefaultSettings(key) {
  const arrayString = localStorage.getItem(key);
  
  if(arrayString === null) {
    const defaultSettings = {
      playerCount: config.SETTING_PLAYER_COUNT,
      excludeTourTracks: config.SETTING_EXCLUDE_TOUR_TRACKS,
      excludeRetroTracks: config.SETTING_EXCLUDE_RETRO_TRACKS,
      excludeNitroTracks: config.SETTING_EXCLUDE_NITRO_TRACKS,
      noTrackTwice: config.SETTING_NO_TRACK_TWICE,
      excludeStupidCharacters: config.SETTING_EXCLUDE_STUPID_CHARACTERS,
      noCharacterTwice: config.SETTINS_NO_CHARACTER_TWICE,
      excludeBikes: config.SETTING_EXCLUDE_BIKES,
      noKartTwice: config.SETTING_NO_KART_TWICE,
      noTiresTwice: config.SETTING_NO_TIRES_TWICE,
      noGliderTwice: config.SETTING_NO_GLIDER_TWICE
    }

    return defaultSettings
  } else {
    return JSON.parse(arrayString);
  }
}

function clearDefaultSettings(key) {
  localStorage.removeItem(key);
}

// Open menu when clicked on the menu toggle button.
// Close menu when clicked anywhere on the screen or on the menu toggle button when the menu is open.
function toggleSettingsMenu(e) {
  const settingsToggle = e.target.closest('.settings-toggle');

  const clickedOnClosedToggle = settingsToggle && settingsToggle.dataset.open === 'false';

  document.querySelectorAll('.settings-toggle').forEach(toggle => toggle.dataset.open = 'false');

  if (clickedOnClosedToggle) {
    settingsToggle.dataset.open = 'true';
  }
}

function toggleStatsOverlay(showStatsBtn) {
  const kartItem = showStatsBtn.closest('.kart-item');
  const statsOverlay = kartItem.querySelector('.stats-overlay');

  if(statsOverlay.dataset.show === 'false') {
    statsOverlay.dataset.show = 'true';
  } else {
    statsOverlay.dataset.show = 'false';
  }
}

function toggleMenu(menu) {
  if(menu.dataset.open === 'false') {
    menu.dataset.open = 'true';
  } else {
    menu.dataset.open = 'false';
  }
}

export { resetSettings, toggleSettingsMenu, toggleStatsOverlay, saveDefaultSettings, loadDefaultSettings, clearDefaultSettings, toggleMenu };
