import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/elora_logo.png'

const NavLogo = () => {
    return (
        <a href='#'
        className="navbar-start gap-0">
          <img src={logo} alt="" className="w-26 max-h-12 rounded-md  object-cover object-center" />
          <h3 className="font-medium text-secondary-content text-xs -ml-2 mt-3">
            YASMIN
          </h3>
        </a>
    );
};

export default NavLogo;