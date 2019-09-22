'use strict';

import { setBeerLike } from './api.js';

let likeCounterDiv;
let likeCounterNum;

const createLikesListener = beerId => {
    likeCounterDiv = document.querySelector('#likes-counter-container');
    likeCounterNum = document.querySelector('#detail-social-like-counter');
    
    likeCounterDiv.addEventListener('click', async evt => {
        evt.preventDefault();  
        setBeerLike( beerId ).then( success => {
            if(!success) // If error, we substract the like added before
            updateLikeCounter(success);
        } );
        updateLikeCounter(true); // Show first the like, to improve UX
    } );
}

const updateLikeCounter = success => {
    const addOrSubstract = success ? 1 : -1;
    likeCounterNum.innerText = Number.parseInt(likeCounterNum.innerText) + addOrSubstract;   
};

export { createLikesListener };