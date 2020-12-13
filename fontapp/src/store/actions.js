import { ADD_FONT } from "./types";
import { ADD_PARAMETER } from "./types";
import { UPDATE_PROPERTY } from "./types";

let fontId;
fontId = 0;

export const addFont = content => ({
    type: ADD_FONT,
    payload: {
        id: ++fontId,
        content
    }
});

export const addParameter = content => ({
    type: ADD_PARAMETER,
    payload: {
        content
    }
});

export const updateProperty = content => ({
    type: UPDATE_PROPERTY,
    payload: content
});

