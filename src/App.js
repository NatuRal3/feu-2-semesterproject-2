import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./sass/style.scss";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Logout from "./pages/Logout.js";
import Profile from "./pages/Profile";
import Navnav from "./components/Header";
import Listings from "./pages/Listings";
import NewListing from "./pages/NewListing";
import ListingPage from "./pages/ListingPage";

function App() {
  return (
    <BrowserRouter>
      <Navnav />
      <Routes>
        <Route path="/" index element={<Listings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/newlisting" element={<NewListing />} />
        <Route path="/listing/:listingId" element={<ListingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
