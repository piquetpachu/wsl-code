import './App.css'

function App() {
  const numeros = [5,345,2,2,24,244,4,34,6,27,855,34,234,]

  return (
    <section>
      <h1>holaa</h1>
      <ul>
      {numeros.map((num,index)=>{
        return <li key={index}>{num}</li>
      })}
      </ul>
      </section>
  )
}

export default App
