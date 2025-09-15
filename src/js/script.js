import { setupAccordion } from './_accordion.js';
import { setupSlider } from './_slider.js';
import { setupDropdowns, setupMenuButton } from './_header.js';

document.addEventListener('DOMContentLoaded', () => {
    setupAccordion();
    setupSlider(); 
    setupMenuButton();
    setupDropdowns();
});