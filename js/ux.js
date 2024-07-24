import config from './config.js';
import randomizePlayerKarts from './randomizeKarts.js';
import randomizeTrack from './randomizeTrack.js';

// Reset all settings
function resetSettings() {
  let randomCharacter = false;
  let randomTrack = false;

  // Reset player count
  const playerCount = document.querySelector('#player-count');

  if(parseInt(playerCount.value) !== config.SETTING_PLAYER_COUNT) {
    playerCount.value = config.SETTING_PLAYER_COUNT;
    randomCharacter = true;
  }

  // Reset no tour tracks
  const excludeTourTracks = document.querySelector('#no-tour-tracks');

  if(excludeTourTracks.checked !== config.SETTING_EXCLUDE_TOUR_TRACKS) {
    excludeTourTracks.checked = config.SETTING_EXCLUDE_TOUR_TRACKS;
    randomTrack = true;
  }

  // Reset only nitro tracks
  const excludeRetroTracks = document.querySelector('#no-retro-tracks');

  if(excludeRetroTracks.checked !== config.SETTING_EXCLUDE_RETRO_TRACKS) {
    excludeRetroTracks.checked = config.SETTING_EXCLUDE_RETRO_TRACKS;
    randomTrack = true;
  }

  // Reset only retro tracks
  const excludeNitroTracks = document.querySelector('#no-nitro-tracks');

  if(excludeNitroTracks.checked !== config.SETTING_EXCLUDE_NITRO_TRACKS) {
    excludeNitroTracks.checked = config.SETTING_EXCLUDE_NITRO_TRACKS;
    randomTrack = true;
  }

  // Reset no track twice
  const noTrackTwice = document.querySelector('#no-track-twice');

  if(noTrackTwice.checked !== config.SETTING_NO_TRACK_TWICE) {
    noTrackTwice.checked = config.SETTING_NO_TRACK_TWICE;
    randomTrack = true;
  }

  // Reset stupid characters
  const excludeStupidCharacters = document.querySelector('#no-stupid-characters');

  if(excludeStupidCharacters.checked !== config.SETTING_EXCLUDE_STUPID_CHARACTERS) {
    excludeStupidCharacters.checked = config.SETTING_EXCLUDE_STUPID_CHARACTERS;
    randomCharacter = true;
  }

  // Reset no character twice
  const noCharacterTwice = document.querySelector('#no-character-twice');

  if(noCharacterTwice.checked !== config.SETTINS_NO_CHARACTER_TWICE) {
    noCharacterTwice.checked = config.SETTINS_NO_CHARACTER_TWICE;
    randomCharacter = true;
  }

  // Reset no bikes
  const excludeBikes = document.querySelector('#no-bikes');
  
  if(excludeBikes.checked !== config.SETTING_EXCLUDE_BIKES) {
    excludeBikes.checked = config.SETTING_EXCLUDE_BIKES;
    randomCharacter = true;
  }

  // Reset no kart twice
  const noKartTwice = document.querySelector('#no-kart-twice');

  if(noKartTwice.checked !== config.SETTING_NO_KART_TWICE) {
    noKartTwice.checked = config.SETTING_NO_KART_TWICE;
    randomCharacter = true;
  }

  // Reset no tires twice
  const noTiresTwice = document.querySelector('#no-tires-twice');

  if(noTiresTwice.checked !== config.SETTING_NO_TIRES_TWICE) {
    noTiresTwice.checked = config.SETTING_NO_TIRES_TWICE;
    randomCharacter = true;
  }

  // Reset no character twice
  const noGliderTwice = document.querySelector('#no-glider-twice');

  if(noGliderTwice.checked !== config.SETTING_NO_GLIDER_TWICE) {
    noGliderTwice.checked = config.SETTING_NO_GLIDER_TWICE;
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

export { resetSettings, toggleSettingsMenu, toggleStatsOverlay };