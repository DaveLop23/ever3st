import React from 'react';
import placehoderImg from '../assets/img/placehoderImg.jpg';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Placeholder Name 1',
            image: placehoderImg,
            testimonial: 'Ever3st Group transformó nuestra estrategia de publicidad y duplicamos nuestros resultados.',
            position: 'CEO de Empresa X'
        },
        {
            name: 'Placeholder Name 2',
            image: placehoderImg,
            testimonial: 'Gracias a su equipo, logramos campañas más creativas y efectivas que conectaron con nuestra audiencia.',
            position: 'Directora de Marketing en Compañía Y'
        },
        {
            name: 'Placeholder Name 3',
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
                        <h1 className="display-1 lh-1 mb-3 fw-bolder text-gradient">Lo que nuestros clientes dicen de nosotros</h1>
                        <p className="lead fw-normal text-muted mb-5">
                            ❝ Descubre cómo Ever3st Group ha ayudado a sus clientes ❞
                        </p>
                    </div>
                </div>

                {/* Testimonios */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {testimonials.map((testimonial, index) => (
                        <div className="col" key={index}>
                            <div className="feature-card text-center p-4 h-100 shadow-lg" style={{ backgroundColor: '#e9ecef' }}>
                                <div className="card-body">
                                    <img
                                        src={testimonial.image}
                                        loading="lazy"
                                        alt={`Testimonio de ${testimonial.name}`}
                                        className="rounded-circle mb-3 img-fluid"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                    <h5 className="fw-bold">{testimonial.name}</h5>
                                    <p className="text-muted mb-1">{testimonial.position}</p>
                                    <p className="fst-italic">"{testimonial.testimonial}"</p>
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
