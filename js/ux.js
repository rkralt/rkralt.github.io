import config from './config.js';
import randomizePlayerKarts from './randomizeKarts.js';
import randomizeTrack from './randomizeTrack.js';

// Reset all settings
function resetSettings() {
  let randomTrack = false;
  let randomCharacter = false;

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

  // Reset only retro tracks
  const excludeNitroTracks = document.querySelector('#no-nitro-tracks');

  if(excludeNitroTracks.checked !== config.SETTING_EXCLUDE_NITRO_TRACKS) {
    excludeNitroTracks.checked = config.SETTING_EXCLUDE_NITRO_TRACKS;
    randomTrack = true;
  }

  // Reset only nitro tracks
  const excludeRetroTracks = document.querySelector('#no-retro-tracks');

  if(excludeRetroTracks.checked !== config.SETTING_EXCLUDE_RETRO_TRACKS) {
    excludeRetroTracks.checked = config.SETTING_EXCLUDE_RETRO_TRACKS;
    randomTrack = true;
  }

  // Reset stupid characters
  const excludeStupidCharacters = document.querySelector('#no-stupid-characters');

  if(excludeStupidCharacters.checked !== config.SETTINGS_EXCLUDE_STUPID_CHARACTERS) {
    excludeStupidCharacters.checked = config.SETTINGS_EXCLUDE_STUPID_CHARACTERS;
    randomCharacter = true;
  }

  // Reset no bikes
  const excludeBikes = document.querySelector('#no-bikes');
  
  if(excludeBikes.checked !== config.SETTINGS_EXCLUDE_BIKES) {
    excludeBikes.checked = config.SETTINGS_EXCLUDE_BIKES;
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