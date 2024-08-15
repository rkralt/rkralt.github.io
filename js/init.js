import config from "../data/config.js";
import { getSettings, loadSettings, clearSettings, randomizeAll } from "./functions/localStorage.js";

// Reset settings once on startup.

clearSettings(config.USER_CURRENT_SETTINGS_KEY);
const settings = getSettings();
loadSettings(settings);

// Randomize once on startup.
randomizeAll();
