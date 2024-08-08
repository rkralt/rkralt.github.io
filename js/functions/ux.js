import config from '../../data/config.js';
import randomizePlayerKarts from './randomizeKarts.js';
import randomizeTrack from './randomizeTrack.js';
import randomizeItems from './randomizeItems.js';

function toggleStatsOverlay(showStatsBtn) {
  const kartItem = showStatsBtn.closest('.kart-item');
  const statsOverlay = kartItem.querySelector('.stats-overlay');

  if(statsOverlay.dataset.show === 'false') {
    statsOverlay.dataset.show = 'true';
  } else {
    statsOverlay.dataset.show = 'false';
  }
}

export { toggleStatsOverlay };
