'use strict';

// const handleElementToggled = toggle(element);

// handleElementToggled('classToRemove', 'classToAdd');
// toggle(element)('classToRemove', 'classToAdd');
export const toggle = element => (removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
};