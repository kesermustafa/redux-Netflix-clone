import ActionTypes from "../actionTypes.js";

const initialState = {
    favorites:[],
    isLoading: true,
    error: null,
}

const favoritesReducers = (state = initialState, action) => {
    switch (action.type) {

        case "X":
            return {...state, isLoading: true};

        case "Y":
            return {...state, isLoading: false, genre: action.payload, error: null};

        case "Z":
            return {...state, isLoading: false, error: action.payload};

        case "A":
            return {...state, isLoading: false, error: action.payload};

        case "B":
            return {...state, isLoading: false, error: action.payload};

        default:
            return state
    }
}

export default favoritesReducers