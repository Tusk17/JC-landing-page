import React from 'react';

const Common = ({
    name,
    imgsrc,
    isCompName,
    compName,
    visit,
    btnname
}) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center common-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> 
                                    {name}
                                    {isCompName ? <strong className="brand-name"> {compName}</strong> : ""}
                                    
                                </h1>
                                <h2 className="my-3">
                                Saludos, gracias por visitar este sitio. Aquí podrás conocer un poco más de tu 
                                próximo miembro del equipo, así como de sus proyectos, metas 
                                y quizás algo más. Animate, nos conviene a todos ;)
                                </h2>
                                <div className="mt-3">
                                    {//<NavLink to="" className="btn-get-started ">    </NavLink>
                                    }
                                    <a href="https://drive.google.com/file/d/1FxaU0MBbNjwc4AAdaSk23CAvcbhC-efd/view?usp=share_link" className="btn-get-started" download>Descargar CV</a>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-image">
                                <img src={imgsrc} className="img-fluid animated" alt="Home Img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Common;
