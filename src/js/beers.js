'use strict';

import { getBeers } from './api.js';

const beerTemplate = ({ beerId, image, name, price, firstBrewed, brewersTips }) => `
    <article class="beer-card">
        <a href="/detail/${beerId}">
            <img src="${image}" alt="beer-img-${beerId}" class="beer-content-img" />
            <div class="beer-content-text">
                <h2 class="beer-name">${name}</h2>
                <div class="beer-extra-fields">
                    <div>
                        <img src="/img/icons/money.png" alt="money-icon">
                        <span class="beer-extra-field">${price}</span> 
                    </div>
                    <div>
                        <img src="/img/icons/calendar.png" alt="calendar-icon">
                        <span class="beer-extra-field">${firstBrewed}</span>
                    </div>
                </div>
                <p class="beer-tips">${brewersTips}</p>
            </div>
        </a>
    </article>
`;

const renderBeersDOM = async (filters) => {
    try {
        console.log('Call here loader starter');
        const beersSection = document.querySelector('.beers-container');
        const beers = await getBeers();

        renderBeers(beersSection, beers, filters);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Call here loader ender');
    }
};

const renderBeers = ( element, beers, filters ) => {
    const htmlBeers = beers.slice(0, 10).map((beer, index) => {
        return beerTemplate( { ...beer } );
    }).join('');

    element.innerHTML = ` ${htmlBeers} `;
};

export { renderBeersDOM };

