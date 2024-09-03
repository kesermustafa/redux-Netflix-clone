import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Favourites from "./pages/favourites/index.jsx";
import Header from "./components/header/index.jsx";
import Detail from "./pages/detail/index.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="p-5 md:p-10 lg:px-15 lx:px-20">
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/favourites" element={<Favourites/>}/>
                    <Route path="/detail" element={<Detail/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
