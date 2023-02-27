import React from 'react'
import about from "../images/about.svg";
import Common from './Common'

const About = () => {
    return (
        <>
        <div className="common-container">
            <Common 
                name='Bienvenido, conóceme' 
                imgsrc={about} 
                btnname="Contactar ahora" 
            />
            </div>
            <br></br>
            <br />
            <br />
        </>
    )
}

export default About;
