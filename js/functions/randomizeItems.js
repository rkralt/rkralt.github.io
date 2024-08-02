import config from '../../data/config.js';
import { getRandomIntInclusive, getRandomItemFromArray, removeArrayFromMainArray } from './helpers.js';

function randomizeItems() {
  const allItemsToHide = document.querySelectorAll('.item');

  // Hide all items.
  allItemsToHide.forEach(item => {
    item.dataset.show = "false";
    item.src = "";
  })

  // Choose amount of items to show, between min and max.
  let minItems = document.querySelector('#min-items').value;
  let maxItems = document.querySelector('#max-items').value;

  let itemAmount = getRandomIntInclusive(minItems, maxItems);

  const allItems = Array.from(config.ITEMS_ALL);

  while(itemAmount > 0) {
    const nextItem = document.querySelector('.item[data-show="false"]');
    const itemInt = getRandomItemFromArray(allItems, true);

    nextItem.dataset.show = "true";
    nextItem.src = config.BASE_URL_ITEMS + itemInt + '.png';

    itemAmount--;
  }
}

export default randomizeItems;
