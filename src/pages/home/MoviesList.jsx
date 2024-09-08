import React, {useEffect, useState} from 'react';
import {api} from "../../util/api.js";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {baseImageUrl} from "../../util/constans/constan.js";
import {Link} from "react-router-dom";
import Error from "../../components/error/Error.jsx";
import Loading from "../../components/loading/Loading.jsx";
import "../../index.css"
import RatingCircle from "../../components/RatingCircle/RatingCircle.jsx";

const MoviesList = ({genre}) => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null)

    const params = {
        language: "tr",
        with_genres: genre.id,
    }

    useEffect(() => {
        api.get("/discover/movie", {params}).then((res) => {
            setMovies(res.data.results);
        }).catch(err => setError(err));
    }, []);


    if (error) return <Error info={error}/>;
    if (!movies) return <Loading/>;

    return (
        <div className='my-10'>
            <h1 className="text-2xl mb-3 font-semibold">{genre.name}</h1>

            <Splide options={{
                autoWidth: true,
                pagination: false,
                gap: "20px",
                type: "loop",
                autoplay: true,
                infinite: true,
                rewind: true,
                interval: 2500
            }}>
                {movies.map((movie, index) =>  (

                        <SplideSlide key={index} >
                            <div className='relative h-full'>
                                <Link className='overflow-hidden' to={`/movie/${movie.id}`}>
                                    <img className="max-w-[300px] hover:scale-105 h-full rounded-md cursor-pointer"
                                         src={baseImageUrl + movie.poster_path} alt={movie.title}/>
                                </Link>

                                {
                                    movie.vote_average > 0 && <div className='absolute bottom-2 right-2'>
                                        <RatingCircle rating={movie.vote_average.toFixed(1)}/>
                                    </div>
                                }
                            </div>

                        </SplideSlide>
                    )
                )}
            </Splide>
        </div>
    );
};

export default MoviesList;
