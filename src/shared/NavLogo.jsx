import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/elora_logo.png'

const NavLogo = () => {
    return (
        <Link to='/'
        className="navbar-start gap-0">
          <img src={logo} alt="" className="w-21 max-h-11 rounded-md  object-cover object-center" />
          <h3 className="font-medium text-secondary-content text-xs -ml-2 mt-3">
            YASMIN
          </h3>
        </Link>
    );
};

export default NavLogo;