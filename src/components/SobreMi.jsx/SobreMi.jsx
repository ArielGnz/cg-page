import React from "react";
import images from "../../assets/images.jpg";

export const SobreMi = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="hidden md:flex justify-center font-semibold text-gray-600 ">
        <span className="border-b-4 mx-4">Sobre MI</span>
        <span className="border-b-4 mx-4">Experiencia</span>
      </div>

      <div className="w-full md:w-[90%] flex justify-center my-2 w-full md:w-[90%] border-4">
        <div className="border-2 w-1/3">
          <img src={images} alt="" />
        </div>
        <div className="hidden border-2 md:w-2/3">info</div>
      </div>

      <div>
        <div className="flex justify-center my-2">
          <span className="border-b-4 mx-4">Sobre MI</span>
          <span className="border-b-4 mx-4">Experiencia</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};
