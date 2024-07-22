import config from './config.js';
import {getRandomItemFromArray, removeArrayFromMainArray} from './helpers.js';

// Randomly select track.
function randomizeTrack() {
  let allTracks = config.TRACKS_ALL;
  const excludeTourTracks = document.querySelector('#no-tour-tracks').checked;
  const excludeRetroTracks = document.querySelector('#no-retro-tracks').checked;
  const excludeNitroTracks = document.querySelector('#no-nitro-tracks').checked;

  // Prevent impossible settings combination (should already be impossible but just in case something goes wrong).
  if(excludeRetroTracks && excludeNitroTracks) {
    console.error('ERROR 1: invalid settings combination!');
    alert('This settings combination is not possible. Reverted settings.');

    excludeRetroTracks.checked = false;
    excludeNitroTracks.checked = false;
  }

  // Remove tour tracks from list if checkbox is checked.
  if(excludeTourTracks) {
    const noTourTracks = removeArrayFromMainArray(allTracks, config.TRACKS_TO_REMOVE_TOUR);
    allTracks = noTourTracks;
  }

  // Remove retro tracks from list if checkbox is checked.
  if(excludeRetroTracks) {
    allTracks = removeArrayFromMainArray(allTracks, config.TRACKS_TO_REMOVE_RETRO);
  }

  // Remove nitro tracks from list if checkbox is checked.
  if(excludeNitroTracks) {
    allTracks = removeArrayFromMainArray(allTracks, config.TRACKS_TO_REMOVE_NITRO);
  }

  // Get random track number from the array.
  const trackInt = getRandomItemFromArray(allTracks);
  // Get cup int based on track number (divided by 4 because there's 4 tracks per cup).
  const cupInt = Math.floor(trackInt / 4);

  const cup = document.querySelector('.cup');
  const track = document.querySelector('.track');

  // Set image URLs to correct .png file.
  track.src = config.BASE_URL_TRACKS + trackInt + '.png';
  cup.src = config.BASE_URL_CUP + cupInt + '.png';
}

export default randomizeTrack;