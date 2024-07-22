// --- CONFIG ---
// Character stats JSON
import CHARACTER_STATS from './data/mk-stats.js';

// Config
import config from './js/config.js';

// Helper functions
import { getRandomIntInclusive, getRandomItemFromArray, removeArrayFromMainArray } from './js/helpers.js';

// UX functions
import { resetSettings, toggleSettingsMenu, toggleStatsOverlay, openStatsOverlay, closeStatsOverlay } from './js/ux.js';

// Randomize karts function.
import randomizePlayerKarts from './js/randomizeKarts.js';

// Randomize track function.
import randomizeTrack from './js/randomizeTrack.js';

// Calculate stats function.
import calculateStats from './js/calculateStats.js';


// --- CODE ---

// RANDOMIZER
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const player3 = document.querySelector('.player3');
const player4 = document.querySelector('.player4');

// Randomize karts & track on startup.
randomizePlayerKarts();
randomizeTrack();

// Randomize karts on player count change.
const playerCountInput = document.querySelector('#player-count');
playerCountInput.addEventListener('change', randomizePlayerKarts);

// Randomize karts on button click.
const randomizeKartsBtn = document.querySelector('#randomize-karts');
randomizeKartsBtn.addEventListener('click', randomizePlayerKarts);

// Randomize track on button click.
const randomizeTrackBtn = document.querySelector('#randomize-track');
randomizeTrackBtn.addEventListener('click', randomizeTrack);

// Randomize track on settings change.
const excludeTourTracksBtn = document.querySelector('#no-tour-tracks');
excludeTourTracksBtn.addEventListener('click', randomizeTrack);

const excludeRetroTracksBtn = document.querySelector('#no-retro-tracks');
const excludeNitroTracksBtn = document.querySelector('#no-nitro-tracks');

// Toggle impossible settings
excludeRetroTracksBtn.addEventListener('click', () => {
  if(excludeRetroTracksBtn.checked) {
    excludeNitroTracksBtn.checked = false;
  }
})

excludeNitroTracksBtn.addEventListener('click', () => {
  if(excludeNitroTracksBtn.checked) {
    excludeRetroTracksBtn.checked = false;
  }
})

// Randomize track on settings change.
excludeRetroTracksBtn.addEventListener('click', randomizeTrack); 
excludeNitroTracksBtn.addEventListener('click', randomizeTrack);

const excludeStupidCharactersBtn = document.querySelector('#no-stupid-characters');

excludeStupidCharactersBtn.addEventListener('click', randomizePlayerKarts);

const excludeBikesBtn = document.querySelector('#no-bikes');

excludeBikesBtn.addEventListener('click', randomizePlayerKarts);

// Reset settings on button click.
const resetSettingsBtn = document.querySelector('.reset-settings');
resetSettingsBtn.addEventListener('click', resetSettings);


// STATS
const player1ShowStats = player1.querySelector('.show-stats');
const player2ShowStats = player2.querySelector('.show-stats');
const player3ShowStats = player3.querySelector('.show-stats');
const player4ShowStats = player4.querySelector('.show-stats');

player1ShowStats.addEventListener('click', () => {
  calculateStats(player1);
  toggleStatsOverlay(player1ShowStats);
})

player2ShowStats.addEventListener('click', () => {
  calculateStats(player2);
  toggleStatsOverlay(player2ShowStats);
})

player3ShowStats.addEventListener('click', () => {
  calculateStats(player3);
  toggleStatsOverlay(player3ShowStats);
})

player4ShowStats.addEventListener('click', () => {
  calculateStats(player4);
  toggleStatsOverlay(player4ShowStats);
})

// Hide stats overlay.
const hideStatsBtns = document.querySelectorAll('.hide-stats');
hideStatsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleStatsOverlay(btn);
  });
})

// Toggle all stats overlays by pressing the s key.
document.addEventListener('keyup', function(event) {
  if (event.key === 's' || event.key === 'S') {
    const player1StatsOverlay = document.querySelector('.player1 .stats-overlay');
    const player2StatsOverlay = document.querySelector('.player2 .stats-overlay');
    const player3StatsOverlay = document.querySelector('.player3 .stats-overlay');
    const player4StatsOverlay = document.querySelector('.player4 .stats-overlay');

    if(player1StatsOverlay.dataset.show === "true" &&
      player2StatsOverlay.dataset.show === "true" &&
      player3StatsOverlay.dataset.show === "true" &&
      player4StatsOverlay.dataset.show === "true"
    ) {
      closeStatsOverlay(player1StatsOverlay);
      closeStatsOverlay(player2StatsOverlay);
      closeStatsOverlay(player3StatsOverlay);
      closeStatsOverlay(player4StatsOverlay);
    } else {
      calculateStats(player1);
      openStatsOverlay(player1StatsOverlay);
      calculateStats(player2);
      openStatsOverlay(player2StatsOverlay);
      calculateStats(player3);
      openStatsOverlay(player3StatsOverlay);
      calculateStats(player4);
      openStatsOverlay(player4StatsOverlay);
    }
  }
});


// UX STUFF
// Toggle menu when clicked anywhere on the screen.
window.addEventListener('click', (e) => {
  toggleSettingsMenu(e);
});

// When clicking inside of the menu, don't close it.
const settingsMenu = document.querySelector('.settings-menu');
settingsMenu.addEventListener('click', (e) => {
  e.stopPropagation();
})