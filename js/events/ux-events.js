import { toggleSettingsMenu } from '../functions/ux.js';

// Toggle menu when clicked anywhere on the screen.
window.addEventListener('click', (e) => {
  toggleSettingsMenu(e);
});

// When clicking inside of the menu, don't close it.
const settingsMenu = document.querySelector('.settings-menu');
settingsMenu.addEventListener('click', (e) => {
  e.stopPropagation();
})