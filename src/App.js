import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
// import Gallery from "./pages/Gallery";
// import TBI from "./pages/Tbi"; // TBI import commented
import "./App.css";
import "./Team.css";
import "./About.css";
import "./Events.css";
// import "./Gallery.css";
// import "./Tbi.css"; // TBI styles commented
import "./Contact.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <header className="header">
          <nav className="navbar">
            <div className="logo">
              <img src="IIC-logo (1).jpeg" alt="IIC Logo" className="logo-image" />
            </div>
            <div>
              <h1>SIDDAGANGA INSTITUTE OF TECHNOLOGY, TUMAKURU</h1>
            </div>
            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleMenu}>
              <div className={`bar ${menuOpen ? "open" : ""}`}></div>
              <div className={`bar ${menuOpen ? "open" : ""}`}></div>
              <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            </div>
            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/about" onClick={closeMenu}>About</Link>
              <Link to="/team" onClick={closeMenu}>Team</Link>
              <Link to="/events" onClick={closeMenu}>Events</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
              {/* <Link to="/Tbi" onClick={closeMenu}>TBI</Link> */}
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/Tbi" element={<TBI />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
