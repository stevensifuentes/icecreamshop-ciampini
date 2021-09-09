import React from 'react';
import './style.css';
import Heladeria from './Heladeria.jpg';
import Estadisticas from '../Estadisticas/Estadisticas';
import Founders from '../Founders/Founders';

const About = (props) => {
    let data = {
        Clientes: 2000,
        Productos: 100,
        Categorias: 10
    }

    return (
        <div style={{
            marginTop: '80px'
        }}>
            <section className="projects-section bg-light w-100" id="projects">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={Heladeria} alt="Foto de heladeria" /></div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center letra">
                                <h4>Te contamos un poco sobre nosotros</h4>
                                <p className="text-black-50 mb-0">Somos la heladería Ciampini, esta heladería fue fundada en el 2021 y tenemos 3 sedes en todo Lima. En este sitio web podrás revisar todo sobre nuestros productos.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '100px'
                    }}>
                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center mt-5">
                        <div className="col-lg-6">
                            <img 
                                width="610" height="361" 
                                src="https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/productos-naturales.jpg" 
                                className="vc_single_image-img attachment-full" 
                                alt="..." 
                                loading="lazy" 
                                srcSet="https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/productos-naturales-200x101.jpg 200w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/productos-naturales-300x151.jpg 300w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/productos-naturales-400x201.jpg 400w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/productos-naturales-540x272.jpg 540w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/productos-naturales-600x302.jpg 600w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/productos-naturales.jpg 717w" sizes="(max-width: 717px) 100vw, 717px" />
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project rounded-pill">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4>Misión</h4>
                                        <p className="mb-0">Dejarte a gusto con cada sabor de helados que tengamos y brindarte el mejor servicio.</p>
                                        <hr className="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 justify-content-center">
                        <div className="col-lg-6">
                            <img 
                                width="610" height="361" 
                                src="https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/helados-artesanales.jpg"
                                className="vc_single_image-img attachment-full" 
                                alt="..." 
                                loading="lazy" 
                                srcSet="https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/helados-artesanales-200x101.jpg 200w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/helados-artesanales-300x151.jpg 300w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/helados-artesanales-400x201.jpg 400w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/helados-artesanales-540x272.jpg 540w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/helados-artesanales-600x302.jpg 600w, https://www.heladeriaelgulus.com/wp-content/uploads/2018/06/helados-artesanales.jpg 717w" sizes="(max-width: 717px) 100vw, 717px" />
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project rounded-pill">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4>Visión</h4>
                                        <p className="mb-0">Ser la heladería favorita de todos, reconocidos internacionalmente y aceptado por todo el publico en general.</p>
                                        <hr className="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </section>
            <Estadisticas
                numeros={Object.values(data)}
                cadena={Object.keys(data)}
            />
            <Founders />
        </div>
    );
}

export default About;