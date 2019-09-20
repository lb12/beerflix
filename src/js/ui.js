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
const homeMainInfoPage = document.querySelector('section#home-main-info-page');
// Detail page
const detailMainInfoPage = document.querySelector('section#detail-main-info-page');

// Home page functions
export const showHomePage = () => { hideDetailPageElements(); showHomePageElements(); };
export const showHomePageElements = () => { showMainHeaderPicture(); showHomeMainInfoPage(); };
export const hideHomePageElements = () => { hideMainHeaderPicture(); hideHomeMainInfoPage(); };
export const showMainHeaderPicture = () => mainHeaderPicture.style.display = 'block';
export const hideMainHeaderPicture = () => mainHeaderPicture.style.display = 'none';
export const showHomeMainInfoPage = () => homeMainInfoPage.style.display = 'block';
export const hideHomeMainInfoPage = () => homeMainInfoPage.style.display = 'none';

// Detail page functions
export const showDetailPage = () => { hideHomePageElements(); showDetailPageElements(); };
export const showDetailPageElements = () => detailMainInfoPage.style.display = 'block';
export const hideDetailPageElements = () => detailMainInfoPage.style.display = 'none';
