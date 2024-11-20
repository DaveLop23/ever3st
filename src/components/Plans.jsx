import React from 'react';
import pricingPromo from '../assets/img/pricingPromo.png';
import pricingRibbon from '../assets/img/pricingRibbon.png';
import basicPlan from '../assets/img/basicPlan.png';
import intermediatePlan from '../assets/img/intermediatePlan.png';
import advancePlan from '../assets/img/advancePlan.png';


const Plans = () => {
  return (
    <>
      <section id="plans" className="py-5 bg-light" style={{ paddingBottom: -10 }}>
        <div className="container-fluid text-center">
          <div className="row justify-content-center align-items-center">
            <div className="col-auto">
              <img
                src= {pricingPromo}
                alt="pricingPromo"
                className="img-fluid"
                style={{ maxHeight: '80%', width: '100%' }}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid text-center" style={{ backgroundColor: '#01A6DC', overflowX: 'hidden' }}>
          <div className="row justify-content-center align-items-center">
            <div className="col-auto">
              <img
                src= {pricingRibbon}
                alt="pricingRibbon"
                className="img-fluid"
                style={{ maxHeight: '130px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-5">
          <div className="col-md-12">
            <div className="row gx-4 gy-5">
              <div className="col-md-6 col-lg-4">
                <div className="d-flex justify-content-center mb-3">
                  <img src= {basicPlan} alt="basicPlan" className="i" />
                </div>
                <div className="card p-4 shadow-sm" style={{ backgroundColor: '#E76880' }}>
                  <ul className="list-unstyled fw-light text-white">
                    <li> - 6 Publicaciones al mes </li>
                    <li> - Diseño de imagen de portada </li>
                    <li> - Diseño de imagen de perfil </li>
                    <li> - Configuración de Redes Sociales </li>
                  </ul>
                  <ul className="list-unstyled fw-bolder text-white">
                    <li> - Administración de campañas publicitarias </li>
                    <li> - Pauta Publicitaria por 10 días </li>
                  </ul>
                  <p className="list-unstyled fw-light text-white">* Asesoramiento gratuito</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="d-flex justify-content-center mb-3">
                  <img src= {intermediatePlan} alt="intermediatePlan" className="i" />
                </div>
                <div className="card p-4 shadow-sm" style={{ backgroundColor: '#029544' }}>
                  <ul className="list-unstyled text-white fw-light text-start mt-3">
                    <li> - 12 Publicaciones al mes </li>
                    <li> - Diseño de imagen de portada </li>
                    <li> - Diseño de imagen de perfil </li>
                    <li> - Configuración de Redes Sociales </li>
                    <li> - Optimización de WhatsApp Business </li>
                  </ul>
                  <ul className="list-unstyled text-white fw-bolder text-start">
                    <li> - Administración de campañas publicitarias </li>
                    <li> - Pauta Publicitaria por 20 días </li>
                  </ul>
                  <p className="text-white fw-normal text-start pricingCard-disclaimer">* Asesoramiento gratuito</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="d-flex justify-content-center mb-3">
                  <img src= {advancePlan} alt="advancePlan" className="i" />
                </div>
                <div className="card p-4 shadow-sm" style={{ backgroundColor: '#01A6DC' }}>
                  <ul className="list-unstyled text-white fw-light text-start mt-3">
                    <li> - 20 Publicaciones al mes </li>
                    <li> - Diseño de imagen de portada </li>
                    <li> - Diseño de imagen de perfil </li>
                    <li> - Configuración de Redes Sociales </li>
                    <li> - Optimización de WhatsApp Business </li>
                  </ul>
                  <ul className="list-unstyled text-white fw-bolder text-start">
                    <li> - Administración de campañas publicitarias </li>
                    <li> - Pauta Publicitaria por 30 días </li>
                  </ul>
                  <p className="text-white fw-normal text-start pricingCard-disclaimer">* Asesoramiento gratuito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans;
