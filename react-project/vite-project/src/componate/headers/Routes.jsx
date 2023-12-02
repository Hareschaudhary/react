import React from 'react';
import Navbar from '../header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
const Routes = () => {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    )
};
export default Routes;