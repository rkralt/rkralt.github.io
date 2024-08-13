import randomizeTrack from "../functions/randomizeTrack.js";
import { keyEvent } from "../functions/helpers.js";

// Randomize track on button click.
const randomizeTrackBtn = document.querySelector('#randomize-track');
randomizeTrackBtn.addEventListener('click', randomizeTrack);

keyEvent('t', randomizeTrack);