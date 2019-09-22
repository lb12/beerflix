'use strict';

import { setBeerComment } from './api.js';

const commentEventHandler = () => {
    const commentSection = document.querySelector('.detail-comments-section');
    const sendButton = document.querySelector('.send-comment-button');    
    const commentCounterIcon = document.querySelector('#comment-counter-container');
    
    sendButton.addEventListener('click', async evt => {
        evt.preventDefault();
        const commentText = document.querySelector('.create-comment-textarea');
        const beerId = document.querySelector('#beer-id').value;

        if(commentText.value !== "") {
            await setBeerComment( beerId, commentText.value );
            window.location.reload();
        }
    });

    commentCounterIcon.addEventListener('click', () => {
        scrollToCommentsSection();
    });

    const scrollToCommentsSection = () => {
        window.scrollTo(commentSection.offsetLeft, commentSection.offsetTop);
    };
}

export { commentEventHandler };