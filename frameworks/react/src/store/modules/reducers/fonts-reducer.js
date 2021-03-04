import {ADD_FONT, SET_FONT_LOADED, SET_FONT_SEARCH} from "./../../types";
import Font from './../../../../../../shared/classes/Font';

const initialState = {
    all: [],
    search: ''
};

export default function fontReducer(state = initialState, action) {
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
                if (item.id === action.payload.id) {
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
        case SET_FONT_SEARCH: {
            return {
                ...state,
                search: action.payload
            }
        }
        default:
            return state;
    }
}
