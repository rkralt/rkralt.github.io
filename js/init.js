import config from "../data/config.js";
import { getSettings, loadSettings, randomizeAll } from "./functions/localStorage.js";

// Reset settings once on startup.
const settings = getSettings(true);
loadSettings(settings);

// Randomize once on startup.
randomizeAll();

// Set max player count based on config setting.
const playerCountInput = document.querySelector('#player-count');
playerCountInput.max = config.SETTING_MAX_PLAYER_COUNT;

// Set max item count based on config setting.
const minItemInput = document.querySelector('#min-items');
minItemInput.max = config.SETTING_MAX_ITEMS_COUNT;
const maxItemInput = document.querySelector('#max-items');
maxItemInput.max = config.SETTING_MAX_ITEMS_COUNT;