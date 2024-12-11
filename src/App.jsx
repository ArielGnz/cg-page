//import { NavBar } from "./Header/NavBar";
import { Inicio } from "./components/Inicio/Inicio";
import { NavBar } from "./components/Header/NavBar";
import { SobreMi } from "./components/SobreMi.jsx/SobreMi";
import { Lumiflex } from "uvcanvas";


function App() {

  return (
    <div className="">
      
      <NavBar />
      <Inicio />
      <SobreMi />
    </div>
  )
}

export default App
