import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound  from "./components/NotFound";
import Signup from "./components/Signup"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

function App() {
  const [adminUsers, setAdminUsers] = useState([{name: "", email: "", password: ""}]);
  const [user, setUser] = useState({name: "", email: "", password: ""});
  const [error, setError] = useState("");

  const isUserloggedIn = (() => {
    if (user.email !== "") {
      return true;
    } else {
      return false;
    }
  })();

  const login = (value) => {
  
    adminUsers.forEach(user => { if(user.email === value.email && user.password === value.password) {
      setUser({
        name: value.username,
        email: value.email,
        password: value.password
      });
    } else {
      setError("email or password incorrect!");
    }
  });
}

const signup = (newValue) => {
  setAdminUsers((prevValues) => [...prevValues, {name: newValue.name, email: newValue.email, password: newValue.password}])
}

  const logout = () => {
    setUser({
      email: "",
      password: ""
    })
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {isUserloggedIn && <Route path="/login" element={<Navigate to="/"/>} />}
        <Route path="/" element={<Home logout={logout} isUserloggedIn={isUserloggedIn} userName={user.name}/>} />
        <Route path="/login" element={<Login login={login} error={error} />} />
        <Route path="/signup" element={<Signup signup={signup} />} />
        <Route path="/signup" element={<Signup signup={signup} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
