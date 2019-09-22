'use strict';
import { showHomePage, showDetailPage, scrollTop } from "./ui.js";
import { renderBeersDOM } from "./beers.js";
import { renderDetail } from "./detail.js";
import { createLikesListener } from "./likes.js";


page('/', () => {
    showHomePage();
    // TODO: Get filters
    renderBeersDOM(/* filters */);
    scrollTop();
});

page('/detail/:id', async context => {
    const { params: { id } } = context;
    showDetailPage();
    await renderDetail(id);
    createLikesListener(id);
    scrollTop();
});

page();
