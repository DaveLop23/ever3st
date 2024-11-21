import React from 'react';
import pricingPromo from '../assets/img/pricingPromo.png';
import pricingRibbon from '../assets/img/pricingRibbon.png';
import basicPlan from '../assets/img/basicPlan.png';
import intermediatePlan from '../assets/img/intermediatePlan.png';
import advancePlan from '../assets/img/advancePlan.png';

const plans = [
  {
    img: basicPlan,
    alt: "basicPlan",
    bgColor: "#E76880",
    features: [
      "6 Publicaciones al mes",
      "Diseño de imagen de portada",
      "Diseño de imagen de perfil",
      "Configuración de Redes Sociales"
    ],
    boldFeatures: [
      "Administración de campañas publicitarias",
      "Pauta Publicitaria por 10 días"
    ],
    disclaimer: "* Asesoramiento gratuito"
  },
  {
    img: intermediatePlan,
    alt: "intermediatePlan",
    bgColor: "#029544",
    features: [
      "12 Publicaciones al mes",
      "Diseño de imagen de portada",
      "Diseño de imagen de perfil",
      "Configuración de Redes Sociales",
      "Optimización de WhatsApp Business"
    ],
    boldFeatures: [
      "Administración de campañas publicitarias",
      "Pauta Publicitaria por 20 días"
    ],
    disclaimer: "* Asesoramiento gratuito"
  },
  {
    img: advancePlan,
    alt: "advancePlan",
    bgColor: "#01A6DC",
    features: [
      "20 Publicaciones al mes",
      "Diseño de imagen de portada",
      "Diseño de imagen de perfil",
      "Configuración de Redes Sociales",
      "Optimización de WhatsApp Business"
    ],
    boldFeatures: [
      "Administración de campañas publicitarias",
      "Pauta Publicitaria por 30 días"
    ],
    disclaimer: "* Asesoramiento gratuito"
  }
];

const Plans = () => {
  return (
    <>
      <section id="plans" className="py-5 bg-light" style={{ paddingBottom: -10, fontFamily: '"Commissioner", sans-serif' }}>
        <h1 className="display-1 lh-1 mb-4 fw-bolder  text-center text-gradient">  ¡Que tu negocio destaque! </h1>
        <div className="container-fluid text-center" style={{ backgroundColor: '#01A6DC', overflowX: 'hidden' }}>
          <div className="row justify-content-center align-items-center">
            <div className="col-auto">
              <img
                src={pricingRibbon}
                alt="pricingRibbon"
                loading="lazy" 
                className="img-fluid"
                style={{ maxHeight: '130px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" style={{ fontFamily: '"Commissioner", sans-serif' }}>
        <div className="container">
          <div className="row gx-4 gy-5">
            {plans.map((plan, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="d-flex justify-content-center mb-3">
                  <img 
                  loading="lazy" 
                  src={plan.img} alt={plan.alt} className="i" />
                </div>
                <div className="card p-4 shadow-sm" style={{ backgroundColor: plan.bgColor }}>
                  <ul className="list-unstyled fw-light text-white">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}> - {feature} </li>
                    ))}
                  </ul>
                  <ul className="list-unstyled fw-bolder text-white">
                    {plan.boldFeatures.map((boldFeature, idx) => (
                      <li key={idx}> - {boldFeature} </li>
                    ))}
                  </ul>
                  <p className="list-unstyled fw-light text-white">{plan.disclaimer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans;
