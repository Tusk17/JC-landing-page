import React from 'react';
import home from "../images/turing.jpg";
import Common from './Common';
import Employees from './Employees';
import FooterBanner from './FooterBanner';
import InfoBanner from './InfoBanner';
import Services from './Services';

const Home = () => {
    return (
        <>
        <div className="common-container">
            <Common 
                name='Bienvenido' 
                imgsrc={home}
                isCompName={true}
                compName="Hacemos los datos fáciles de usar"
                visit='/services' 
                btnname="Comienza" 
            />
            </div>
            <InfoBanner/>
            <Services/>
            <Employees></Employees>
            <FooterBanner></FooterBanner>
        </>
    )
}

export default Home;