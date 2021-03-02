import { combineReducers } from "redux";
import settings from "./settings/reducer";
import fonts from "./fonts/reducer";
import parameters from "./parameters/reducer";
import boxes from "./boxes/reducer";
import favorites from "./favorites/reducer";

export default combineReducers({
    settings,
    fonts,
    parameters,
    boxes,
    favorites
});