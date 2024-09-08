import {applyMiddleware, combineReducers, createStore} from "redux";
import genreReducer from "./reducers/genreReducer.js";
import {thunk} from "redux-thunk";
import favoritesReducer from "./reducers/favoritesReducer.js";


const rootReducer = combineReducers({
    genres: genreReducer,
    favorites: favoritesReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

