import { useState } from "react";
import {createClient} from '../Supabase/client'

function Tareas() {
  const [nombreTarea, setNmbreTarea] = useState("");
  const enviarTarea =  async (e) => {
    e.preventDefault();
    try{
        const result = await createClient.from("tareas").insert({
            nombre: nombreTarea,
        })
        console.log(result)
    }catch(error){
        console.error(error)
    }
  };
  return (
    <section>
      <h1>Lista de tareas</h1>
      <form onSubmit={enviarTarea}>
        <input
          type="text"
          name="nombretarea"
          placeholder="ingrese la tarea"
          onChange={(e) => setNmbreTarea(e.target.value)}
        />
        <button>añadir</button>
      </form>
    </section>
  );
}

export default Tareas;
