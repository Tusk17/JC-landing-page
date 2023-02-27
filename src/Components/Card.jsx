import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ 
    imgsrc,
    title
}) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Conozca más pulsando el siguiente botón (En construcción, visitar CV Web, botón de arriba)</p>
                        <NavLink to="/" className="btn btn-primary">Visitar</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
