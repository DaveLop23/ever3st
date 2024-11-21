import React, { useState } from 'react';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const navbarStyle = {
    fontFamily: 'Commissioner, sans-serif',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
      <div className="container px-5 d-flex justify-content-between align-items-center" style={navbarStyle}>
        <a className="navbar-brand fw-bold mx-auto order-1 order-lg-0" href="#page-top" style={navbarStyle}>
          <img src={logo}  loading="lazy"  alt="Ever3st Group" style={{ width: '180px', height: 'auto' }} />
        </a>
        <button
          className="navbar-toggler order-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-menu-down"></i>
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse order-lg-1" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0" style={{ fontWeight: 'bolder', fontFamily: 'Chewy, sans-serif' }}>
            <li className="nav-item">
              <a
                className={`nav-link me-lg-3 ${activeLink === 'home' ? 'active' : ''}`}
                href="#home"
                onClick={() => handleSetActive('home')}
                style={navbarStyle}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link me-lg-3 ${activeLink === 'testimonials' ? 'active' : ''}`}
                href="#testimonials"
                onClick={() => handleSetActive('testimonials')}
                style={navbarStyle}
              >
                Testimonios
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link me-lg-3 ${activeLink === 'services' ? 'active' : ''}`}
                href="#services"
                onClick={() => handleSetActive('services')}
                style={navbarStyle}
              >
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link me-lg-3 ${activeLink === 'plans' ? 'active' : ''}`}
                href="#plans"
                onClick={() => handleSetActive('plans')}
                style={navbarStyle}
              >
                Planes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
