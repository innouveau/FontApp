import { UPDATE_PROPERTY } from "./../../types";

const initialState = {
    category: 'Sans Serif',
    style: 'Normal'
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
