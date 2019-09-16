'use strict';

page('/', () => {
    console.log('Home page');
});

page('/detail/:id', context => {
    console.log('Detail page');
    const { params: { id } } = context;
    console.log(id);    
});

page();
