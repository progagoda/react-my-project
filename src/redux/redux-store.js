import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import projectReducer from "./project-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    project: projectReducer,
    users: userReducer,
    auth: authReducer
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;
