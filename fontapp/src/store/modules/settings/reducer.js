import { UPDATE_PROPERTY } from "./../../types";

const initialState = {
    category: 'Sans Serif',
    style: 'Normal',
    boldness: 50,
    serifSize: 50,
    width: 50,
    roundness: 50,
    ascender: 50,
    string: 'The quick brown fox jumps over the lazy dog',
    fontSize: 24,
    // temp
    boxWidth: 500,
    boxHeight: 300,
    boxTop: 0,
    boxLeft: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROPERTY: {
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
        }
        default:
            return state;
    }
}
