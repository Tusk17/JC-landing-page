import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import FooterBanner from './FooterBanner';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'PortfolioReact',
        'template_galpqts',
        e.target,
        '9Q99NtYeAEwMPUc36'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('¡Mensaje enviado!');
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('Al parecer hubo un error. Intenta de nuevo por favor.');
        }
      );
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <div className="contact-container">
      <h1>Contáctame/Contact me</h1>
      {statusMessage && <p>{statusMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name/Nombre:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message/Mensaje:</label><p></p>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send/Enviar</button>
      </form>
    </div>
    <FooterBanner></FooterBanner>
    </>
  )
}

export default Contact;
