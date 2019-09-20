'use strict';
import { showHomePageElements, hideHomePageElements, showDetailPageElements, hideDetailPageElements, scrollTop } from "./ui.js";
import { renderBeersDOM } from "./beers.js";
import { renderDetail } from "./detail.js";


page('/', () => {
    console.log('Home page');
    hideDetailPageElements();
    showHomePageElements();
    // TODO: Get filters
    renderBeersDOM(/* filters */);
    scrollTop();
});

page('/detail/:id', context => {
    console.log('Detail page');
    const { params: { id } } = context;
    hideHomePageElements();
    showDetailPageElements();
    renderDetail(id);
    scrollTop();
});

page();
