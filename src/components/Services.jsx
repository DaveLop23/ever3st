import React from 'react';
import service1 from '../assets/img/service1.png';
import service2 from '../assets/img/service2.png';
import service3 from '../assets/img/service3.png';
import service4 from '../assets/img/service4.png';

const services = [
  {
    img: service1,
    alt: "Diseño y gestión de redes sociales",
    title: "Diseño y gestión de redes sociales",
    description: "En Ever3st Group, entendemos que las redes sociales son la vitrina principal para conectar con tu audiencia y construir una comunidad fiel alrededor de tu marca."
  },
  {
    img: service2,
    alt: "Producción visual",
    title: "Producción visual",
    description: "Fotografía, video y tomas con dron diseñadas para capturar la esencia de tu marca desde ángulos innovadores."
  },
  {
    img: service3,
    alt: "Branding",
    title: "Branding",
    description: "Nuestro servicio de branding desarrolla una identidad única que conecta con tu audiencia y refleja los valores y visión de tu empresa."
  },
  {
    img: service4,
    alt: "Menú, invitaciones y papelería corporativa",
    title: "Menú, invitaciones y papelería corporativa",
    description: "Ofrecemos diseño y producción adaptados a la esencia y necesidades de tu negocio para destacar cada detalle visual."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light" style={{ fontFamily: '"Commissioner", sans-serif' }}>
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col">
            <h1 className="display-1 lh-1 mb-3 fw-bolder text-gradient">  Conoce nuestros servicios. </h1>
            <p className="lead fw-normal text-muted mb-5"> ❝ Descubre cómo Ever3st Group puede potenciar tu marca con estrategias creativas y efectivas ❞ </p>
          </div>
        </div>

        {/* Sección de servicios */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature-card text-center p-4 h-100 shadow-sm" style={{ backgroundColor: '#e9ecef' }}>
                <img
                  src={service.img}
                  alt={service.alt}
                  loading="lazy"
                  className="mb-3 img-fluid"
                  style={{ width: '30%', height: '30%', objectFit: 'contain' }}
                />
                <h3 className="font-alt">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;