'use strict';

import { commentEventHandler } from './commentsForm.js';

const commentTemplate = ({ dateComment, comment }) => `
    <div class="comment-section">
        <span class="comment-date">${dateComment}</span>
        <p class="comment-text">${comment}</p>
        <div class="separator-line"></div>
    </div>
`;

const renderComments = comments => {
    if(comments) {
        const selector = document.querySelector('.detail-comments-history');
        selector.innerHTML = comments.map(commentTemplate).join('');
    }
    commentEventHandler();
};

export { renderComments };