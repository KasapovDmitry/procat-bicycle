import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { caseReducer } from "./caseReducer";
import { regReducer } from "./regReducer";
import { authReducer } from "./authReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    case: caseReducer,
    reg: regReducer,
    auth: authReducer,
})