import React from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import ReactPlayer from "react-player";


const VideoList = ({videos}) => {

    if (videos.length === 0) return;

    return (
        <div className='my-5'>
            <h2 className='font-semibold text-lg md:text-xl my-4'>Fragmanlar</h2>

            <Splide options={{ pagination:false }}>
                {videos.map((video, key) => (
                    <SplideSlide key={key}>
                        <div className='w-full h-[35vh]  md:h-[55vh]'>
                            <ReactPlayer
                                controls
                                width={"100%"}
                                height={"100%"}
                                url={`https://www.youtube.com/watch?v=${video?.key}`} />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default VideoList;
