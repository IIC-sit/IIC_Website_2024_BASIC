import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <header className="header">
  <nav className="navbar">
    <div className="logo">
      <img src="IIC-logo (1).jpeg" alt="IIC Logo" className="logo-image" />
      <h1>Institution's Innovation Council</h1>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
</header>


        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
