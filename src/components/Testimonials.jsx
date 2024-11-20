import React from 'react';
import placehoderImg from '../assets/img/placehoderImg.jpg';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Placehoder Name 1',
            image: placehoderImg,
            testimonial: 'Ever3st Group transformó nuestra estrategia de publicidad y duplicamos nuestros resultados.',
            position: 'CEO de Empresa X'
        },
        {
            name: 'Placehoder Name 2',
            image: placehoderImg,
            testimonial: 'Gracias a su equipo, logramos campañas más creativas y efectivas que conectaron con nuestra audiencia.',
            position: 'Directora de Marketing en Compañía Y'
        },
        {
            name: 'Placehoder Name 3',
            image: placehoderImg,
            testimonial: 'El enfoque innovador de Ever3st Group marcó la diferencia en nuestro lanzamiento al mercado.',
            position: 'Fundador de Startup Z'
        }
    ];

    return (
        <section id="testimonials" className="py-5 bg-light" style={{ fontFamily: '"Commissioner", sans-serif' }}>
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col">
                        <h2 className="font-alt-5">Lo que nuestros clientes dicen de nosotros</h2>
                        <p className="text-muted">Descubre cómo Ever3st Group ha ayudado a sus clientes.</p>
                    </div>
                </div>
                <div className="row g-4">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="feature-card text-center p-4 h-100 shadow-sm">
                                <div className="card-body">
                                    <img
                                        src={testimonial.image}
                                        alt={`Testimonio de ${testimonial.name}`}
                                        className="rounded-circle mb-3 img-fluid"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                    <h5 className="fw-bold">{testimonial.name}</h5>
                                    <p className="text-muted">{testimonial.position}</p>
                                    <p>"{testimonial.testimonial}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
