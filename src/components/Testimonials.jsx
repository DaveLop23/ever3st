import React from 'react';
import placehoderImg from '../assets/img/placehoderImg.jpg';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-5 bg-light">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col">
                        <h2 className="font-alt-5">Lo que nuestros clientes dicen de nosotros</h2>
                        <p className="text-muted">Descubre cómo Ever3st Group ha ayudado a sus clientes.</p>
                    </div>
                </div>
                <br />
                <div className="row g-4">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="feature-card text-center p-4 h-100 shadow-sm">
                            <div className="card-body">
                                <img
                                    src= {placehoderImg}
                                    className="rounded-circle mb-3"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                                <h5 className="fw-bold">Placehoder Name</h5>
                                {/* <p className="text-muted">CEO de Empresa X</p> */}
                                <p>"Ever3st Group transformó nuestra estrategia de publicidad y duplicamos nuestros resultados."</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="feature-card text-center p-4 h-100 shadow-sm">
                            <div className="card-body">
                                <img
                                    src= {placehoderImg}
                                    className="rounded-circle mb-3"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                                <h5 className="fw-bold">Placehoder Name</h5>
                                {/* <p className="text-muted">Directora de Marketing en Compañía Y</p> */}
                                <p>"Gracias a su equipo, logramos campañas más creativas y efectivas que conectaron con nuestra audiencia."</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="feature-card text-center p-4 h-100 shadow-sm">
                            <div className="card-body">
                                <img
                                    src= {placehoderImg}
                                    className="rounded-circle mb-3"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                                <h5 className="fw-bold">Placehoder Name</h5>
                                {/* <p className="text-muted">Fundador de Startup Z</p> */}
                                <p>"El enfoque innovador de Ever3st Group marcó la diferencia en nuestro lanzamiento al mercado."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
