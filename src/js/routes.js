'use strict';
import { showHomePage, showDetailPage, scrollTop } from "./ui.js";
import { renderBeersDOM } from "./beers.js";
import { renderDetail } from "./detail.js";
import { createLikesListener } from "./likes.js";


page('/', () => {
    const filters = JSON.parse(localStorage.getItem('filters'));
    showHomePage();
    renderBeersDOM(filters);
    scrollTop();
});

page('/detail/:id', async context => {
    const { params: { id } } = context;
    await renderDetail(id);
    showDetailPage();
    createLikesListener(id);
    scrollTop();
});

page();
