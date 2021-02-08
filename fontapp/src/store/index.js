import { createStore } from "redux";
import rootReducer from "./modules/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools( ));

// if (module.hot) {
//     module.hot.accept('./modules', () => {
//         store.replaceReducer(rootReducer);
//     });
// }

export default store;