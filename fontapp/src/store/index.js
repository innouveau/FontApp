import { createStore } from "redux";
import rootReducer from "./modules/index";
let store;

if (window.typeOf !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = window.__REDUX_DEVTOOLS_EXTENSION__(rootReducer);
} else {
    console.log('No Redux devtools detected');
    store = createStore(rootReducer);
}

export default store;