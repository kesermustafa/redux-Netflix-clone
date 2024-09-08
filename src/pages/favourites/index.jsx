import React from 'react';
import {useSelector} from "react-redux";
import {baseImageUrl} from "../../util/constans/constan.js";
import Loading from "../../components/loading/Loading.jsx";
import Error from "../../components/error/Error.jsx";
import RatingCircle from "../../components/RatingCircle/RatingCircle.jsx";
import {Link} from "react-router-dom";

const Favourites = () => {

    const {isLoading, error, favorites} = useSelector((state) => state.favorites);

    console.log(isLoading, favorites, error);

    if (isLoading) return <Loading/>
    if (error) return <Error info={error}/>

    return (
        <div className='mt-5'>
            <h1 className='text-xl md:text-2xl font-semibold my-5'>Izleme Listesi</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5'>
                {
                    favorites.map((item, key) => (
                        <Link to={`/movie/${item.id}`} key={key}>
                            <div key={key} className=" relative rounded-md border border-gray-700 overflow-hidden">

                                <img className="w-full" src={baseImageUrl + item.poster_path}
                                     alt="Sunset in the mountains"/>
                                <div className="px-4 py-4">
                                    <div
                                        className="font-semibold text-lg mb-2 text-ellipsis line-clamp-1">{item.title}</div>
                                    <p className="text-gray-400 text-sm text-justify text-ellipsis line-clamp-3">
                                        {item.overview}
                                    </p>
                                </div>

                                <div className='absolute top-2 right-2'>
                                    <RatingCircle rating={item.vote_average.toFixed(1)}/>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Favourites;
