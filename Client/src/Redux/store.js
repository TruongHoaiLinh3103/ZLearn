import { combineReducers } from "redux";
import rootNumber from "./reducer/rootNumber";
import rootTodo from "./reducer/rootTodo";
import rootUser from "./reducer/rootUser";

const rootReducer = combineReducers({
    numberState: rootNumber,
    todoState: rootTodo,
    userState: rootUser,

})

export default rootReducer;