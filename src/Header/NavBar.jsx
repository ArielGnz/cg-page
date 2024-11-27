import React from "react";

export const NavBar = () => {
  
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    return (
      <nav className="bg-white shadow-lg w-full flex  justify-between items-center mx-auto py-6 md:px-8 ">
        <a href="/" className="text-slate-800 text-lg md:text-xl ms-2 font-bold font-varela">
          OtakuZone
        </a>
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden block text-slate-800 me-2 focus:outline-none"
        >
          {menuOpen ? <IoMdClose /> : <FaBars />}
        </button>
        <div
          className={`w-full md:flex md:items-center md:justify-between transform transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } md:opacity-100 md:max-h-full md:flex-grow overflow-visible`}
        >
          <div className="flex-grow flex justify-center mt-2  w-full md:w-auto">
            <div className="relative w-full max-w-xs md:max-w-md">
              <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full border rounded-full bg-slate-200 pl-10 pr-2 py-1 font-comfortaa"
              />
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row items-center me-3 md:space-x-2 mt-4 md:mt-0">
            <div onClick={toggleDropdown} className="flex items-center cursor-pointer space-x-1">
              <img
                src="https://www.sdpnoticias.com/resizer/v2/NB735FZ6JRDC5D3LLOLM34XEWU.jpeg?smart=true&auth=d8c1bea7c293d574913d92a7fe39c08038a69facae1bb798170a8bddb7622267&width=640&height=360"
                alt="User profile image"
                className="w-8 h-8 rounded-full mr-2 object-cover"
              />
              <span className="text-slate-800 text-sm font-varela">Nicolás Saavedra</span>
              <SlOptionsVertical className="text-slate-800" />
            </div>
            {dropdownOpen && (
              <div className="absolute top-full right-0 bg-white shadow-md rounded-lg w-48 py-2 mt-2 z-50 text-sm">
                <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <FiUser className="mr-2" />
                  Profile
                </a>
                <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <RiVideoUploadLine className="mr-2" />
                  Upload Reel
                </a>
                <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <RiShutDownLine className="mr-2 text-red-500" />
                  Logout
                </a>
              </div>
            )}
          </div>
  
          <div className="flex flex-col md:flex-row items-center md:space-x-2 mt-4 md:mt-0">
            <button
              className="py-2 px-4 bg-Neon-blue hover:bg-blue-500 text-white rounded-full text-sm md:text-base font-varela"
              type="button"
            >
              Iniciar Sesión
            </button>
            <button
              className="py-2 px-4 bg-Neon-blue hover:bg-blue-500 text-white rounded-full text-sm md:text-base mt-2 md:mt-0 font-varela"
              type="button"
            >
              Registrarse
            </button>
          </div>
        </div>
      </nav>
    );
  };