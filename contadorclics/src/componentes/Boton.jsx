import react from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonDeClic, funcionClic }){
  return(
    <button
      className={ esBotonDeClic ? 'boton-clic':'boton-reiniciar' }
      onClick={funcionClic}>
      {texto}                                                                       
    </button>
  );
}

export default Boton;