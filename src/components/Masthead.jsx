import React from 'react';

const Masthead = () => {
  return (
    <header className="masthead" id="home">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            <div className="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 className="display-1 lh-1 mb-3 fw-bolder text-gradient">  Impulsamos tu marca al siguiente nivel con creatividad y estrategia. </h1>
              <br />
              <p className="lead fw-normal text-muted mb-5">
                ❝ Tu mensaje, nuestra creatividad: resultados que impactan ❞
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="masthead-device-mockup">
              <svg
                className="circle"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Gradient Circle"
                role="img"
                width="100%"   // Asegura que el SVG se adapte al contenedor
                height="auto"  // Mantiene la relación de aspecto
                preserveAspectRatio="xMidYMid meet"  // Mantiene la escala proporcional
              >
                <defs>
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F06C82" />
                    <stop offset="33%" stopColor="#01B6F9" />
                    <stop offset="66%" stopColor="#149E2E" />
                    <stop offset="100%" stopColor="#FB6D0E" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="url(#circleGradient)" />
              </svg>

              <svg
                className="shape-1"
                viewBox="0 0 240.83 240.83"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Background Shape 1"
                role="img"
              >
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(120.42 -49.88) rotate(45)"
                />
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(-49.88 120.42) rotate(-45)"
                />
              </svg>

              <svg
                className="shape-2"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Background Shape 2"
                role="img"
              >
                <circle cx="50" cy="50" r="50" />
              </svg>

              <div className="device-wrapper">
                <div
                  className="device"
                  data-device="iPhoneX"
                  data-orientation="portrait"
                  data-color="black"
                  aria-label="Device Mockup"
                  role="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
