'use strict';

const API_KEY = 'F40XM1J-XYP4CV9-HC3RZRB-BJMWWQN';
const API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/';

const beersAPIEndpoint = `${API_URL}beers`;

const getBeers = async (beerName) => {
    const url = beerName ? `${beersAPIEndpoint}&search=${beerName}` : beersAPIEndpoint;
    let beers = [];
    await axios(
    { 
        method: 'GET', 
        url: url, 
        headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
        }
    }).then( response => {
        beers = response.data.beers;
    }).catch(err => {
        console.error(err);        
    });
    return beers;
}

const getBeerDetail = async id => {
    const url = `${beersAPIEndpoint}/${id}`;
    let beer;
    await axios(
    { 
        method: 'GET', 
        url: url, 
        headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
        }
    }).then( response => {
        beer = response.data.beer;
    }).catch(err => {
        console.error(err);        
    });
    return beer;
};
/*,
setBeerLike: async id => {
    try {
        
    } catch (error) {
        console.error(error.message);
        throw error;
    }
},
setBeerComment: async (id, comment) => {
    try {
        
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}
 */

export { getBeers, getBeerDetail };