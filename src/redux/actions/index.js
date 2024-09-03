import ActionTypes from "../actionTypes.js";
import {api} from "../../util/api.js";

export const getGenres = () => (dispatch) => {
    dispatch({type: ActionTypes.GENRE_LOADING})

    api.get("/genre/movie/list", {params: {language: "tr"}})
        .then((res) => dispatch({type: ActionTypes.GENRE_SUCCESS, payload: res.data.genres}))
        .catch((err) => dispatch({type: ActionTypes.GENRE_ERROR, payload: err}))
}

