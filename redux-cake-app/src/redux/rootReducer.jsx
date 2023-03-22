import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import creamReducer from "./icecream/creamReducers";
import userReducer from "./user/userReducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:creamReducer,
    user:userReducer
})
export default rootReducer