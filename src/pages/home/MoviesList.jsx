import React, {useEffect, useState} from 'react';
import {api} from "../../util/api.js";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {baseImageUrl} from "../../util/constans/constan.js";
import {Link} from "react-router-dom";

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

    return (
        <div className='my-10'>
            <h1 className="text-2xl">{genre.name}</h1>

            <Splide options={{
                autoWidth: true,
                pagination: false,
                gap:"20px",
                type : "loop",
                autoplay: true,
                infinite: true,
                rewind: true,
                interval:2000
            }}>
                {movies?.map((movie, key) => (
                    <SplideSlide key={key} >
                        <Link to={`/movie/${movie.id}`}>

                        <img className="max-w-[300px] hover:scale-105 h-full rounded-md cursor-pointer" src={baseImageUrl + movie.poster_path} alt={movie.title} />
                        </Link>

                    </SplideSlide>
                    ))}
            </Splide>
        </div>
    );
};

export default MoviesList;
