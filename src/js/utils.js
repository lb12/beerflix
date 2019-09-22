'use strict';

/**
 * Returns a new Date object from 1 of the requested month and year
 * @param {string} stringDate 'MM/YYYY'
 * @returns {Date} '01/MM/YYYY'
 */
export const getDate = stringDate => {
    const split = stringDate.split('/');
    return new Date(`01/${split[0]}/${split[1]}`);
};