import { ADD_PARAMETER } from "./../../types";
import Parameter from './Parameter';

const initialState = {
    all: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PARAMETER: {
            let newItem = new Parameter(action.payload.content);
            return {
                ...state,
                all: [...state.all, newItem]

            }
        }
        default:
            return state;
        }
}
