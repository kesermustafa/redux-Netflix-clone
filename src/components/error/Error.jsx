import React from 'react';

const Error = ({info}) => {

    return (
        <div className='grid gap-6 rounded-md place-items-center my-10  p-5 bg-amber-400'>
            <h2 className='text-2xl font-semibold text-red-700'> Oops!  </h2>
            <p className='text-gray-700 font-semibold'>{info}</p>
        </div>
    );
};

export default Error;
