import randomizeKarts from "../functions/randomizeKarts.js";
import { keyEvent } from "../functions/helpers.js";

// Randomize karts on button click.
const randomizeKartsBtn = document.querySelector('#randomize-karts');
randomizeKartsBtn.addEventListener('click', randomizeKarts);

// Randomize karts by pressing k key.
keyEvent('k', randomizeKarts);