import { applyMiddleware, createStore } from "redux";
import addReducer from '../reducers/add_reducer'
import { combineReducers } from "redux";
import thunk from 'redux-thunk'
import nastrreducer from '../reducers/nastrreducer'
const combred = combineReducers(
    {
        newrecord:addReducer,
        nastr:nastrreducer
    }
)

export default store = createStore(combred,applyMiddleware(thunk))

