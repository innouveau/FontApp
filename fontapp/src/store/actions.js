import { ADD_FONT } from "./types";
import { UPDATE_PROPERTY } from "./types";

let fontId = 0;

export const addFont = content => ({
    type: ADD_FONT,
    payload: {
        id: ++fontId,
        content
    }
});

export const updateProperty = content => ({
    type: UPDATE_PROPERTY,
    payload: content
});

