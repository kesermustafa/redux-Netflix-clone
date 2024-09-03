import React from 'react';
import DetailInfo from "./DetailInfo.jsx";

const Content = ({movie}) => {
    return (
        <div className='my-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>

            <div >
                <DetailInfo title="Kategoriler" arr={movie?.genres}/>
                <DetailInfo title="Konusulan Diller" arr={movie?.spoken_languages} />
                <DetailInfo title="Yapimci Sirketler" arr={movie?.production_companies}  />
                <DetailInfo title="Yapimci Ulkeler" arr={movie?.production_countries}  />
            </div>

            <div >2</div>
        </div>
    );
};

export default Content;
