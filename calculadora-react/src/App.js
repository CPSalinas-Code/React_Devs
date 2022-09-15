import './App.css';
import logoPag from './img/logofree.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input,setInput]= useState('');

  const agregarInput = numero => {
    setInput(input+numero);

  };

  const calcularInput = () =>{
    if(input){ 
      setInput(evaluate(input));
    }else{
      alert("Ingrese valor para calcular");
    }
    
  };

  return (
    <div className="App">
      <div className='contenedor-principal-calculadora'>
        <Pantalla inputPantalla={input}/>
        <div className='fila'>
          <Boton funcionClick={agregarInput}>1</Boton>
          <Boton funcionClick={agregarInput}>2</Boton>
          <Boton funcionClick={agregarInput}>3</Boton>
          <Boton funcionClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton funcionClick={agregarInput}>4</Boton>
          <Boton funcionClick={agregarInput}>5</Boton>
          <Boton funcionClick={agregarInput}>6</Boton>
          <Boton funcionClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton funcionClick={agregarInput}>7</Boton>
          <Boton funcionClick={agregarInput}>8</Boton>
          <Boton funcionClick={agregarInput}>9</Boton>
          <Boton funcionClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton funcionClick={calcularInput}>=</Boton>
          <Boton funcionClick={agregarInput}>0</Boton>
          <Boton funcionClick={agregarInput}>.</Boton>
          <Boton funcionClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear funcionClear={()=>setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
