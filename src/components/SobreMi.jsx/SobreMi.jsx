import React, { useState } from "react";
import images from "../../assets/images.jpg";


export const SobreMi = () => {
  
  const [view, setView] = useState("sobreMi");
  
  const handleView = (option) => {
    setView(option);
  };

  return (
    <div className="flex flex-col bg-red-900">
      <div className="hidden mt-10 md:flex justify-center text-2xl font-semibold text-gray-600 ">
        <div className="w-[120px] mx-12 border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
          <span className="flex justify-center" onClick={() => handleView("sobreMi") }>Sobre Mi</span>
        </div>
        <div className="w-[150px] mx-12 border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
          <span className="flex justify-center" onClick={() => handleView("experiencia")} >Experiencia</span>
        </div>
        <div className="w-[180px] mx-12 border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
          <span className="flex justify-center" onClick={() => handleView("especialidades")} >Especialidades</span>
        </div>
      </div>

      <div className="w-full md:w-[55%] h-[400px] flex justify-center items-center mx-auto my-10">
        <div className="md:w-1/3">
          <img src={images} className="mx-auto h-[380px] w-[380px]" />
        </div>
        <div className="hidden md:block md:w-2/3 ">
          <p className="mx-2 font-semibold text-gray-600 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            asperiores distinctio suscipit cupiditate blanditiis consequuntur
            eius odit voluptas! Earum consequuntur a aspernatur delectus debitis
            laboriosam inventore dolorem, optio facere quam!
          </p>
        </div>
      </div>

      <div>
        <div className="md:hidden flex justify-evenly my-2 font-semibold text-gray-700 text-lg">
          <div className="w-[120px] border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
            <span className="flex justify-center">Sobre Mi</span>
          </div>
          <div className="w-[120px] border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
            <span className="flex justify-center">Experiencia</span>
          </div>
          <div className="w-[130px] border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
            <span className="flex justify-center">Especialidades</span>
          </div>
        </div>
        <div className="mx-2 md:hidden">
          <p className="font-semibold text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            eligendi quaerat architecto? Nulla laudantium inventore similique.
            Dolorem quam veniam nisi, corrupti officia fuga itaque vitae aliquam
            culpa, exercitationem, aliquid perspiciatis!
          </p>
        </div>
      </div>
    </div>
  );
};
