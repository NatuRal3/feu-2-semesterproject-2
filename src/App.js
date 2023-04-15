import "./App.css";
import "./sass/style.scss";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Logout from "./pages/Logout.js";
import Profile from "./pages/Profile";
import Navnav from "./components/Header";
import Listings from "./pages/Listings";
import NewListing from "./pages/NewListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navnav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listing" element={<Listings />} />
        <Route path="/newlisting" element={<NewListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
