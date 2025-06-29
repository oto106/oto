import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" style={scrolled ? { background: "rgba(255,255,255,0.97)", boxShadow: "0 8px 32px 0 rgba(251,158,58,0.13)" } : {}}>
      <div className="navbar-inner">
        {/* Logo and Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.7)', boxShadow: '0 2px 8px 0 rgba(251,158,58,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fb9e3a',
          }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" className="navbar-logo" style={{ width: 32, height: 32, borderRadius: '50%' }} />
          </div>
          <span className="navbar-brand" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-1.5px', fontWeight: 900, fontSize: '2.1rem', color: '#fb9e3a', textShadow: '0 2px 8px rgba(251,158,58,0.10)' }}>ANAGI</span>
        </div>
        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>მთავარი</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>პროექტები</NavLink>
          </li>
          <li>
            <NavLink to="/company" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>ჩვენ შესახებ</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>კონტაქტი</NavLink>
          </li>
        </ul>
        {/* Hamburger for mobile */}
        <button
          className={`navbar-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="navbar-mobile-menu" style={{ animation: 'fadeIn 0.4s' }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', fontSize: 32, color: '#fb9e3a', cursor: 'pointer', zIndex: 100
            }}
            aria-label="Close menu"
          >
            &times;
          </button>
          <NavLink to="/" end className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>
            მთავარი
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>
            პროექტები
          </NavLink>
          <NavLink to="/company" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>
            ჩვენ შესახებ
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>
            კონტაქტი
          </NavLink>
        </div>
      )}
      <style>{`
        .navbar-link {
          position: relative;
          overflow: hidden;
        }
        .navbar-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 6px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #fb9e3a 0%, #ff6a00 100%);
          transition: width 0.3s, left 0.3s;
        }
        .navbar-link:hover::after {
          width: 80%;
          left: 10%;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
