import { useNavigate } from "react-router-dom";
import { Logout } from "../utils/auth.jsx";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout();
    navigate("/");
  };
  return (
    <nav className="navbar">
      <span className="navbar-title">Admin Perpustakaan</span>
      <button className="btn-logout" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
