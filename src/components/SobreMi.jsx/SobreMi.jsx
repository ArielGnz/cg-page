import React from "react";
import images from "../../assets/images.jpg";

export const SobreMi = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="hidden md:flex justify-center text-xl font-semibold text-gray-600 ">
        <div className="w-[120px] mx-12 border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
          <span className="flex justify-center">Sobre Mi</span>
        </div>
        <div className="w-[120px] mx-12 border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
          <span className="flex justify-center">Experiencia</span>
        </div>
      </div>

      <div className="w-full md:w-[90%] flex justify-center my-2 w-full md:w-[90%]">
        <div className="w-1/3">
          <img src={images} alt="" />
        </div>
        <div className="hidden border-2 md:w-2/3">info</div>
      </div>

      <div>
        <div className="md:hidden flex justify-evenly my-2 font-semibold text-gray-700 text-lg">
          <div className="w-[120px] border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
            <span className="flex justify-center">Sobre Mi</span>
          </div>
          <div className="w-[120px] border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
            <span className="flex justify-center">Experiencia</span>
          </div>
        </div>
        <div className="border-4 mx-2">
          <p>
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
