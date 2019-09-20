'use strict';

// const handleElementToggled = toggle(element);

// handleElementToggled('classToRemove', 'classToAdd');
// toggle(element)('classToRemove', 'classToAdd');
export const toggle = element => (removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
};

export const scrollTop = () => window.scrollTo(0, 0);


// Showing-Hiding elements
 // Home page
const mainHeaderPicture = document.querySelector('.main-header picture');
const filterSection = document.querySelector('section#filter-section');
const filterContainer = document.querySelector('div#filter-container');
const beersSection = document.querySelector('section#beers-section');
// Detail page
const detailBeerSection = document.querySelector('section.detail-beer-section');
const detailCommentsSection = document.querySelector('section.detail-comments-section');

// Home page functions
export const showHomePageElements = () => { showMainHeaderPicture(); showFilterSection(); showBeersSection(); };
export const hideHomePageElements = () => { hideMainHeaderPicture(); hideFilterSection(); hideBeersSection(); };
export const showMainHeaderPicture = () => mainHeaderPicture.style.display = 'block';
export const hideMainHeaderPicture = () => mainHeaderPicture.style.display = 'none';
export const showFilterSection = () => filterSection.style.display = 'flex';
export const hideFilterSection = () => filterSection.style.display = 'none';
export const showBeersSection = () => beersSection.style.display = 'block';
export const hideBeersSection = () => beersSection.style.display = 'none';

// Detail page functions
export const showDetailPageElements = () => { showDetailBeerSection(); showCommentsSection(); };
export const hideDetailPageElements = () => { hideDetailBeerSection(); hideCommentsSection(); };
export const showDetailBeerSection = () => detailBeerSection.style.display = 'block';
export const hideDetailBeerSection = () => detailBeerSection.style.display = 'none';
export const showCommentsSection = () => detailCommentsSection.style.display = 'block';
export const hideCommentsSection = () => detailCommentsSection.style.display = 'none';
