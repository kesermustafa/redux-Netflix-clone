import ActionTypes from "../actionTypes.js";
import {api} from "../../util/api.js";

export const getGenres = () => (dispatch) => {
    dispatch({type: ActionTypes.GENRE_LOADING})

    api.get("/genre/movie/list", {params: {language: "tr"}})
        .then((res) => dispatch({type: ActionTypes.GENRE_SUCCESS, payload: res.data.genres}))
        .catch((err) => dispatch({type: ActionTypes.GENRE_ERROR, payload: err}))
}


export const getFavorites = () => (dispatch) => {
    dispatch({type: ActionTypes.FAV_LOADING})
    api.get(`/account/21296481/favorite/movies`)
        .then((res) => dispatch({type: ActionTypes.FAV_SUCCESS, payload: res.data.results}))
        .catch((err) => dispatch({type: ActionTypes.FAV_ERROR, payload: err.message}))
}


//  Fvorilere ekle - cikar
export const toggleFavorite = (movie, isAdd) => (dispatch) => {
    api.post(`/account/21296481/favorite`, {
        media_type: "movie",
        media_id: movie.id,
        favorite: isAdd,
    })
        .then(() => {
            isAdd ?
                dispatch({type: ActionTypes.ADD_TO_FAVORITE, payload: movie}) :
                dispatch({type: ActionTypes.REMOVE_FAVORITE, payload: movie})
        })
        .catch((err) => dispatch({type: ActionTypes.FAV_ERROR, payload: err}))
}
