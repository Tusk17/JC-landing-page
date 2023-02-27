import React from "react";

const InfoBanner = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 text-center">
                        <h2 className="text-uppercase mb-3">¿Quién soy?</h2>
                        <p className="lead mb-4">
                            Un practicante de programación buscando oportunidades para convertirse en un programador Junior.
                            Me tomo en serio mi trabajo y me gusta trabajar de manera organizacional. Deseo aportar
                            más a la economía del hogar, es una de mis motivaciones para pulir mis habilidades.
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
