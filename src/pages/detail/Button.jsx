import React from 'react';
import { MdBookmarkAdd } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToFavorite} from "../../redux/actions/index.js";

const Button = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();


    const handleClick = () =>{
        dispatch(addToFavorite())
    }

    return (
        <div className='mb-5 flex justify-between '>
            <button onClick={()=> navigate(-1)} className='bg-gray-600 flex items-center  gap-1 py-1 px-3 pe-4 rounded hover:bg-gray-500 transition'>
               <IoChevronBack className='text-xl'/> Geri
            </button>
            <button onClick={handleClick} className='bg-blue-600 flex items-center  gap-1 py-1 px-3 rounded hover:bg-blue-500 transition'>
               <MdBookmarkAdd className='text-xl'/> Izleme Listesine Ekle
            </button>
        </div>
    );
};

export default Button;
