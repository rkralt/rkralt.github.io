// Config
import config from './config.js';
import {getRandomIntInclusive, getRandomItemFromArray, removeArrayFromMainArray} from './helpers.js';

// Randomize player karts.
function randomizePlayerKarts() {
  let playerCount = document.querySelector('#player-count').value;
  const allPlayers = document.querySelectorAll('.kart-item');
  
  // Hide all players and stats overlays.
  allPlayers.forEach(player => {
    player.dataset.show = "false";
    const playerStatsOverlay = player.querySelector('.stats-overlay');
    playerStatsOverlay.dataset.show = "false";
  })

  // Based on the player count, randomize the players.
  while(playerCount > 0) {
    // Select the first available player.
    const player = document.querySelector('.kart-item[data-show="false"]');

    // If there's no player, go out of the loop.
    if(player === null) {
      break;
    }

    // Show player.
    player.dataset.show = "true";

    // Set images for player.
    setCharacterImage(config.BASE_URL_CHARACTERS, player);
    setKartsImage(config.BASE_URL_KARTS, player);
    setTiresImage(config.BASE_URL_TIRES, player);
    setGlidersImage(config.BASE_URL_GLIDERS, player);

    playerCount--;
  }
}

// Randomly select character image.
function setCharacterImage(imageUrl, playerSource) {
  let variantInt = null;
  const characterSource = playerSource.querySelector('.character');
  
  let allCharacters = config.CHARACTERS_ALL;
  const excludeStupidCharacters = document.querySelector('#no-stupid-characters').checked;

  if(excludeStupidCharacters) {
    allCharacters = removeArrayFromMainArray(allCharacters, config.CHARACTERS_REMOVE_STUPID);
  }

  const characterInt = getRandomItemFromArray(allCharacters);

  // Some characters have multiple variants. Randomly choose variant in this case.
  switch(characterInt) {
    // Birdo
    case config.POSITION_BIRDO:
      variantInt = getRandomIntInclusive(0, config.VARIANTS_BIRDO);
      imageUrl += config.URL_EXTENSION_BIRDO;
    break;
    // Inkling
    case config.POSITION_INKLING:
      variantInt = getRandomIntInclusive(0, config.VARIANTS_INKLING);
      imageUrl += config.URL_EXTENSION_INKLING;
    break;
    // Link
    case config.POSITION_LINK:
      variantInt = getRandomIntInclusive(0, config.VARIANTS_LINK);
      imageUrl += config.URL_EXTENSION_LINK;
    break;
    // Metal Mario
    case config.POSITION_METAL:
      variantInt = getRandomIntInclusive(0, config.VARIANTS_METAL);
      imageUrl += config.URL_EXTENSION_METAL;
    break;
    // Shy Guy
    case config.POSITION_SHY:
      variantInt = getRandomIntInclusive(0, config.VARIANTS_SHY);
      imageUrl += config.URL_EXTENSION_SHY;
    break;
    // Villager
    case config.POSITION_VILLAGER:
      variantInt = getRandomIntInclusive(0, config.VARIANTS_VILLAGER);
      imageUrl += config.URL_EXTENSION_VILLAGER;
    break;
    // Yoshi
    case config.POSITION_YOSHI:
      variantInt = getRandomIntInclusive(0, config.VARIANTS_YOSHI);
      imageUrl += config.URL_EXTENSION_YOSHI;
    break;
  }

  if(variantInt === null) {
    imageUrl += characterInt + '.png'
  } else {
    imageUrl += variantInt + '.png'
  }

  characterSource.src = imageUrl;
  characterSource.dataset.id = characterInt; 
}

// Randomly select kart image.
function setKartsImage(imageUrl, playerSource) {
  const kartSource = playerSource.querySelector('.kart');

  let allKarts = config.KARTS_ALL;
  const excludeBikes = document.querySelector('#no-bikes').checked;

  if(excludeBikes) {
    allKarts = removeArrayFromMainArray(allKarts, config.REMOVE_BIKES);
  }

  const kartInt = getRandomItemFromArray(allKarts);

  imageUrl += kartInt + '.png'

  kartSource.src = imageUrl;
  kartSource.dataset.id = kartInt; 
}

// Randomly select tires image.
function setTiresImage(imageUrl, playerSource) {
  const tiresSource = playerSource.querySelector('.tires');
  const tiresInt = getRandomIntInclusive(0, config.SELECTABLE_TIRES);

  imageUrl += tiresInt + '.png'

  tiresSource.src = imageUrl;
  tiresSource.dataset.id = tiresInt; 
}

// Randomly select glider image.
function setGlidersImage(imageUrl, playerSource) {
  const gliderSource = playerSource.querySelector('.glider');
  const gliderInt = getRandomIntInclusive(0, config.SELECTABLE_GLIDERS);

  imageUrl += gliderInt + '.png'

  gliderSource.src = imageUrl;
  gliderSource.dataset.id = gliderInt; 
}

export default randomizePlayerKarts;