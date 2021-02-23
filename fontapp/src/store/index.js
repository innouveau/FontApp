import { writable, derived } from 'svelte/store';



export const parameters = writable([]);
export const fonts = writable([]);

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