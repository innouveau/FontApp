import { ADD_FONT } from "./../../types";
import Font from './Font';

const initialState = {
    all: [],
    // byIds: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_FONT: {
            state.all.push(new Font(action.payload));
            return state;
        }
        default:
            return state;
    }
}
