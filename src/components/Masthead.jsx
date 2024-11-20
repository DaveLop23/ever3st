import React from 'react';

const Masthead = () => {
  return (
    <header className="masthead" id="home">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            {/* Masthead text and app badges */}
            <div className="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 className="display-1 lh-1 mb-3">
                Impulsamos tu marca al siguiente nivel con creatividad y estrategia.
              </h1>
              <p className="lead fw-normal text-muted mb-5">
                "Tu mensaje, nuestra creatividad: resultados que impactan"
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            {/* Masthead device mockup feature */}
            <div className="masthead-device-mockup">
              <svg
                className="circle"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                    <stop
                      className="gradient-start-color"
                      offset="0%"
                      stopColor="#F06C82"
                    ></stop>
                    <stop
                      className="gradient-mid-color-1"
                      offset="33%"
                      stopColor="#01B6F9"
                    ></stop>
                    <stop
                      className="gradient-mid-color-2"
                      offset="66%"
                      stopColor="#149E2E"
                    ></stop>
                    <stop
                      className="gradient-end-color"
                      offset="100%"
                      stopColor="#FB6D0E"
                    ></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="url(#circleGradient)"></circle>
              </svg>
              <svg
                className="shape-1 d-none d-sm-block"
                viewBox="0 0 240.83 240.83"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(120.42 -49.88) rotate(45)"
                ></rect>
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(-49.88 120.42) rotate(-45)"
                ></rect>
              </svg>
              <svg
                className="shape-2 d-none d-sm-block"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <div className="device-wrapper">
                <div
                  className="device"
                  data-device="iPhoneX"
                  data-orientation="portrait"
                  data-color="black"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </header>
  );
};

export default Masthead;