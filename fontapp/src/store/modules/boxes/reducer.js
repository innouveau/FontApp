import { ADD_BOX, UPDATE_BOX, SET_BOX_CURRENT } from "./../../types";
import Box from './Box';

const initialState = {
    all: [],
    current_id: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_BOX: {
            return {
                ...state,
                all: state.all.concat(new Box(action.payload))
            }
        }
        case SET_BOX_CURRENT: {
            return {
                ...state,
                current_id: action.payload
            }
        }
        case UPDATE_BOX: {
            let all = state.all.map(item => {
                if (item.id === action.payload.id) {
                    let i = {...item};
                    i[action.payload.property] = action.payload.value;
                    return i
                } else {
                    return item;
                }
            });
            return {
                ...state,
                all
            }
        }
        default:
            return state;
    }
}
