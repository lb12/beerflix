'use strict';

import { toggle } from './ui.js';
import { renderBeersDOM } from './beers.js';

// elements
// toggle
const formToggleButton = document.querySelector('.filters-toggle');
const filtersForm = document.querySelector('.filter-container');
// submit-btn
const formSubmitBtn = document.querySelector('#submit-filters-btn');

// elements handlers
const handleFiltersForm = toggle(filtersForm);


/**
 * Show/Hide filter form
 */
formToggleButton.addEventListener('click', () => {
    const classRemoved = filtersForm.classList.contains('hide') ? 'hide' : 'show';
    const classAdded = filtersForm.classList.contains('hide') ? 'show' : 'hide';

    handleFiltersForm(classRemoved, classAdded);
});


/**
 * Handler that submits the form filter
 */
formSubmitBtn.addEventListener('click', evt => {
    evt.preventDefault();

    const filters = {
        name: document.querySelector('#name-filter').value,
        date: document.querySelector('#date-filter').value // YYYY-MM-DD
    };

    localStorage.setItem('filters', JSON.stringify(filters));

    if (filters.date) {
        const split =  filters.date.split('-');
        filters.date = `${split[1]}/${split[0]}`; // MM/YYYY
    }
    
    renderBeersDOM(filters);
});

/**
 * Loads filters info from local storage if exists
 */
const loadFiltersInfo = () => {
    if (localStorage.getItem('filters') === null)
        return;

    const filters = JSON.parse(localStorage.getItem('filters'));

    document.querySelector('#name-filter').value = filters.name;
    document.querySelector('#date-filter').value = filters.date;    
};

loadFiltersInfo();