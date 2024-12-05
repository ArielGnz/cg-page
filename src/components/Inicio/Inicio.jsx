import React from "react";
import cinta from "../../assets/cita-medica.png";
import tijera from "../../assets/tijera.png";
import medicina from "../../assets/medicina.png";
import eco from "../../assets/eco.png";
import corazon from "../../assets/corazon.png";
import { FiDownload } from "react-icons/fi";

export const Inicio = () => {
  const handleDownload1 = () => {
    const pdfUrl = "CarlaGonzalezCV.pdf";
    window.open(pdfUrl, "_blank");
  };

  const handleDownload2 = () => {
    const pdfUrl = "CarlaGonzalezCVBr.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[180px]">
      <h2 className="text-2xl font-semibold text-gray-500 ">Bienvenido/a</h2>
      <h2 className="text-2xl font-semibold text-gray-500 ">soy</h2>
      <h1 className="text-8xl font-semibold mt-8 text-center text-gray-700">
        Carla Gonzalez
      </h1>
      <h1 className="text-blue-500 text-5xl font-bold mt-8 text-center">
        Especialista en Toco Ginecologia
      </h1>

      <div className="overflow-hidden w-[700px] h-[50px] mt-10 relative">
        <div className="flex w-max animate-marquee">
          <div className="flex justify-center items-center mx-4">
            <img src={cinta} className="w-[30px] h-[30px] mx-2" />
            <p>Ginecología y Obstetricia</p>
          </div>
          <div className="flex justify-center items-center mx-4">
            <img src={medicina} className="w-[30px] h-[30px] mx-2" />
            <p>Medicina Fetal y Genética</p>
          </div>
          <div className="flex justify-center items-center mx-4">
            <img src={eco} className="w-[30px] h-[30px] mx-2" />
            <p>Ecografía</p>
          </div>
          <div className="flex justify-center items-center mx-4">
            <img src={corazon} className="w-[30px] h-[30px] mx-2" />
            <p>Cardiología Fetal</p>
          </div>
          <div className="flex justify-center items-center mx-4">
            <img src={tijera} className="w-[30px] h-[30px] mx-2" />
            <p>Anatomía Fetal</p>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <div className="relative inline-block">
          <button
            className="flex items-center justify-center mx-4 h-[50px] border-2 rounded border-sky-500 w-[180px] text-sky-500 font-semibold text-lg tracking-widest hover:bg-sky-900 hover:text-white"
            onClick={handleDownload1}
          >
            <span>CV español</span>
            <FiDownload className="ml-2 text-2xl" />
          </button>
        </div>

        <div className="relative inline-block">
          <button
            className="flex items-center justify-center mx-4 h-[50px] border-2 rounded border-sky-500 w-[180px] text-sky-500 font-semibold text-lg tracking-widest hover:bg-sky-900 hover:text-white"
            onClick={handleDownload2}
          >
            <span>CV Portugues</span>
            <FiDownload className="ml-2 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
