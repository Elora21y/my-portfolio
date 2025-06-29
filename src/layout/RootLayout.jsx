import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className=' bg-linear-to-r from-[#060608] to-gray-800 min-h-screen text-accent'>
            <header className='sticky backdrop-blur-lg top-0 z-10'>
                <Navbar/>
            </header>
            <main className='min-h-[calc(100vh-65px)] max-w-7xl mx-auto my-6 sm:my-8 md:my-10 lg:my-12 px-5 sm:px-8 xl:px-0 text-sm md:text-base'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;