'use strict';

const beerTemplate = ({ id, image, name, price, firstBrewed, brewerTips }) => `
    <article class="beer-card">
        <a href="/detail/${id}">
            <img src="${image}" alt="beer-img-${id}" class="beer-content-img" />
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
                <p class="beer-tips">${brewerTips}</p>
            </div>
        </a>
    </article>
`;

const beers = [
    {
        id: 1,
        image: 'https://images.punkapi.com/v2/12.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '10/2014',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'
    }, 
    {
        id: 2,
        image: 'https://images.punkapi.com/v2/8.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '12/2008',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'     
    }, 
    {
        id: 3,
        image: 'https://images.punkapi.com/v2/2.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '10/2009',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'
        
    }, 
    {
        id: 4,
        image: 'https://images.punkapi.com/v2/7.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '1/2003',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'        
    }, 
    {
        id: 5,
        image: 'https://images.punkapi.com/v2/10.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '08/2019',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'        
    }, 
    {
        id: 6,
        image: 'https://images.punkapi.com/v2/12.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '05/2004',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'        
    }, 
    {
        id: 7,
        image: 'https://images.punkapi.com/v2/9.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '5/2006',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'
    },
    {
        id: 8,
        image: 'https://images.punkapi.com/v2/8.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '03/2011',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'
    },
    {
        id: 9,
        image: 'https://images.punkapi.com/v2/7.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '02/2010',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'
    },
    {
        id: 10,
        image: 'https://images.punkapi.com/v2/6.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '09/2018',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'
    },
    {
        id: 11,
        image: 'https://images.punkapi.com/v2/2.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '12/2017',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'
    },
    {
        id: 12,
        image: 'https://images.punkapi.com/v2/5.png',
        name: 'Avery Brown Dredge',
        price: 5,
        firstBrewed: '03/2016',
        brewerTips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.'
    }
];

const renderBeersDOM = async (filters) => {
    try {
        console.log('Call here loader starter');
        const beersSection = document.querySelector('.beers-container');
        const _beers = beers; // TODO: await apiMethod();

        renderBeers(beersSection, _beers, filters);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Call here loader ender');
    }
};

const renderBeers = ( element, beers, filters ) => {
    console.log(beers);
    const htmlBeers = beers.slice(0, 10).map((beer, index) => {
        return beerTemplate( { ...beer } );
    }).join('');

    element.innerHTML = ` ${htmlBeers} `;
};

export { renderBeersDOM };

