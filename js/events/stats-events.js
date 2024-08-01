import calculateStats from "../functions/calculateStats.js";
import { toggleStatsOverlay } from "../functions/ux.js";

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