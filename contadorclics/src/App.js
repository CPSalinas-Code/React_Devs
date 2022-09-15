import './App.css';
import logopagina from './img/logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  //constante sera un arreglo, valor que queremos usar como el estado, se va a guardar, usar y actualizar
  //el otro es la funcion que permite actualizar setNumClics

  //useState(valor inicial de estado)
  const [numClics,setNumClics]  = useState(0);


  const manejarClic = () => {
    //console.log('Clic');
    setNumClics(numClics + 1);
    
  };

  const reiniciarContador =() =>{
    //console.log('Reiniciar');
    setNumClics(0);
  };


  return (
    <div className="App">
      <div className='logo-conteneder'>
        <img 
          className='logo-img'
          src={logopagina}
          alt='Logo de FreeCode'
        />
      </div>

      <div className='contenedor-contador-botones'>
        
        <Contador
          numClic={numClics} />

        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          funcionClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          funcionClic={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
