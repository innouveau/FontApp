import { combineReducers } from "redux";
import settings from "./reducers/settings-reducer";
import fonts from "./reducers/fonts-reducer";
import parameters from "./reducers/parameters-reducer";
import boxes from "./reducers/boxes-reducer";
import favorites from "./reducers/favorites-reducer";

export default combineReducers({
    settings,
    fonts,
    parameters,
    boxes,
    favorites
});