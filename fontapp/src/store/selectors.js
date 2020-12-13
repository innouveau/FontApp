export const getAllFonts = store => store.fonts.all;

export const getFilteredFonts = store => {
    return store.fonts.all.filter(font => {
        return font.category === store.settings.category &&
            font.style === store.settings.style;
    })
};

export const getParameters = store => store.parameters.all;

export const getCurrentCategory = store => store.settings.category;

export const getCurrentStyle = store => store.settings.style;

export const getCurrentParameterValue = (store, parameter) => store.settings[parameter];
