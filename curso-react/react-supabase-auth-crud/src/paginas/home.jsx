import { useEffect } from "react";
import { client } from "../Supabase/client";
import { useNavigate } from "react-router-dom";
import Tareas from "../components/tareas"
export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    client.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login');
      }
    });
  }, [navigate]);

  return (
    <div>
      <h1>Hola</h1>
      <button onClick={() => client.auth.signOut()}>Desconectarse</button>
      <Tareas></Tareas>
    </div>
  );
}