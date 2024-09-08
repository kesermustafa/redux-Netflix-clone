import React from 'react';
import { MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleFavorite} from "../../redux/actions/index.js";

const Button = ({movie}) => {

    const {favorites} = useSelector((store) => store.favorites);
    const dispatch = useDispatch()

    const isFav = favorites.some((item)=>item.id === movie.id)

    const handleClick = () =>{
        dispatch(toggleFavorite(movie, !isFav))
    }

    return (

            <button onClick={handleClick} className={`${isFav ? "bg-amber-600 hover:bg-amber-500" : "bg-blue-600 hover:bg-blue-500"  }  flex items-center  gap-1 py-1 px-3 rounded  transition`}>
                {
                    isFav ?
                        <> <MdBookmarkRemove className='text-xl'/> Izleme Listesinden Cikar </>
                        :
                        <> <MdBookmarkAdd className='text-xl'/> Izleme Listesine Ekle </>
                }
            </button>

    );
};

export default Button;
