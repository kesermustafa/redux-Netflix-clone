import React from 'react';

const DetailInfo = ({title, arr}) => {

    return (
        <div className="detail-info mb-6">
            <h2 className='text-xl font-semibold mb-2'>{title}</h2>

            <div className='flex gap-4 flex-wrap '>
                {
                    arr.map((item, i) => (
                        <span key={i} className="border py-1 px-3 rounded-md  ">
                            {item.name}
                        </span>
                    ))
                }
            </div>
        </div>
    );
};

export default DetailInfo;
