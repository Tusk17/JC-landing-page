import React from "react";

const InfoBanner = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 text-center">
                        <h2 className="text-uppercase mb-3">¿Qué realizamos?</h2>
                        <p className="lead mb-4">
                            Contribuimos con su empresa para mejorar la toma de decisiones a
                            través de sus datos.
                        </p>
                        <a
                            href="https://www.turing-ia.com/services.php"
                            className="btn btn-primary btn-lg"
                        >
                            Más información
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoBanner;
