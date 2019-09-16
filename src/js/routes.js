'use strict';
import { renderBeersDOM } from "./beers.js";


page('/', () => {
    console.log('Home page');
    // TODO: Get filters
    renderBeersDOM(/* filters */);
});

page('/detail/:id', context => {
    console.log('Detail page');
    const { params: { id } } = context;
    console.log(id);    
});

page();
