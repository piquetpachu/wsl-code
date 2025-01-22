import { useState } from "react"


function Contador (){
    const [contador,setContador] = useState(0);
    const cuenta = () => {
        setContador(contador+1)
    }
    return(
        <div>
            <h1>contador</h1>
            <button onClick={cuenta}>{contador}</button>
        </div>
    )
}
export default Contador