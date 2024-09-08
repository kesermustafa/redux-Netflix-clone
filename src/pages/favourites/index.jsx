import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {baseImageUrl} from "../../util/constans/constan.js";
import Loading from "../../components/loading/Loading.jsx";
import Error from "../../components/error/Error.jsx";
import RatingCircle from "../../components/RatingCircle/RatingCircle.jsx";
import {Link} from "react-router-dom";
import { MdBookmarkRemove } from "react-icons/md";
import {toggleFavorite} from "../../redux/actions/index.js";

const Favourites = () => {

    const {isLoading, error, favorites} = useSelector((state) => state.favorites);

    const dispatch = useDispatch()

    if (isLoading) return <Loading/>
    if (error) return <Error info={error}/>

    const handleDelete = (movie)=>{
        dispatch(toggleFavorite(movie, false))
    }
    return (
        <div className='mt-5'>
            <h1 className='text-xl md:text-2xl font-semibold my-5'>Izleme Listesi</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5'>
                {
                    favorites.map((item, key) => (
                        <div  key={key}>
                            <div key={key} className=" relative rounded-md border border-gray-700 overflow-hidden">

                                <button onClick={()=>handleDelete(item)} className='absolute top-2 left-3 px-2 py-2 bg-amber-400 rounded-full border-4 border-gray-100'> <MdBookmarkRemove className='text-red-700 text-2xl' /></button>

                                <Link to={`/movie/${item.id}`}>
                                    <img className="w-full" src={baseImageUrl + item.poster_path}
                                         alt="Sunset in the mountains"/>
                                </Link>

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
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Favourites;
