import React, {useEffect, useState} from 'react';
import {api} from "../../util/api.js";
import Loading from "../../components/loading/Loading.jsx";
import Error from "../../components/error/Error.jsx";
import {baseImageUrl} from "../../util/constans/constan.js";

const Hero = () => {

    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        api.get('/movie/popular')
            .then((res) =>
            {
                const movies = res.data.results;
                const i = Math.floor(Math.random() * movies.length);
                setMovie(movies[i])
            })
            .catch(err => setError(err.message));
    },[])


    if (error) return <Error info={error} />;
    if (!movie) return <Loading />;


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:max-h-[400px] gap-5 max-sm:mt-8 mb-8'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h1 className='text-3xl font-semibold my-2'>{movie?.title}</h1>
                <p className='text-gray-400'>{movie?.overview}</p>

                <p className='flex gap-2'>
                    <span>IMBD</span>
                    <span className='text-amber-600 font-semibold'>{movie.vote_average.toFixed(1)}</span>
                </p>

                <div className='flex gap-5'>
                    <button  className='bg-blue-600 hover:bg-blue-700 transition cursor-pointer w-[120px] py-2 px-3 rounded-sm'>Filmi Izle</button>
                    <button className='bg-red-600 hover:bg-red-700 transition cursor-pointer w-[120px] py-2 px-3 rounded-sm'>Listeye Ekle</button>
                </div>
            </div>

            <div className='grid order'>
                <img className='object-contain drop-shadow-[0_0_90px_rgba(255,255,255,0.3)] my-4 rounded w-full max-h-[300px]' src={ baseImageUrl + movie.backdrop_path} alt=""/>
            </div>
        </div>
    );
};

export default React.memo(Hero);
