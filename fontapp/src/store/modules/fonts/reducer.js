import { ADD_FONT, SET_FONT_LOADED } from "./../../types";
import Font from './Font';

const initialState = {
    all: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_FONT: {
            return {
                ...state,
                all: state.all.concat(new Font(action.payload))
            }
        }
        case SET_FONT_LOADED: {
            let newSet = [];
            for (let item of state.all) {
                let newItem;
                if (item.id === action.payload.font.id) {
                    newItem = {...item, loaded: true};
                } else {
                    newItem = {...item};
                }
                newSet.push(newItem);
            }

            return {
                ...state,
                all: newSet

            }
        }
        default:
            return state;
    }
}
