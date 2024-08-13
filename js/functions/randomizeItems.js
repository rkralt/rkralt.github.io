import config from '../../data/config.js';
import { getRandomIntInclusive, getRandomItemFromArray } from './helpers.js';

function randomizeItems() {
  const allItemsToHide = document.querySelectorAll('.item');

  // Hide all items.
  allItemsToHide.forEach(item => {
    item.dataset.show = "false";
  })

  // Choose amount of items to show, between min and max.
  let minItems = document.querySelector('#min-items').value;
  let maxItems = document.querySelector('#max-items').value;

  let itemAmount = getRandomIntInclusive(minItems, maxItems);

  const allItems = Array.from(config.ITEMS_ALL);
  const arraySorted = [];

  // Choose random items from array.
  while(itemAmount > 0) {
    const itemInt = getRandomItemFromArray(allItems, true);
    arraySorted.push(itemInt);

    itemAmount--;
  }

  // Sort items from smallest to biggest number.
  arraySorted.sort((a, b) => a - b);

  // Show item images.
  arraySorted.forEach(itemInt => {
    const nextItem = document.querySelector('.item[data-show="false"]');
    nextItem.dataset.show = "true";
    nextItem.src = config.BASE_URL_ITEMS + itemInt + '.png';
  })
}

export default randomizeItems;