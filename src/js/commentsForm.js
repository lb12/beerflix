'use strict';

const commentEventHandler = () => {
    const commentSection = document.querySelector('.detail-comments-section');
    const sendButton = document.querySelector('.send-comment-button');
    const commentText = document.querySelector('.create-comment-textarea');
    const commentCounterIcon = document.querySelector('#comment-counter-container');

    sendButton.addEventListener('click', () => {
        if(commentText.value !== "")
            console.log(commentText.value);
    });

    commentCounterIcon.addEventListener('click', () => {
        window.scrollTo(commentSection.offsetLeft, commentSection.offsetTop);        
    });
}


export { commentEventHandler };