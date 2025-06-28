import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/elora-logo.png'

const NavLogo = () => {
    return (
        <Link to='/'
        className="navbar-start">
          <img src={logo} alt="" className="w-8 sm:w-10 md:w-12 rounded-xl" />
          <h3 className="font-bold text-secondary text-xl sm:text-2xl md:text-3xl">
            Elora
          </h3>
        </Link>
    );
};

export default NavLogo;