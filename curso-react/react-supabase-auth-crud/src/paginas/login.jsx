import { useEffect, useState } from "react";
import { client } from "../Supabase/client";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await client.auth.signInWithOtp({ email });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    client.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/');
      }
    });
  }, [navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="suemail@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Login;