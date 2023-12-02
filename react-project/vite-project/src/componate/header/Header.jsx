import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../headers/Home';
import About from '../headers/About';
import Services from '../headers/Services';
import Rout from '../headers/Routes';
import New from "../headers/New"

const Header = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Rout />}>
                        <Route index element={<Home />} />
                        <Route path='/new' element={<New/>}/>
                        <Route path='/about' element={<About />} />
                        <Route path='/services' element={<Services />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};
export default Header;