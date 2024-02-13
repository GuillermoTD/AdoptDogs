import {legacy_createStore as createStore,combineReducers} from "redux"//,applyMiddleware
import counterReducer from "../reducers/counterReduce";
import userReducer from "../reducers/userReducer";
import AuthReducer from "../reducers/AuthReducer";
// import {thunk} from "redux-thunk"

const rootReducer = combineReducers({
    users:userReducer,
    auth:AuthReducer,
    counterReducer
})
const store = createStore(rootReducer)

export default store 



