import { applyMiddleware, createStore } from "redux";
import addReducer from '../reducers/add_reducer'
import { combineReducers } from "redux";

const combred = combineReducers(
    {
        newrecord:addReducer,
    }
)

export default store = createStore(combred)

