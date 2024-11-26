


import { useForm, SubmitHandler } from 'react-hook-form';

// type FormValues = {
//   title: string;
//   content: string;
//   image: FileList | null;
//   hyperlink: string;
// };

export const EditPost = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<FormValues>();
  // const onSubmit: SubmitHandler<FormValues> = (data) => {
  //   console.log(data);
  // };

  const selectedImage = watch('image');

  return (
    <div className="max-w-xl mx-auto bg-blue-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">Editar Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Título</label>
          <input
            type="text"
            {...register('title', { required: 'El título es obligatorio' })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            placeholder="Escribe el título"
          />
          {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Contenido</label>
          <textarea
            {...register('content', { required: 'El contenido es obligatorio' })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            rows={4}
            placeholder="Escribe el contenido"
          ></textarea>
          {errors.content && <span className="text-red-500 text-sm">{errors.content.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Imagen</label>
          <input
            type="file"
            {...register('image', { required: 'Debes seleccionar una imagen' })}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {selectedImage?.length && (
            <img
              src={URL.createObjectURL(selectedImage[0])}
              alt="Previsualización"
              className="mt-2 w-32 h-32 object-cover rounded-md"
            />
          )}
          {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Hipervínculo</label>
          <input
            type="url"
            {...register('hyperlink', { required: 'El hipervínculo es obligatorio' })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            placeholder="https://tusitio.com"
          />
          {errors.hyperlink && (
            <span className="text-red-500 text-sm">{errors.hyperlink.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

import { HiMiniArrowLeft } from 'react-icons/hi2';
import { LiaEdit } from 'react-icons/lia';

// export const EditPost = () => {
//   return (
//     <div className="bg-blue-300 w-full h-screen flex flex-col  ">
      
//       <div className="my-10 flex items-center justify-center mr-[40px] w-[450px] mx-auto">
//         <HiMiniArrowLeft className="text-gray-600 text-4xl mr-2" />
//         <button className="border-2 p-2 rounded-md text-white bg-gray-600 w-[200px] ">
//           Editar Post
//         </button>
//       </div>

//       <div className="flex flex-col justify-center border-2 bg-white w-[450px] mx-auto rounded-md">
//         <div className="flex flex-col p-10 mx-10">
//           <label htmlFor="titulo" className="text-gray-500">
//             Titulo
//           </label>
//           <div className="relative">
//             <input
//               type="text"
//               id="titulo"
//               className="h-[60px] w-full px-4 rounded-lg border border-gray-300 focus:outline-none"
//               placeholder="Escribe el título"
//             />
//             <LiaEdit className="absolute bottom-2 right-2 text-gray-500 text-2xl" />
//           </div>

//           <label htmlFor="contenido" className="text-gray-500 mt-4">
//             Contenido
//           </label>
//           <div className="relative">
//             <input
//               type="text"
//               name=""
//               id=""
//               className="h-[85px] w-full px-4 rounded-lg border border-gray-300 focus:outline-none"
//             />
//             <LiaEdit className="absolute bottom-2 right-2 text-gray-500 text-2xl" />
//           </div>

//           <label htmlFor="" className="text-gray-500 mt-4">
//             Imagen
//           </label>
//           <input type="text" name="" id="" className="h-[35px] rounded-lg border border-gray-300" />

//           <label htmlFor="" className="text-gray-500 mt-4">
//             Hipervinculo
//           </label>
//           <input type="text" name="" id="" className="h-[45px] rounded-lg border border-gray-300" />
//         </div>
//         <div className="flex justify-end m-6">
//           <button className="bg-blue-500 mt-4 rounded-xl text-white text-xs w-[130px] h-[30px]">
//             Guardar Cambios
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

  