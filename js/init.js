import { getSettings, loadSettings, randomizeAll } from "./functions/localStorage.js";

// Reset settings once on startup.
const settings = getSettings(true);
loadSettings(settings);

// Randomize once on startup.
randomizeAll();