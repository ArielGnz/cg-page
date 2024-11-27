import { useState } from "react";
import React from "react";
import { FaBars } from "react-icons/fa";

import { IoMdClose } from "react-icons/io";

import { FiUser } from "react-icons/fi";
import { RiShutDownLine, RiVideoUploadLine } from "react-icons/ri";
import logo from "../assets/Dr.png";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg w-full flex justify-between items-center mx-auto py-4 md:px-8 ">
      <div>
        <img src={logo} alt="" className="w-[140px] border-2 border-red-500" />
      </div>

      <div>
        <ul className="flex justify-center items-center">
          <li className="mx-10">Inicio</li>
          <li className="flex flex-row mx-10">Sobre Mi</li>
          <li className="mx-10">Experiencia</li>
        </ul>
      </div>

      <div>
        <button className=""></button>
      </div>
      <button
        onClick={toggleMenu}
        className="text-2xl md:hidden block text-slate-800 me-2 focus:outline-none"
      >
        {menuOpen ? <IoMdClose /> : <FaBars />}
      </button>
      <div
        className={`w-full md:flex md:items-center md:justify-between transform transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:opacity-100 md:max-h-full md:flex-grow overflow-visible`}
      >
        <div className="flex-grow flex justify-center mt-2  w-full md:w-auto"></div>
        <div className="relative flex flex-col md:flex-row items-center me-3 md:space-x-2 mt-4 md:mt-0">
          <div
            onClick={toggleDropdown}
            className="flex items-center cursor-pointer space-x-1"
          ></div>
          {dropdownOpen && (
            <div className="absolute top-full right-0 bg-white shadow-md rounded-lg w-48 py-2 mt-2 z-50 text-sm">
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <FiUser className="mr-2" />
                Profile
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <RiVideoUploadLine className="mr-2" />
                Upload Reel
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <RiShutDownLine className="mr-2 text-red-500" />
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
