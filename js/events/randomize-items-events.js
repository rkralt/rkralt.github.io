import randomizeItems from "../functions/randomizeItems.js";
import { keyEvent } from "../functions/helpers.js";

const randomizeItemsBtn = document.querySelector('#randomize-items');
randomizeItemsBtn.addEventListener('click', randomizeItems);

// Randomize items by pressing i key.
keyEvent('i', randomizeItems);