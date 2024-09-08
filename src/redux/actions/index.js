import ActionTypes from "../actionTypes.js";
import {api} from "../../util/api.js";

export const getGenres = () => (dispatch) => {
    dispatch({type: ActionTypes.GENRE_LOADING})

    api.get("/genre/movie/list", {params: {language: "tr"}})
        .then((res) => dispatch({type: ActionTypes.GENRE_SUCCESS, payload: res.data.genres}))
        .catch((err) => dispatch({type: ActionTypes.GENRE_ERROR, payload: err}))
}


export const addToFavorite = () => (dispatch) => {

    api.post(`/account/21296481/favorite`, {
        media_type: "movie",
        media_id: 533535,
        favorite: true,
    } )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}
