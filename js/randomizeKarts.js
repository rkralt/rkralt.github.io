// Config
import config from './config.js';
import {getRandomIntInclusive, getRandomItemFromArray, removeArrayFromMainArray} from './helpers.js';

// Randomize player karts.
function randomizePlayerKarts() {
  const playerCount = document.querySelector('#player-count').value;
  const player1 = document.querySelector('.player1');
  const player2 = document.querySelector('.player2');
  const player3 = document.querySelector('.player3');
  const player4 = document.querySelector('.player4');
  
  const player1StatsOverlay = player1.querySelector('.stats-overlay');
  player1StatsOverlay.dataset.show = 'false';

  // Hide all but player 1.
  player2.classList.add('hidden');
  player3.classList.add('hidden');
  player4.classList.add('hidden');

  // Set images for player 1.
  setCharacterImage(config.BASE_URL_CHARACTERS, player1);
  setKartsImage(config.BASE_URL_KARTS, player1);
  setTiresImage(config.BASE_URL_TIRES, player1);
  setGlidersImage(config.BASE_URL_GLIDERS, player1);

  // Show player 2 based on setting.
  if(playerCount !== null && playerCount > 1) {
    player2.classList.remove('hidden');

    // Hide stats overlay.
    const player2StatsOverlay = player2.querySelector('.stats-overlay');
    player2StatsOverlay.dataset.show = 'false';

    // Set images for player 2.
    setCharacterImage(config.BASE_URL_CHARACTERS, player2);
    setKartsImage(config.BASE_URL_KARTS, player2);
    setTiresImage(config.BASE_URL_TIRES, player2);
    setGlidersImage(config.BASE_URL_GLIDERS, player2);
  }

  // Show player 3 based on setting.
  if(playerCount !== null && playerCount > 2) {
    player3.classList.remove('hidden');

    // Hide stats overlay.
    const player3StatsOverlay = player3.querySelector('.stats-overlay');
    player3StatsOverlay.dataset.show = 'false';

    // Set images for player 3.
    setCharacterImage(config.BASE_URL_CHARACTERS, player3);
    setKartsImage(config.BASE_URL_KARTS, player3);
    setTiresImage(config.BASE_URL_TIRES, player3);
    setGlidersImage(config.BASE_URL_GLIDERS, player3);
  }

  // Show player 4 based on setting.
  if(playerCount !== null && playerCount > 3) {
    player4.classList.remove('hidden');

    // Hide stats overlay.
    const player4StatsOverlay = player4.querySelector('.stats-overlay');
    player4StatsOverlay.dataset.show = 'false';

    // Set images for player 4.
    setCharacterImage(config.BASE_URL_CHARACTERS, player4);
    setKartsImage(config.BASE_URL_KARTS, player4);
    setTiresImage(config.BASE_URL_TIRES, player4);
    setGlidersImage(config.BASE_URL_GLIDERS, player4);
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