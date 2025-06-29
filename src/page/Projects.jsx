import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import project1 from '../assets/projects/food-mockup.jpg'
import project2 from '../assets/projects/jobnest-mockup.png'
import project3 from '../assets/projects/greenhub-mockup.png'

const projects = [
    {
        image : project1,
        name : 'Fresh Alert',
        description : 'FreshAlert is a food sharing and management platform designed to reduce food waste by helping users post, find, and claim fresh and nearly expired food items.',
        live_link : 'https://food-expiry-tracker-2b052.web.app/',
        github_link : 'https://github.com/Elora21y/food-expiry-client',

    },
    {
        image : project2,
        name : 'Job Nest',
        description : 'JobNest is an innovative and user-friendly website designed to help job seekers explore a wide variety of job opportunities across multiple companies.',
        live_link : 'https://jobnest-web.netlify.app/',
        github_link : 'https://github.com/Elora21y/job-nest',

    },
    {
        image : project3,
        name : 'Green Hub',
        description : 'The goal of GreenHub is to connect gardening enthusiasts, promote sustainable green practices, and create a space where people can learn from each other and grow their own mini green world — whether on a rooftop, balcony, or backyard.',
        live_link : 'https://green-hub-21ye.netlify.app/',
        github_link : 'https://github.com/Elora21y/green-hub',

    },
]

const Projects = () => {
    return (
        <div>
            <SectionTitle title={' My Projects'}/>
            {
                projects.map(project => 
                    <div className="flex justify-between">
                <div className="">
                    <img src={project.image} alt="" />
                </div>
                {/* content */}
                <div className="">
                    
                </div>
            </div>
                )
            }
        </div>
    );
};

export default Projects;