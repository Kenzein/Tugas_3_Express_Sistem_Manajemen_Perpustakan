import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { isLogin } from "./utils/auth.jsx";
import Books from "./pages/Books.jsx";
import AddBook from "./pages/AddBooks.jsx";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogin() ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={isLogin() ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/buku"
          element={isLogin() ? <Books /> : <Navigate to="/" />}
        />
        <Route
          path="/buku/add"
          element={isLogin() ? <AddBook /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
