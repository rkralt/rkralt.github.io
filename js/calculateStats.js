import config from './config.js';
import allStats from '../data/mk-stats.js';
import { getRandomIntInclusive } from './helpers.js';

// Calculate stats for all vehicle parts.
function calculateStats(playerSource) {
  // If stats overlay is open already, don't recalculate stats.
  const statsOverlay = playerSource.querySelector(".stats-overlay");
  if(statsOverlay.dataset.show === "true") return;

  const characterInt = parseInt(playerSource.querySelector('.character').dataset.id);
  const kartInt = parseInt(playerSource.querySelector('.kart').dataset.id);
  const tiresInt = parseInt(playerSource.querySelector('.tires').dataset.id);
  const gliderInt = parseInt(playerSource.querySelector('.glider').dataset.id);

  const characterStats = allStats.Characters.find(item => item.Numbers === characterInt);
  const kartStats = allStats.Carts.find(item => item.Numbers === kartInt);
  const tiresStats = allStats.Tires.find(item => item.Numbers === tiresInt);
  const gliderStats = allStats.Gliders.find(item => item.Numbers === gliderInt);

  const driftType = playerSource.querySelector('.drift-type');

  if(kartInt === config.INWARD_COMET ||
    kartInt === config.INWARD_JET ||
    kartInt === config.INWARD_MASTER ||
    kartInt === config.INWARD_SPORT ||
    kartInt === config.INWARD_YOSHI
  ) {
    driftType.innerText = 'Inward drift'

    const jankenInt = getRandomIntInclusive(0, 99);

    if (jankenInt !== 0) return;
    
    driftType.innerText += ' JANKEN';
  } else {
    driftType.innerText = 'Outward drift'
  }
}

export default calculateStats;