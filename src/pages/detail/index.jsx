import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {api} from "../../util/api.js";
import Error from "../../components/error/Error.jsx";
import Loading from "../../components/loading/Loading.jsx";
import Banner from "./Banner.jsx";
import Content from "./Content.jsx";
import ActorList from "./ActorList.jsx";
import VideoList from "./VideoList.jsx";
import Button from "./Button.jsx";
import {IoChevronBack} from "react-icons/io5";

const Detail = () => {

    const navigate = useNavigate()
    const {id} = useParams()

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

    if (error) return <Error info={error} />;
    if (!movie) return <Loading />;

    return (
        <div className='mt-5'>

            <div className='mb-5 flex justify-between'>
                <button onClick={() => navigate(-1)}
                        className='bg-gray-600 flex items-center  gap-1 py-1 px-3 pe-4 rounded hover:bg-gray-500 transition'>
                    <IoChevronBack className='text-xl'/> Geri
                </button>

                <Button movie={movie}/>
            </div>


            <Banner movie={movie}/>

            <Content movie={movie}/>

            <ActorList actors={movie.credits.cast}/>

            <VideoList videos={movie.videos.results}/>

        </div>
    );
};

export default Detail;
