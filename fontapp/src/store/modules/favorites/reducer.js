import {ADD_FAVORITE} from "./../../types";

const initialState = {
    all: []
};

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE: {
            return {
                ...state,
                all: state.all.concat(action.payload)
            }
        }
        default:
            return state;
    }
}
