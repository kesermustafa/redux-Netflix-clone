import React from 'react';
import {baseImageUrl} from "../../util/constans/constan.js";

const Banner = ({movie}) => {
    return (
        <div className="banner relative h-[25vh] lg:h-[35vh] drop-shadow-[0_0_90px_rgba(255,255,255,0.3)] mt-5">
            <img className='size-full object-cover rounded-md ' src={baseImageUrl + movie.backdrop_path} alt=""/>

            <div className='bg-black grid place-items-center absolute inset-0 bg-opacity-30 tracking-widest '>
                <h2 className='text-3xl md:text-4xl font-semibold'>{movie.title}</h2>
            </div>
        </div>
    );
};

export default Banner;
