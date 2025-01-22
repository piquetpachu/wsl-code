import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const titulo = <h1>esto es un titulo</h1>
  const suma=(a,b)=>a+b
  const [resultado,setResultado]=useState(null)
  const llamarSuma=()=>{
    let n1=parseInt(prompt('ingrese el primer promp'))
    let n2=parseInt(prompt('ingrese el segundo promp'))
    let result=suma(n1,n2)
    setResultado(result)
  }
  return(
    <div className='conteiner'>
      <button style={{margin:'10px 10px'}} onClick={llamarSuma}>pulsame</button>
      <header>{titulo}</header>
      {resultado != null && <p> El resultado es: {resultado}</p>}
    </div>
  )
}

export default App
