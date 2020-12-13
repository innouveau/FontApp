import { combineReducers } from "redux";
import settings from "./settings/reducer";
import fonts from "./fonts/reducer";
import parameters from "./parameters/reducer";

export default combineReducers({
    settings,
    fonts,
    parameters
});