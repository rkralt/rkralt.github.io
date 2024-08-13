import { calculateStats, toggleStatsOverlay, toggleAllStatOverlays } from "../functions/calculateStats.js";
import { keyEvent } from "../functions/helpers.js";

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

keyEvent('s', toggleAllStatOverlays);