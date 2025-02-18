import "./App.css";
import Home from "./paginas/home";
import Login from './paginas/login';
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./paginas/NotFound";
import { client } from "./Supabase/client";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = client.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login');
      } else {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;