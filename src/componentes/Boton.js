import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {         //Aqui se aplico sintaxis de desestructuración
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}      // Operador ternario
      onClick={manejarClic} >                                     
      {texto}                                                                  
    </button> 
  );   
}

export default Boton;