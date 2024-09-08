import React from 'react';
import DetailInfo from "./DetailInfo.jsx";

const Content = ({movie}) => {

    return (
        <div className='md:my-10 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10'>

            <div className='max-md:mt-5'>
                <DetailInfo title="Kategoriler" arr={movie?.genres}/>
                <DetailInfo title="Konusulan Diller" arr={movie?.spoken_languages}/>
                <DetailInfo title="Yapimci Sirketler" arr={movie?.production_companies}/>
                <DetailInfo title="Yapimci Ulkeler" arr={movie?.production_countries}/>
            </div>

            <div>
                <p className='mb-5 first-letter:text-4xl text-justify md:pe-4' >{movie.overview}</p>

                <div className='flex flex-col gap-2'>
                    <p className='flex gap-6'>
                        <span className='w-[50px]'>Butce</span>
                        <span className='text-green-500 font-semibold'>: ${movie.budget.toLocaleString()}</span>
                    </p>
                    <p className='flex gap-6'>
                        <span className='w-[50px]'>Hasilat</span>
                        <span className='text-green-500 font-semibold'>: ${movie.revenue.toLocaleString()}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Content;
