export const getAllFonts = store => store.fonts.all;

export const getBoxes = store => {
    return store.boxes.all;
};

export const getCurrentBox = store => {
    return store.boxes.all.find(box => box.id === store.boxes.current_id);
};

export const getFilteredFonts = store => {
    return store.fonts.all.filter(font => {
        return font.category === store.settings.category &&
            font.style === store.settings.style &&
            font.source === 'google';
    })
};

export const getMatch = store => {
    let fonts, match, parameters;
    match = {};
    fonts = getFilteredFonts(store);
    parameters = store.parameters.all.filter(p => p.active);
    for (let font of fonts) {
        let score = 0;
        for (let parameter of parameters) {
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
};

export const getFontById = (store, font_id) => {
    return store.fonts.all.find(font => font.id === font_id);
};

export const getParameters = store => store.parameters.all;

export const getCurrentCategory = store => store.settings.category;

export const getCurrentStyle = store => store.settings.style;

export const getCurrentString = store => store.settings.string;

export const getCurrentFontSize = store => store.settings.fontSize;



export const getCurrentParameterValue = (store, parameter) => store.settings[parameter];
