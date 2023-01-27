import { combineReducers } from "redux";
import { heartIconReducer } from "./heartIcon.reducer";

const rootReducer = combineReducers({
    like: heartIconReducer
})

export {rootReducer}