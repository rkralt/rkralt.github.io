import randomizeTrack from "../functions/randomizeTrack.js";

// Randomize track on button click.
const randomizeTrackBtn = document.querySelector('#randomize-track');
randomizeTrackBtn.addEventListener('click', randomizeTrack);

// Randomize karts by pressing t key.
document.addEventListener('keyup', function(event) {
  if (event.key === 't' || event.key === 'T') {
    randomizeTrack();
  }
})