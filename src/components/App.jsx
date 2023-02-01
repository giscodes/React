import "./App.css"; //importacion y ejecucion

//rfc estructura básica
/*
class => className
input => <input type="text" />
style = "nombrePromiedad: valor" => style = {{"nombrePropiedad" : "valor"}}
`${}`=> {}
mayor parte de atributos en camelCase
export => importo con llaves
export default => importo sin llaves

*/


//Components
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";

export const App = () => {
  //<NombreComponente>
  return (
   <>
    <Navbar nombre={"La Madriguera"}/>
    <ItemListContainer greeting={"Bienvenidas/os! tienda de artículos mágicos"}/>
   </>
 
  );
}


