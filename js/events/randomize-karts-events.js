import randomizePlayerKarts from "../functions/randomizeKarts.js";

// Randomize karts on button click.
const randomizeKartsBtn = document.querySelector('#randomize-karts');
randomizeKartsBtn.addEventListener('click', randomizePlayerKarts);

// Randomize karts by pressing r key.
document.addEventListener('keyup', function(event) {
  if (event.key === 'r' || event.key === 'R') {
    randomizePlayerKarts();
  }
})