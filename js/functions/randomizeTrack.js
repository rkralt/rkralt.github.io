import config from '../../data/config.js';
import {getRandomItemFromArray, removeArrayFromMainArray} from './helpers.js';

// Randomly select track.
function randomizeTrack() {
  let allTracks = config.TRACKS_ALL;
  const trackSource = document.querySelector('.track');
  const excludeTourTracks = document.querySelector('#no-tour-tracks').checked;
  const excludeRetroTracks = document.querySelector('#no-retro-tracks').checked;
  const excludeNitroTracks = document.querySelector('#no-nitro-tracks').checked;
  const noTrackTwice = document.querySelector('#no-track-twice').checked;

  // Prevent impossible settings combination (should already be impossible but just in case something goes wrong).
  if(excludeRetroTracks && excludeNitroTracks) {
    console.error('ERROR 1: invalid settings combination!');
    alert('This settings combination is not possible. Reverted settings.');

    excludeRetroTracks.checked = false;
    excludeNitroTracks.checked = false;
  }

  // Remove tour tracks from list if checkbox is checked.
  if(excludeTourTracks) {
    allTracks = removeArrayFromMainArray(allTracks, config.TRACKS_TO_REMOVE_TOUR);
  }

  // Remove retro tracks from list if checkbox is checked.
  if(excludeRetroTracks) {
    allTracks = removeArrayFromMainArray(allTracks, config.TRACKS_TO_REMOVE_RETRO);
  }

  // Remove nitro tracks from list if checkbox is checked.
  if(excludeNitroTracks) {
    allTracks = removeArrayFromMainArray(allTracks, config.TRACKS_TO_REMOVE_NITRO);
  }

  // No track twice
  if(noTrackTwice) {
    if(trackSource.dataset.id !== undefined) {
      const twiceArray = [parseInt(trackSource.dataset.id)];
      allTracks = removeArrayFromMainArray(allTracks, twiceArray);
    }
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

  // Set track ID to image for later use.
  track.dataset.id = trackInt;
}

export default randomizeTrack;