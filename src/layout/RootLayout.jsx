import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import LightRays from '../components/Darkveil';

const RootLayout = () => {
    return (
        <div className='bg-linear-to-r from-[#0a0a0fec] to-gray-800 min-h-screen text-accent relative'> 
            <div className='absolute top-0 left-0 w-full h-screen z-0 pointer-events-none'>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#dcd6ff"
                    raysSpeed={1.2}
                    lightSpread={0.9}
                    rayLength={1.5}
                    followMouse={true}
                    mouseInfluence={0.15}
                    noiseAmount={0.05}
                    distortion={0.03}
                />
            </div>

            {/* Content Layer */}
            <div className='relative z-10'>
                <header className='sticky backdrop-blur-xl top-0 z-50'>
                    <Navbar/>
                </header>
                <main className='min-h-[calc(100vh-65px)] max-w-7xl mx-auto my-6 sm:my-8 md:my-10 lg:my-12 px-5 sm:px-8 xl:px-0 text-sm md:text-base overflow-hidden'>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default RootLayout;