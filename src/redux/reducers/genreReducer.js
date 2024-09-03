import ActionTypes from "../actionTypes.js";

const initialState = {
    genre:[],
    isLoading: true,
    error: null,
}

const genreReducers = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.GENRE_LOADING:
            return {...state, isLoading: true};

        case ActionTypes.GENRE_SUCCESS:
            return {...state, isLoading: false, genre: action.payload, error: null};

        case ActionTypes.GENRE_ERROR:
            return {...state, isLoading: false, error: action.payload};

        default:
            return state
    }
}

export default genreReducers;