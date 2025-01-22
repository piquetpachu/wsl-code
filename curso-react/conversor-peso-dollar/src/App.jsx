
import { useState } from 'react';
import './App.css'
import { useRef } from 'react';
import { useEffect } from 'react';



function App() {
  
  const [valorCambio, setvalorCambio]= useState(null);

  const pesoRef = useRef();
  const resultadoRef = useRef();
  
  useEffect(() => {
    const llamarApiCambio = async () => {
      try{
        const url = 'https://v6.exchangerate-api.com/v6/80d0a48b47803f928f3dc610/latest/ARS';
        const response = await fetch(url);
        const data = await response.json();
        setvalorCambio(data.conversion_rates.USD);

      }catch(error){
        console.error('Error al llamar Api',error);
      } 
      }
      llamarApiCambio();
      
  },[]);

  const convertir = () =>{
   const pesoARS = pesoRef.current.value;
   const dollar = (pesoARS*valorCambio);
   const dollarFixed = dollar.toFixed(2)+`$`;
   resultadoRef.current.innerHTML = dollarFixed;
  }
  

  return (
    <section className='App'>
      <div className='container'>
      <h1>conversor Peso ARS a Dollar EU</h1>
      <h2>dollar: {valorCambio}</h2>
      <input  ref={pesoRef} placeholder='ingrese valor en Peso ARS' type="number" />
      <button onClick={convertir}>consultar</button>
      <h2 >Resultado: </h2>
      <h2 ref={resultadoRef}></h2>
      </div>
    </section>
  )
}

export default App
