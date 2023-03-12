import React, { useState, useEffect } from 'react';
import home from "../images/JCCV-Logo.png";
import Common from './Common';
import FooterBanner from './FooterBanner';
import InfoBanner from './InfoBanner';

const Home = () => {
    const [texts] = useState(['Trainee Programador Backend', '¿Trainee Programador FrontEnd?', '¿¿¿Trainee Programador FullStack???', 'BackEnd, de preferencia :)']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        if (typingComplete) {
            return;
        }

        const currentText = texts[currentIndex];
        let index = 0;
        let timeout = null;

        const type = () => {
            if (index < currentText.length) {
                // Agrega una letra al texto
                setTypedText(currentText.substring(0, index + 1));
                index++;
                timeout = setTimeout(type, 100);
            } else {
                // Termina de escribir el texto actual y cambia al siguiente
                clearTimeout(timeout);

                if (currentIndex === texts.length - 1) {
                    // Si es el último texto, marca como completo
                    setTypingComplete(true);
                } else {
                    setTimeout(() => {
                        setCurrentIndex((currentIndex + 1) % texts.length);
                        setTypedText('');
                    }, 1500);
                }
            }
        };


        type();

        // Limpia el timeout en el desmontaje del componente para evitar fugas de memoria
        return () => {
            clearTimeout(timeout);
        };
    }, [texts, currentIndex, typingComplete]);

    const [typedText, setTypedText] = useState('');

    return (
        <>
            <div className="common-container">
                <Common
                    name='Juan Carlos Castillo Vallejo.'
                    imgsrc={home}
                    isCompName={true}
                    compName={typedText}
                    visit='/services'
                    btnname="Comienza"
                />
            </div>
            <InfoBanner />
            <FooterBanner></FooterBanner>
        </>
    )
}

export default Home;
