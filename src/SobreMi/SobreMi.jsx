import { useForm } from 'react-hook-form';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { IoImageOutline } from 'react-icons/io5';
import { PiLinkSimple } from 'react-icons/pi';

// type FormData = {
//   titulo: string;
//   contenido: string;
//   imagen?: string;
//   hipervinculo?: string;
// };

// export const EditPost = () => {
//   const { register, handleSubmit } = useForm<FormData>();
//   const onSubmit = (data: FormData) => console.log(JSON.stringify(data));

  return (
    <div className="bg-blue-300 w-full h-screen flex items-center flex-col">
      <div className="my-10 flex items-center justify-evenly w-[450px] ">
        <FaArrowLeftLong className="text-gray-600 text-4xl stroke-2 cursor-pointer" />
        <button className="border-2 p-2 rounded-md text-white bg-gray-600 w-[200px] ">
          Editar Post
        </button>
        <div></div>
      </div>

      <div className="flex flex-col justify-center border-2 bg-white w-[450px] mx-auto rounded-md shadow-[8px_8px_15px_rgba(0,0,0,0.5)]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-8 mx-10">
          <label htmlFor="titulo" className="text-gray-500">
            Titulo
          </label>
          <div className="relative">
            <textarea
              id="titulo"
              {...register('titulo', { required: 'El título es requerido' })}
              className="h-[60px] w-full text-sm px-4 py-2 rounded-lg border border-gray-300 focus:outline-none resize-none"
            ></textarea>
            <FiEdit className="absolute bottom-2 right-2 text-gray-500 text-2xl cursor-pointer mb-1" />
          </div>

          <label htmlFor="contenido" className="text-gray-500 mt-4">
            Contenido
          </label>
          <div className="relative">
            <textarea
              id="contenido"
              {...register('contenido', { required: 'El contenido es requerido' })}
              className="h-[85px] w-full text-sm px-4 py-2 rounded-lg border border-gray-300 focus:outline-none resize-none"
            ></textarea>
            <FiEdit className="absolute bottom-2 right-2 text-gray-500 text-2xl cursor-pointer mb-1" />
          </div>

          <label htmlFor="imagen" className="text-gray-500 mt-4">
            Imagen
          </label>
          <div className="relative">
            <input
              type="text"
              id="imagen"
              {...register('imagen')}
              className="h-[45px] w-full text-sm px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
            <IoImageOutline className="absolute bottom-2 right-2 text-gray-500 text-3xl cursor-pointer" />
          </div>

          <label htmlFor="hipervinculo" className="text-gray-500 mt-4">
            Hipervínculo
          </label>
          <div className="relative">
            <input
              type="text"
              id="hipervinculo"
              {...register('hipervinculo')}
              className="h-[45px] w-full text-sm px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
            <PiLinkSimple className="absolute bottom-2 right-2 text-gray-500 text-3xl cursor-pointer" />
          </div>
        </form>
        <div className="flex justify-end items-center mx-6 mt-2 mb-6">
          <button
            type="submit"
            className="bg-Neon-blue hover:bg-blue-500 rounded-xl text-white text-xs w-[130px] h-[30px]"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );

