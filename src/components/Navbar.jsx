import React from "react";
import NavLogo from "../shared/NavLogo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contacts">Contacts</a>
      </li>
    </>
  );
  return ( 
    <div className="bg-violet-400/50 ">
      <div className="max-w-7xl mx-auto navbar  shadow-sm text-secondary">
        <div className="navbar-start">
          <NavLogo />
        </div>
       
        <div className="navbar-end">
          <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal ">{links}</ul>
        </div>
          {/* menubar */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden hover:bg-transparent hover:border-0"
            >
              <HiOutlineMenuAlt3 size={20} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content rounded-box z-20 mt-3 w-32 p-2 shadow right-0  bg-base-100"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
