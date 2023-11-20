import { useState } from 'react';
import Boton from './components/Boton';
import { evaluate } from 'mathjs';
import Pantalla from './components/Pantalla';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');

  const limpiar = () => {
    setInput(prevInput => '0');
  }
  const agregarInput = val => {
    console.log(input);
   
    switch(val){
      case "x2": setInput(prevInput => prevInput+'*'+prevInput); calcularResultado();break;
      case "x^y": setInput(prevInput => prevInput+'^');break;
      case "√": setInput(prevInput => 'sqrt('+prevInput+')'); calcularResultado();break;
      case "n!": setInput(prevInput => ''+prevInput+'!'); calcularResultado();break;
      case "1/x": setInput(prevInput => '1/'+prevInput); calcularResultado();break;
      case "log": setInput(prevInput => 'log('+prevInput+')'); calcularResultado();break;
      case "-()": setInput(prevInput => '-('+prevInput+')');break;
      default:
        if(input=="0"){
          console.log('valor input'+input);
          setInput(prevInput => '');
        }
        setInput(prevInput => prevInput + val);
    }
    //setInput(prevInput => prevInput + val);
    console.log(input);
  };

  const calcularResultado = () => {
    try{
      console.log("calcular:"+input);
      if (input) {
        setInput(prevInput => evaluate(prevInput));
      } else {
        alert("Por favor ingrese valores para realizar los cálculos.");
      }
    }
    catch(e) {
      alert("expresion incorrecta, verifique la sintaxis");
    }
    
  };

  return (
    <>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton handleClick={agregarInput}>x2</Boton>
        <Boton handleClick={agregarInput}>x^y</Boton>
        <Boton handleClick={agregarInput}>√</Boton>
        <Boton handleClick={limpiar}>CE</Boton>
      </div>
      <div className='fila'>
        <Boton handleClick={agregarInput}>1/x</Boton>
        <Boton handleClick={agregarInput}>log</Boton>
        <Boton handleClick={agregarInput}>n!</Boton>
        <Boton handleClick={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <Boton handleClick={agregarInput}>1</Boton>
        <Boton handleClick={agregarInput}>2</Boton>
        <Boton handleClick={agregarInput}>3</Boton>
        <Boton handleClick={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton handleClick={agregarInput}>4</Boton>
        <Boton handleClick={agregarInput}>5</Boton>
        <Boton handleClick={agregarInput}>6</Boton>
        <Boton handleClick={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton handleClick={agregarInput}>7</Boton>
        <Boton handleClick={agregarInput}>8</Boton>
        <Boton handleClick={agregarInput}>9</Boton>
        <Boton handleClick={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton handleClick={agregarInput}>0</Boton>
        <Boton handleClick={agregarInput}>.</Boton>
        <Boton handleClick={agregarInput}>-()</Boton>
        <Boton handleClick={calcularResultado} variant="primary" >=</Boton>
      </div>
    </>
  )
}

export default App
