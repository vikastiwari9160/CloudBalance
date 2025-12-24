import { combineReducers } from "redux";
import userDataReducer from "./reducer/userDataReducer";
import selectedAccountReducer from "./reducer/selectedAccountReducer";

const rootReducer = combineReducers({
    userReducer : userDataReducer,
    accountReducer: selectedAccountReducer
})

export default rootReducer;