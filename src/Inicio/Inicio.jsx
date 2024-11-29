import React from "react";
import cinta from "../assets/cita-medica.png";
import tijera from "../assets/tijera.png";
import medicina from "../assets/medicina.png";
import eco from "../assets/eco.png";
import corazon from "../assets/corazon.png";

export const Inicio = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[200px]">
      <h2 className="text-2xl font-semibold text-gray-500 ">Bienvenido/a</h2>
      <h2 className="text-2xl font-semibold text-gray-500 ">soy</h2>
      <h1 className="text-8xl font-semibold mt-8 text-center text-gray-700">
        Carla Gonzalez
      </h1>
      <h1 className="text-blue-500 text-5xl font-bold mt-4 text-center">
        Ginecologia y Obstetricia
      </h1>

      <div className="flex mt-10 font-semibold text-lg text-gray-600">
        <div className="flex justify-center items-center">
          <img src={cinta} className="w-[30px] h-[30px] mx-2" />
          <p>Ginecologia y Obstetricia</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={medicina} className="w-[30px] h-[30px] mx-2" alt="" />
          <p>Medicina Fetal y Genetica</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={eco} className="w-[30px] h-[30px] mx-2" alt="" />
          <p>Ecografia</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={corazon} className="w-[30px] h-[30px] mx-2" alt="" />
          <p>Cardiologia Fetal</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={tijera} className="w-[30px] h-[30px] mx-2" alt="" />
          <p>Anatomia Fetal</p>
        </div>
      </div>
    </div>
  );
};
