import randomizeItems from "../functions/randomizeItems.js";

const randomizeItemsBtn = document.querySelector('#randomize-items');
randomizeItemsBtn.addEventListener('click', randomizeItems);

// Randomize items by pressing i key.
document.addEventListener('keyup', function(event) {
  if (event.key === 'i' || event.key === 'I') {
    randomizeItems();
  }
})