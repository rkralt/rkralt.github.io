import config from './config.js';
import allStats from '../data/mk-stats.js';
import { getRandomIntInclusive, itemInArray } from './helpers.js';

// Calculate stats for all vehicle parts.
function calculateStats(statsSource) {
  const playerSource = statsSource.closest(".kart-item");

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

  const speedStat = convertToPercentage(
    parseFloat(characterStats.Speed) + 
    parseFloat(kartStats.Speed) + 
    parseFloat(tiresStats.Speed) + 
    parseFloat(gliderStats.Speed)
  );

  const speedBar = playerSource.querySelector('.speed .bar-percentage');
  speedBar.style.width = `${speedStat}%`;
  
  const accelStat = convertToPercentage(
    parseFloat(characterStats.Accel) + 
    parseFloat(kartStats.Accel) + 
    parseFloat(tiresStats.Accel) + 
    parseFloat(gliderStats.Accel)
  );

  const accelBar = playerSource.querySelector('.acceleration .bar-percentage');
  accelBar.style.width = `${accelStat}%`;
  
  const weightStat = convertToPercentage(
    parseFloat(characterStats.Weight) + 
    parseFloat(kartStats.Weight) + 
    parseFloat(tiresStats.Weight) + 
    parseFloat(gliderStats.Weight)
  );

  const weightBar = playerSource.querySelector('.weight .bar-percentage');
  weightBar.style.width = `${weightStat}%`;
  
  const handlingStat = convertToPercentage(
    parseFloat(characterStats.Handling) + 
    parseFloat(kartStats.Handling) + 
    parseFloat(tiresStats.Handling) + 
    parseFloat(gliderStats.Handling)
  );

  const handlingBar = playerSource.querySelector('.handling .bar-percentage');
  handlingBar.style.width = `${handlingStat}%`;
  
  const tractionStat = convertToPercentage(
    parseFloat(characterStats.Traction) + 
    parseFloat(kartStats.Traction) + 
    parseFloat(tiresStats.Traction) + 
    parseFloat(gliderStats.Traction)
  );

  const tractionBar = playerSource.querySelector('.grip .bar-percentage');
  tractionBar.style.width = `${tractionStat}%`;
  
  const miniTurboStat = convertToPercentage(
    parseFloat(characterStats['M-turbo']) + 
    parseFloat(kartStats['M-turbo']) + 
    parseFloat(tiresStats['M-turbo']) + 
    parseFloat(gliderStats['M-turbo'])
  );

  const miniTurboBar = playerSource.querySelector('.mini-turbo .bar-percentage');
  miniTurboBar.style.width = `${miniTurboStat}%`;
  
  const invincibStat = convertToPercentage(
    parseFloat(characterStats.Invincib) + 
    parseFloat(kartStats.Invincib) + 
    parseFloat(tiresStats.Invincib) + 
    parseFloat(gliderStats.Invincib)
  );

  const invincibBar = playerSource.querySelector('.invincibility-frames .bar-percentage');
  invincibBar.style.width = `${invincibStat}%`;

  showDriftType(playerSource, kartInt);
}

function convertToPercentage(stat) {
  const maxStat = config.MAX_STAT;
  return (stat / maxStat) * 100;
}

// Display drift type.
function showDriftType(playerSource, kartInt) {
  const driftType = playerSource.querySelector('.drift-type');
  const inwardVehicles = config.INWARD_VEHICLES;

  if(itemInArray(inwardVehicles, kartInt)) {
    driftType.innerText = 'Inward drift'

    // Easter egg :)
    const jankenInt = getRandomIntInclusive(0, 99);

    if (jankenInt !== 0) return;
    
    driftType.innerText += `
    JANKEN`;
  } else {
    driftType.innerText = 'Outward drift'
  }
}

export default calculateStats;