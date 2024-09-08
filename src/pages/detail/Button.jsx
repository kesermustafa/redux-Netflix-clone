import React from 'react';
import { MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleFavorite} from "../../redux/actions/index.js";

const Button = ({movie}) => {

    const {favorites} = useSelector((store) => store.favorites);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const isFav = favorites.some((item)=>item.id === movie.id)

    const handleClick = () =>{
        dispatch(toggleFavorite(movie, !isFav))
    }

    return (
        <div className='mb-5 flex justify-between '>
            <button onClick={()=> navigate(-1)} className='bg-gray-600 flex items-center  gap-1 py-1 px-3 pe-4 rounded hover:bg-gray-500 transition'>
               <IoChevronBack className='text-xl'/> Geri
            </button>
            <button onClick={handleClick} className={`${isFav ? "bg-amber-600" : "bg-blue-600"  }  flex items-center  gap-1 py-1 px-3 rounded hover:bg-blue-500 transition`}>
                {
                    isFav ?
                        <> <MdBookmarkRemove className='text-xl'/> Izleme Listesinden Cikar </>
                        :
                        <> <MdBookmarkAdd className='text-xl'/> Izleme Listesine Ekle </>
                }
            </button>
        </div>
    );
};

export default Button;
