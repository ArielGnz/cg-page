export const EditPost = () => {
    return (
      <div className="bg-blue-300 w-full h-screen flex flex-col  ">
        <button className="my-10 border-2 p-2 rounded-md w-[250px] mx-auto text-white bg-gray-600">
          Editar Post
        </button>
  
        <div className="flex flex-col justify-center border-2 bg-white w-[450px] mx-auto rounded-md">
          <div className="flex flex-col p-10 mx-10">
            <label htmlFor="" className="text-gray-500">
              Titulo
            </label>
            <input type="text" name="" id="" className="h-[45px] rounded-lg border border-gray-300" />
  
            <label htmlFor="" className="text-gray-500 mt-4">
              Contenido
            </label>
            <input type="text" name="" id="" className="h-[85px] rounded-lg border border-gray-300" />
  
            <label htmlFor="" className="text-gray-500 mt-4">
              Imagen
            </label>
            <input type="text" name="" id="" className="h-[35px] rounded-lg border border-gray-300" />
  
            <label htmlFor="" className="text-gray-500 mt-4">
              Hipervinculo
            </label>
            <input type="text" name="" id="" className="h-[45px] rounded-lg border border-gray-300" />
          </div>
          <div className="flex justify-end m-6">
            <button className="bg-blue-500 mt-4 rounded-xl text-white text-xs w-[130px] h-[30px]">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    );
  };
  