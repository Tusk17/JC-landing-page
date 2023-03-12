import React from "react";

const InfoBanner = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 text-center">
                        <h2 className="text-uppercase mb-3">¿Quién soy?</h2>
                        <p className="lead mb-4">
                        Una persona que está aprendiendo programación y está en busca de oportunidades para convertirse en un programador Junior.
                        Tengo un fuerte compromiso con mi trabajo y valoro trabajar de manera estructurada. 
                        Uno de mis objetivos es mejorar mis habilidades y contribuir más al ingreso del hogar,
                        lo cual me motiva a seguir perfeccionándome en este campo.
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
