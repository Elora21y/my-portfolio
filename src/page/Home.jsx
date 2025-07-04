import React from 'react';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';
import { Toaster } from 'react-hot-toast'

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
              <Toaster position="top-center" reverseOrder={false} toastOptions={{ style : {zIndex : 9999} }}/>
        </div>
    );
};

export default Home;