import ActionTypes from "../actionTypes.js";

const initialState = {
    favorites:[],
    isLoading: true,
    error: null,
}

const favoritesReducers = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.FAV_LOADING:
            return {...state, isLoading: true};

        case ActionTypes.FAV_ERROR:
            return {...state, isLoading: false, error: action.payload};

        case ActionTypes.FAV_SUCCESS:
            return {...state, isLoading: false, error: null, favorites: action.payload};

        case ActionTypes.ADD_TO_FAVORITE:
            return {...state, favorites: state.favorites.concat(action.payload)};

        case ActionTypes.REMOVE_FAVORITE:
            return {...state, favorites: state.favorites.filter(favorite => favorite.id !== action.payload.id)};

        default:
            return state
    }
}

export default favoritesReducers