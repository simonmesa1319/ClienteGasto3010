import { Routes, Route } from "react-router-dom"
import {Menu} from "../components/common/Menu/Menu.jsx";
import{Home} from "../components/pages/Home/Home.jsx";

export function Rutas(){
    
    return(
    <>
     <Menu></Menu>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </>
 );
}