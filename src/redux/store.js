import {applyMiddleware, combineReducers, createStore} from "redux";
import genreReducer from "./reducers/genreReducer.js";
import {thunk} from "redux-thunk";


const rootReducer = combineReducers({
    genres: genreReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

