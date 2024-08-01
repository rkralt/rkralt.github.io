import config from "../data/config.js";
import randomizePlayerKarts from "./functions/randomizeKarts.js";
import randomizeTrack from "./functions/randomizeTrack.js";
import randomizeItems from "./functions/randomizeItems.js";
import { resetSettings } from "./functions/ux.js";

// Randomize once on startup.
randomizePlayerKarts();
randomizeTrack();
randomizeItems();

// Reset settings once on startup.
resetSettings();

// Set max player count based on config setting.
const playerCountInput = document.querySelector('#player-count');
playerCountInput.max = config.SETTING_MAX_PLAYER_COUNT;

// Set max item count based on config setting.
const minItemInput = document.querySelector('#min-items');
minItemInput.max = config.SETTING_MAX_ITEMS_COUNT;
const maxItemInput = document.querySelector('#max-items');
maxItemInput.max = config.SETTING_MAX_ITEMS_COUNT;