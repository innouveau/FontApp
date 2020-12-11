import { combineReducers } from "redux";
import settings from "./settings/reducer";
import fonts from "./fonts/reducer";

export default combineReducers({
    settings,
    fonts
});