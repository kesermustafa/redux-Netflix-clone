import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../util/api.js";
import Error from "../../components/error/Error.jsx";
import Loading from "../../components/loading/Loading.jsx";
import Banner from "./Banner.jsx";

const Detail = () => {


    const {id} = useParams()

    console.log(id)


    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)

    const params = {
        append_to_response : 'credits,videos',
        language: "tr",
    }

    useEffect(() => {
        api.get(`/movie/${id}`, {params})
            .then((res) =>
            setMovie(res.data))
            .catch(err => setError(err))
    },[])

    console.log(movie)


    if (error) return <Error info={error} />;
    if (!movie) return <Loading />;

    return (
        <div>
            <Banner movie={movie} />



        </div>
    );
};

export default Detail;
