import { ADD_FONT } from "./types";
import { SET_FONT_LOADED } from "./types";
import { ADD_PARAMETER } from "./types";
import { UPDATE_PROPERTY } from "./types";
import { UPDATE_PARAMETER } from "./types";
import { TOGGLE_PARAMETER } from "./types";
import { ADD_BOX } from "./types";
import { UPDATE_BOX } from "./types";
import { SET_BOX_CURRENT } from "./types";

let fontId, boxId;
fontId = 0;
boxId = 0;

export const addBox = content => ({
    type: ADD_BOX,
    payload: {
        ...content,
        id: ++boxId
    }
});

export const updateBox = content => ({
    type: UPDATE_BOX,
    payload: content
});

export const setBoxCurrent = content => ({
    type: SET_BOX_CURRENT,
    payload: content
});

export const addFont = content => ({
    type: ADD_FONT,
    payload: {
        id: ++fontId,
        content
    }
});

export const setFontLoaded = content => ({
    type: SET_FONT_LOADED,
    payload: content
});

export const addParameter = content => ({
    type: ADD_PARAMETER,
    payload: content
});

export const updateParameter = content => ({
    type: UPDATE_PARAMETER,
    payload: content
});

export const toggleParameter = content => ({
    type: TOGGLE_PARAMETER,
    payload: content
});



export const updateProperty = content => ({
    type: UPDATE_PROPERTY,
    payload: content
});

