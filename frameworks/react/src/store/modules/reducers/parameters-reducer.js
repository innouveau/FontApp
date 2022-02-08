import { ADD_PARAMETER, UPDATE_PARAMETER, TOGGLE_PARAMETER } from "./../../types";
import Parameter from 'shared/classes/Parameter';

const initialState = {
    all: [],
};

export default function parameterReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PARAMETER: {
            let newItem = new Parameter(action.payload);
            return {
                ...state,
                all: [...state.all, newItem]

            }
        }
        case UPDATE_PARAMETER: {
            let newSet = [];
            for (let item of state.all) {
                let newItem;
                if (item.id === action.payload.parameter.id) {
                    newItem = {...item, value: action.payload.value};
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
        case TOGGLE_PARAMETER: {
            let newSet = [];
            for (let item of state.all) {
                let newItem;
                if (item.id === action.payload.id) {
                    newItem = {...item, active: !item.active};
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
