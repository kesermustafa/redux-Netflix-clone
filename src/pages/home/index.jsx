import React from 'react';
import Hero from "./Hero.jsx";
import {useSelector} from "react-redux";
import Loading from "../../components/loading/Loading.jsx";
import Error from "../../components/error/Error.jsx";
import MoviesList from "./MoviesList.jsx";

const Home = () => {

   const {isLoading, genre, error } = useSelector((store) => store.genres)

    return (
        <div>
            <Hero/>
            {
                isLoading ? <Loading/> : error ? <Error info={error} /> : (
                    genre && genre.map(genre => (
                        <MoviesList key={genre.id} genre={genre} />
                    ))
                )
            }
        </div>
    );
};

export default Home;
