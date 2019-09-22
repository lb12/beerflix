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

formToggleButton.addEventListener('click', () => {
    const classRemoved = filtersForm.classList.contains('hide') ? 'hide' : 'show';
    const classAdded = filtersForm.classList.contains('hide') ? 'show' : 'hide';

    handleFiltersForm(classRemoved, classAdded);
});


formSubmitBtn.addEventListener('click', evt => {
    evt.preventDefault();
    console.log('Filtro !');
    const filters = {
        name: document.querySelector('#name-filter').value,
        date: document.querySelector('#date-filter').value // YYYY-MM-DD
    };

    if(filters.date){
        const split =  filters.date.split('-');
        filters.date = `${split[1]}/${split[0]}`; // MM/YYYY
        console.log(filters.date);
    }

    
    renderBeersDOM(filters);
});