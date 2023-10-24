import React from "react";

const InfoBanner = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 text-center">
                        <h2 className="text-uppercase mb-3">¿Quién soy?</h2>
                        <p className="lead mb-4">
                        Soy un profesional con experiencia en roles como practicante y desarrollador junior. 
                        Mi preferencia y enfoque principal es el desarrollo de Back end, aunque reconozco la importancia
                        de un diseño front end atractivo y una experiencia de usuario óptima, por lo que también tengo 
                        habilidades en esa área. Aunque soy principiante en los procesos ETL, me atraen enormemente 
                        debido a las posibilidades de automatización que ofrecen. Un ejemplo de esto es la extracción 
                        de datos mediante web scrapping, seguido de la limpieza y ordenamiento de estos datos utilizando 
                        algoritmos, para finalmente cargarlos en lotes a una base de datos. Esta es un área en la que 
                        estoy interesado en profundizar y desarrollar aún más mis habilidades.
                        </p>
                        <a
                            href="https://mnf.red/jccv98"
                            className="btn btn-primary btn-lg"
                        >
                            Consulta mi CV web
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoBanner;
