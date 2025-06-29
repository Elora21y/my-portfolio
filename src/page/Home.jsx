import React from 'react';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;