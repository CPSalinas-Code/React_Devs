import react from 'react';
import '../hoja-de-estilos/BotonClear.css'

function BotonClear (props) {
    return (
        <div 
            className='contenedor-botonclear'
            onClick={props.funcionClear}>
                {props.children}
        </div>
    );
}

export default BotonClear;