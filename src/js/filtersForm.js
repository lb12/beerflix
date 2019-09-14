'use strict';

import { toggle } from './ui.js';

// elements
const formToggleButton = document.querySelector('.filters-toggle');
const filtersForm = document.querySelector('.filter-container');

// elements handlers
const handleFiltersForm = toggle(filtersForm);

formToggleButton.addEventListener('click', () => {
    const classRemoved = filtersForm.classList.contains('hide') ? 'hide' : 'show';
    const classAdded = filtersForm.classList.contains('hide') ? 'show' : 'hide';

    handleFiltersForm(classRemoved, classAdded);
});