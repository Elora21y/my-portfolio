import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default RootLayout;