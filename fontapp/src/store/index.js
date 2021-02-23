import { writable, writableArray, derived } from 'svelte/store';
import fonts from 'data/fonts.js';


export const parameters = writable([]);

export const currentCategory = writable('Sans Serif');

// derived

export const filteredFonts = derived(
    currentCategory,
    $currentCategory => {
        return fonts.filter(font => {
            return font[3] === $currentCategory
        })
    }
);