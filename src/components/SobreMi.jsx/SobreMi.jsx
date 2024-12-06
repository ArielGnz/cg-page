import React from "react";
import images from "../../assets/images.jpg";

export const SobreMi = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="hidden md:flex justify-center text-2xl font-semibold text-gray-600 ">
        <div className="w-[120px] mx-12 border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
          <span className="flex justify-center">Sobre Mi</span>
        </div>
        <div className="w-[120px] mx-12 border-b-4 hover:text-sky-500 hover:border-sky-500 cursor-pointer">
          <span className="flex justify-center">Experiencia</span>
        </div>
      </div>

      <div className="w-full md:w-[55%] h-[400px] flex justify-center items-center mx-auto my-10">
        <div className="w-1/3">
          <img src={images} className="mx-auto" />
        </div>
        <div className="hidden md:block md:w-2/3">
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
