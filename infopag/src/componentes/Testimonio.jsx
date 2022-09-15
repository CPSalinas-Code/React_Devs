import React from "react";
import '../estilos/Testimonio.css'

function Testimonio (props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'  
        src={require(`../img/persona_${props.num_foto}.png`)}
        alt='Foto de Emma'/>
      <div className='contenedor-textoGen'>
        <p className='nombre-testimonio'> <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo_testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;