import React from "react";

const InfoBanner = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 text-center">
                        <h2 className="text-uppercase mb-3">¿Quién soy?</h2>
                        <p className="lead mb-4">
                        Una persona que ha desempeñado roles como practicante y desarrollador Jr. Me enfoco y prefiero trabajar con Back end, sin embargo
                        soy consciente de la importancia de un buen diseño front end y la experiencia del usuario por lo que también me desempeño un poco en esa area.
                        Soy principiante en los procesos ETL, pero son un area de interes para mi dada la automatización que se les puede integrar, un ejemplo de esto
                        es la extracción de datos mediante web scrapping, la limpieza y ordenamiento usando algoritmos, para terminar con la subida por lotes a una BD.
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
