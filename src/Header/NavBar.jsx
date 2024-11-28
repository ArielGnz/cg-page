//import { useState } from "react";
import React from "react";
import logo from "../assets/Dr.png";
import argentina from "../assets/argentina.png";
import brasil from "../assets/brasil.png";

export const NavBar = () => {
  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg w-full flex justify-between items-center mx-auto py-4 md:px-8 ">
      <div>
        <img src={logo} alt="" className="w-[140px]" />
      </div>

      <div className="">
        <ul className="flex justify-center items-center">
          <li className="mx-10">Inicio</li>
          <li className="flex flex-row mx-10">Sobre Mi</li>
          <li className="mx-10">Experiencia</li>
          <li className="mx-10">Contacto</li>
        </ul>
      </div>

      <div>
        <label class="inline-flex items-center cursor-pointer">
          <img src={argentina} className="w-[30px] h-[30px] mx-2" alt="" />
          <input type="checkbox" value="" className="sr-only peer" checked />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <img src={brasil} className="w-[30px] h-[30px] mx-2" alt="" />
        </label>
      </div>
    </nav>
  );
};
