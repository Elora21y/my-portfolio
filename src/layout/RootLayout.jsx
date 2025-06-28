import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='bg-base-300 min-h-screen'>
            <header className='sticky backdrop-blur-2xl top-0 z-10'>
                <Navbar/>
            </header>
            <main className='min-h-[calc(100vh-412px)] max-w-7xl mx-auto my-6 sm:my-8 md:my-10 lg:my-12 px-5 sm:px-8 xl:px-0 '>
                <Outlet/>
            </main>
        </div>
    );
};

export default RootLayout;