'use strict';
import { showHomePage, showDetailPage, scrollTop } from "./ui.js";
import { renderBeersDOM } from "./beers.js";
import { renderDetail } from "./detail.js";


page('/', () => {
    showHomePage();
    // TODO: Get filters
    renderBeersDOM(/* filters */);
    scrollTop();
});

page('/detail/:id', context => {
    const { params: { id } } = context;
    showDetailPage();
    renderDetail(id);
    scrollTop();
});

page();
