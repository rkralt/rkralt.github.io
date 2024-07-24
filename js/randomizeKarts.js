import config from './config.js';
import { getRandomIntInclusive, getRandomItemFromArray, removeArrayFromMainArray } from './helpers.js';

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
    // Should not be possible, but just in case something goes wrong.
    if(player === null) {
      break;
    }

    // Show player.
    player.dataset.show = "true";

    // Set images for player.
    setCharacterImage(player);
    setKartsImage(player);
    setTiresImage(player);
    setGlidersImage(player);

    playerCount--;
  }
}

// Randomly select character image.
function setCharacterImage(playerSource) {
  let variantInt = null;
  const characterSource = playerSource.querySelector('.character');
  let allCharacters = config.CHARACTERS_ALL;

  // No stupid characters.
  const excludeStupidCharacters = document.querySelector('#no-stupid-characters').checked;

  if(excludeStupidCharacters) {
    allCharacters = removeArrayFromMainArray(allCharacters, config.CHARACTERS_REMOVE_STUPID);
  }

  // No character twice.
  const noCharacterTwice = document.querySelector('#no-character-twice').checked;

  if(noCharacterTwice) {
    if(characterSource.dataset.id !== undefined) {
      const twiceArray = [parseInt(characterSource.dataset.id)];
      allCharacters = removeArrayFromMainArray(allCharacters, twiceArray);
    }
  }

  const characterInt = getRandomItemFromArray(allCharacters);
  let imageUrl = config.BASE_URL_CHARACTERS;

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
function setKartsImage(playerSource) {
  const kartSource = playerSource.querySelector('.kart');
  let allKarts = config.KARTS_ALL;

  // No bikes
  const excludeBikes = document.querySelector('#no-bikes').checked;

  if(excludeBikes) {
    allKarts = removeArrayFromMainArray(allKarts, config.REMOVE_BIKES);
  }

  // No kart twice
  const noKartTwice = document.querySelector('#no-kart-twice').checked;

  if(noKartTwice) {
    if(kartSource.dataset.id !== undefined) {
      const twiceArray = [parseInt(kartSource.dataset.id)];
      allKarts = removeArrayFromMainArray(allKarts, twiceArray);
    }
  }

  const kartInt = getRandomItemFromArray(allKarts);

  const imageUrl = config.BASE_URL_KARTS + kartInt + '.png'

  kartSource.src = imageUrl;
  kartSource.dataset.id = kartInt; 
}

// Randomly select tires image.
function setTiresImage(playerSource) {
  const tiresSource = playerSource.querySelector('.tires');
  let allTires = config.TIRES_ALL;

  // No tires twice
  const noTiresTwice = document.querySelector('#no-tires-twice').checked;

  if(noTiresTwice) {
    if(tiresSource.dataset.id !== undefined) {
      const twiceArray = [parseInt(tiresSource.dataset.id)];
      allTires = removeArrayFromMainArray(allTires, twiceArray);
    }
  }

  const tiresInt = getRandomItemFromArray(allTires);

  const imageUrl = config.BASE_URL_TIRES + tiresInt + '.png'

  tiresSource.src = imageUrl;
  tiresSource.dataset.id = tiresInt; 
}

// Randomly select glider image.
function setGlidersImage(playerSource) {
  const gliderSource = playerSource.querySelector('.glider');
  let allGliders = config.GLIDERS_ALL;

  // No tires twice
  const noGliderTwice = document.querySelector('#no-glider-twice').checked;

  if(noGliderTwice) {
    if(gliderSource.dataset.id !== undefined) {
      const twiceArray = [parseInt(gliderSource.dataset.id)];
      allGliders = removeArrayFromMainArray(allGliders, twiceArray);
    }
  }

  const gliderInt = getRandomItemFromArray(allGliders);

  const imageUrl = config.BASE_URL_GLIDERS + gliderInt + '.png'

  gliderSource.src = imageUrl;
  gliderSource.dataset.id = gliderInt; 
}

export default randomizePlayerKarts;