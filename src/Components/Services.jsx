import React from "react";
import "../styles/Services.css";
import FooterBanner from "./FooterBanner";

const projects = [
    {
        id: 1,
        title: "Este sitio",
        image: "https://media-asgard.s3.eu-west-1.amazonaws.com/23/03/12/bead71b6-9983-4a07-8c12-5f76566b49c0_jccv-logo.png",
        summary: "Este proyecto comenzó como parte de una prueba técnica en la que afortunada o desafortunadamente no fuí seleccionado, así que decidí usar lo aprendido para desarrollar este portafolio.",
        technologies: ["React", "Node.js","Netlify","EmailJS"],
        link: "https://github.com/Tusk17/JC-landing-page",
    },
    {
        id: 2,
        title: "MINIMAL API",
        image: "https://andrewlock.net/content/images/2021/banner_aspnetcore6.png",
        summary: "Este proyecto aprovecha la nueva forma de crear API´s usando .Net Core 6, genera documentación de manera automática con Swagger, se comunica con una BD PostgreSQL y realiza operaciones CRUD sencillas.",
        technologies: ["MINIMAL API", ".Net Core 6", "C#","PostgreSQL","Swagger"],
        link: "https://github.com/Tusk17/MinimalAPI",
    },
    {
        id: 3,
        title: "Compilador Reeves",
        image: "https://media-asgard.s3.eu-west-1.amazonaws.com/23/01/25/58199bae-ad7a-4d79-a22d-a82fd3c715ce_logo3d.png",
        summary: "Proyecto escolar. Compilador enfocado en enseñar  el lenguaje de programación java a personas con autismo grado 1",
        technologies: ["C#", "Java","Figma"],
        link: "https://github.com/Tusk17/C-Reeves",
    },
    {
        id: 4,
        title: "PoMeCI",
        image: "https://media-asgard.s3.eu-west-1.amazonaws.com/23/01/25/1968e0ef-bdc2-4709-9468-80f27d7ab231_logob.png",
        summary: "Proyecto escolar. Aplicación Android de información, podcast y citas médicas, los marcadores y citas de cada usuario son almacenados en una BD NOSQL Firebase, utiliza tanto RealtimeDB como FireStore",
        technologies: ["Android Studio", "Java", "XML","Firebase","Figma"],
        link: "https://github.com/Tusk17/PoMeCI",
    },
];

const Services = () => {
    return (
        <>
            <p></p>
            <h1>Proyectos destacados</h1>
            <p></p>
            <div className="services-container">
                {projects.map((project) => (
                    <div className="services-card" key={project.id}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} style={{ maxWidth: '150px', height: 'auto' }} />
                        <p>{project.summary}</p>
                        <ul>
                            {project.technologies.map((technology) => (
                                <li key={technology}>{technology}</li>
                            ))}
                        </ul>
                        <a href={project.link}>Ver Proyecto/Repositorio</a>
                    </div>
                ))}
            </div>
            <FooterBanner></FooterBanner>
        </>
    );
};

export default Services;
