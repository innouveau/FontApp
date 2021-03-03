import { ADD_BOX, UPDATE_BOX, DELETE_BOX, SET_BOX_CURRENT } from "./../../types";
import Box from './Box';

const initialState = {
    all: [],
    current_id: null
};

export default function boxesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BOX: {
            let box = new Box(action.payload);
            return {
                ...state,
                all: state.all.concat(box),
                current_id: box.id
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
        case DELETE_BOX: {
            return {
                ...state,
                all: state.all.filter(b => b.id !== action.payload)
            }
        }
        default:
            return state;
    }
}
