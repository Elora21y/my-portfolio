import React from "react";
import NavLogo from "../shared/NavLogo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#">
          <AiFillHome /> Home
        </a>
      </li>
      <li>
        <a href="#about">
          <FaUserAlt /> About
        </a>
      </li>
      <li>
        <a href="#skills">
          <GiSkills /> Skills
        </a>
      </li>
      <li>
        <a href="#projects">
          <MdWork /> Projects
        </a>
      </li>
      <li>
        <a href="#contacts">
          <BiEnvelope /> Contacts
        </a>
      </li>
      <li>
        <a
          href="/Elora_Yasmin_Resume.pdf"
          download
          className="btn border-secondary btn-sm bg-transparent hover:shadow shadow-primary duration-500 transition-all"
        >
          Resume <LuDownload />
        </a>
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
