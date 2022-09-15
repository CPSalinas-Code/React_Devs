import react from 'react';
import '../hojas-de-estilo/Contador.css'


function Contador({ numClic }){
  return (
    <div className='contador-numero'>
      {numClic}
    </div>
  );
}

export default Contador;