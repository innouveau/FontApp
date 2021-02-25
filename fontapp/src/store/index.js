import { writable, derived } from 'svelte/store';



export const parameters = writable([]);
export const fonts = writable([]);
export const boxes = writable([]);
export const currentBox_id = writable(null);
export const search = writable('');

// tools
export const currentCategory = writable('Sans Serif');



// derived (selectors in React)

export const getFilteredFonts = derived(
    [currentCategory, fonts],
    ([currentCategory, fonts]) => {
        return fonts.filter(font => {
            return font.category === currentCategory
        })
    }
);

export const getBestMatch = derived(
    [getFilteredFonts, parameters],
    ([getFilteredFonts, parameters]) => {
        let  match, activeParameters;
        match = {};
        activeParameters = parameters.filter(p => p.active);
        for (let font of getFilteredFonts) {
            let score = 0;
            for (let parameter of activeParameters) {
                let diff;
                diff = Math.abs(parameter.value - font[parameter.key]);
                score += diff;
            }
            if (!match.font || score < match.score) {
                match.font = font;
                match.score = score;
            }
        }
        return match.font;
    }
);

export const getFontsBySearch = derived(
    [fonts, search],
    ([fonts, search]) => {
        if (search.length === 0) {
            return [];
        } else {
            return fonts.filter(font => {
                return font.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
        }
    }
);

export const getCurrentFont = derived(
    [currentBox_id, boxes, fonts],
    ([currentBox_id, boxes, fonts]) => {
        if (!currentBox_id) {
            return null;
        } else {
            let currentBox = boxes.find(box => box.id === currentBox_id);
            return fonts.find(font => font.id === currentBox.font_id)
        }
    }
);

export const currentBox = derived(
    [currentBox_id, boxes],
    ([currentBox_id, boxes]) => {
        let box = boxes.find(box => box.id === currentBox_id);
        return box ? box : null; // prevent returning undefined
    }
);
