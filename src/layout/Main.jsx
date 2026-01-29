import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
    return (
        <div className='mt-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;