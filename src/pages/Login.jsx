import api from "../api/axios.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
      console.log("Hello world");
    } catch (err) {
      alert(err.response?.data?.message || "Login Gagal");
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleLogin}>
          <h2>Login Admin</h2>
          <input
            placeholder="Username"
            className="input-box"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-box"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
