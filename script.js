// Config
import config from './js/config.js';

// UX functions
import { resetSettings, toggleSettingsMenu, toggleStatsOverlay } from './js/ux.js';

// Randomize karts function.
import randomizePlayerKarts from './js/randomizeKarts.js';

// Randomize track function.
import randomizeTrack from './js/randomizeTrack.js';

// Calculate stats function.
import calculateStats from './js/calculateStats.js';


// --- CODE ---

// RANDOMIZER
// Randomize karts & track on startup.
randomizePlayerKarts();
randomizeTrack();

// Set max player count based on config setting.
const playerCountInput = document.querySelector('#player-count');
playerCountInput.max = config.SETTING_MAX_PLAYER_COUNT;

// Randomize karts on button click.
const randomizeKartsBtn = document.querySelector('#randomize-karts');
randomizeKartsBtn.addEventListener('click', randomizePlayerKarts);

// Randomize track on button click.
const randomizeTrackBtn = document.querySelector('#randomize-track');
randomizeTrackBtn.addEventListener('click', randomizeTrack);



// Randomize karts by pressing r key.
document.addEventListener('keyup', function(event) {
  if (event.key === 'r' || event.key === 'R') {
    randomizePlayerKarts();
  }
})

// Randomize karts by pressing t key.
document.addEventListener('keyup', function(event) {
  if (event.key === 't' || event.key === 'T') {
    randomizeTrack();
  }
})


// Randomize track/players on settings change.
playerCountInput.addEventListener('change', randomizePlayerKarts);

const excludeTourTracksBtn = document.querySelector('#no-tour-tracks');
excludeTourTracksBtn.addEventListener('click', randomizeTrack);

const excludeRetroTracksBtn = document.querySelector('#no-retro-tracks');

// Toggle impossible settings
excludeRetroTracksBtn.addEventListener('click', () => {
  if(excludeRetroTracksBtn.checked) {
    excludeNitroTracksBtn.checked = false;
  }
})

excludeRetroTracksBtn.addEventListener('click', randomizeTrack); 

const excludeNitroTracksBtn = document.querySelector('#no-nitro-tracks');

// Toggle impossible settings.
excludeNitroTracksBtn.addEventListener('click', () => {
  if(excludeNitroTracksBtn.checked) {
    excludeRetroTracksBtn.checked = false;
  }
})

excludeNitroTracksBtn.addEventListener('click', randomizeTrack);

const noTrackTwice = document.querySelector('#no-track-twice');
noTrackTwice.addEventListener('click', randomizeTrack);

const excludeStupidCharactersBtn = document.querySelector('#no-stupid-characters');
excludeStupidCharactersBtn.addEventListener('click', randomizePlayerKarts);

const noCharacterTwice = document.querySelector('#no-character-twice');
noCharacterTwice.addEventListener('click', randomizePlayerKarts);

const excludeBikesBtn = document.querySelector('#no-bikes');
excludeBikesBtn.addEventListener('click', randomizePlayerKarts);

const noKartTwice = document.querySelector('#no-kart-twice');
noKartTwice.addEventListener('click', randomizePlayerKarts);

const noTiresTwice = document.querySelector('#no-tires-twice');
noTiresTwice.addEventListener('click', randomizePlayerKarts);

const noGliderTwice = document.querySelector('#no-glider-twice');
noGliderTwice.addEventListener('click', randomizePlayerKarts);

// Reset settings on button click.
const resetSettingsBtn = document.querySelector('.reset-settings');
resetSettingsBtn.addEventListener('click', resetSettings);


// STATS
const playerShowStatsBtns = document.querySelectorAll('.show-stats');

playerShowStatsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    calculateStats(btn);
    toggleStatsOverlay(btn);
  })
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
    const activePlayers = document.querySelectorAll('.kart-item[data-show="true"]');
    
    const closedOverlays = Array.from(activePlayers).filter(player => 
      player.querySelector('.stats-overlay[data-show="false"]')
    );

    // If all overlays are open/closed, toggle them all.
    if(activePlayers.length === closedOverlays.length ||
      closedOverlays.length === 0) {
      activePlayers.forEach(player => {
        const statsOverlay = player.querySelector('.stats-overlay');
        calculateStats(statsOverlay);
        toggleStatsOverlay(statsOverlay);        
      })
    } else {
      // If at least 1 is opened, open the closed ones.
      closedOverlays.forEach(player => {
        const statsOverlay = player.querySelector('.stats-overlay');
        calculateStats(statsOverlay);
        toggleStatsOverlay(statsOverlay);        
      })
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