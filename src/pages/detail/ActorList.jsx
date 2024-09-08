import React from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {baseImageUrl} from "../../util/constans/constan.js";

const ActorList = ({actors}) => {
    return (
        <div className='my-4'>
            <h2 className='font-semibold text-lg md:text-xl my-4'>Oyuncular</h2>
            <Splide options={{autoWidth: true, gap:"10px", pagination:false }}>
                {actors.map((actor, index) => (
                    <SplideSlide key={index}>

                        <div className='w-[160px] h-full  '>
                        <img className='rounded h-[90%] object-cover' src={actor.profile_path ? baseImageUrl + actor.profile_path : "../../../public/assets/images/notImage.png"} alt={actor.name}/>
                        <h2 className=' text-center text-sm mt-1 '>{actor.original_name}</h2>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default ActorList;
