export const getAllFonts = store => store.fonts.all;

export const getFilteredFonts = store => {
    return store.fonts.all.filter(font => {
        return font.category === store.settings.category &&
            font.style === store.settings.style;
    })
};

export const getCurrentCategory = store => store.settings.category;

export const getCurrentStyle = store => store.settings.style;
