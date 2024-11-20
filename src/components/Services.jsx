import React from 'react';
import service1 from '../assets/img/service1.png';
import service2 from '../assets/img/service2.png';
import service3 from '../assets/img/service3.png';
import service4 from '../assets/img/service4.png';


const Services = () => {
    return (
        <section id="services" className="py-5 bg-light">
            <div className="container px-5">
                <div className="row text-center mb-5">
                    <div className="col">
                        <h2 className="font-alt">Nuestros Servicios</h2>
                        <p className="text-muted">
                            Descubre cómo Ever3st Group puede potenciar tu marca con estrategias creativas y efectivas.
                        </p>
                    </div>
                </div>
                {/* Sección de dos columnas */}
                <div className="row gx-5">
                    {/* Columna 1: Sección de servicios */}
                    <div className="col-md-12">
                        <div className="row gx-4 gy-5">
                            <div className="col-md-6 col-lg-4">
                                <div className="feature-card text-center p-3 h-100 shadow-sm">
                                    <img
                                        src={service1} 
                                        alt="Service 1"
                                        className="mb-3"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                    <h3 className="font-alt">Diseño y gestión de redes sociales</h3>
                                    <p className="text-muted">
                                        En Ever3st Group, entendemos que las redes sociales son la vitrina principal para conectar con tu
                                        audiencia y construir una comunidad fiel alrededor de tu marca.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="feature-card text-center p-4 h-100 shadow-sm">
                                    <img
                                        src={service3} 
                                        alt="Service 2"
                                        className="mb-3"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                    <h3 className="font-alt">Branding</h3>
                                    <p className="text-muted">
                                        Nuestro servicio de branding desarrolla una identidad única que conecta con tu audiencia y refleja
                                        los valores y visión de tu empresa.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="feature-card text-center p-4 h-100 shadow-sm">
                                    <img
                                        src={service4} 
                                        alt="Service 3"
                                        className="mb-3"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                    <h3 className="font-alt">Menú, invitaciones y papelería corporativa</h3>
                                    <p className="text-muted">
                                        Ofrecemos diseño y producción adaptados a la esencia y necesidades de tu negocio para destacar cada
                                        detalle visual.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 mx-auto">
                                <div className="feature-card text-center p-4 h-100 shadow-sm">
                                    <img
                                        src={service2} 
                                        alt="Service 4"
                                        className="mb-3"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                    <h3 className="font-alt">Producción visual</h3>
                                    <p className="text-muted">
                                        Fotografía, video y tomas con dron diseñadas para capturar la esencia de tu marca desde ángulos
                                        innovadores.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
