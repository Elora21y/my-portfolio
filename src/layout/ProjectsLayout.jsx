import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigate, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import LightRays from '../components/Darkveil';
import Loading from '../components/Loading';
import { IoReturnUpBack } from 'react-icons/io5';
import {motion} from 'framer-motion'

const ProjectsLayout = () => {
    const navigate = useNavigate()
 const navigation = useNavigation();
const isLoading = navigation.state === "loading";
const [initialLoading, setInitialLoading] = useState(true)
    const [loadingComplete, setLoadingComplete] = useState(false);

useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingComplete(true); // Trigger curtain animation
            
            // Remove loader after animation completes
            setTimeout(() => {
                setInitialLoading(false);
            }, 600); // Wait for 1s curtain animation
        }, 1000); 
        
        return () => clearTimeout(timer);
    }, []);

    if (initialLoading) {
        return <Loading isComplete={loadingComplete} />;
    }

    return (
         <>
       {isLoading && <Loading isComplete={false} />}
        <div className='bg-linear-to-r from-[#0a0a0fec] to-gray-800 min-h-screen text-accent relative  z-10'> 
          <div className=" max-w-7xl mx-auto  px-5 sm:px-8 xl:px-0">
              
            <div className="pt-10">
                <motion.button
                initial={{scale : 1}}
                whileHover={{scale : 1.03}}
                 onClick={() => navigate('/')}
                    className='btn btn-sm md:btn-md rounded-tl-2xl bg-gradient-to-r from-violet-700 to-violet-500 border-0 flex gap-1 md:ml-10'
                    >
                        <IoReturnUpBack size={20}/>
                    Go Back
                </motion.button>
            </div>
               
                <main className='min-h-screen py-6 sm:py-8 md:py-10 lg:py-12 text-sm md:text-base overflow-hidden'>
                    <Outlet/>
                </main>
          </div>
            
        </div>
         </>
    );
};

export default ProjectsLayout;