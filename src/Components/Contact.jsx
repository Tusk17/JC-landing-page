import React, { useState } from "react";
import swal from 'sweetalert';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        msg: ""
    })

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        });
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        // message can be saved to db or email can be sent from here!
        
        swal("¡Enviado! (En realidad no, pero la animación está bonita, en construcción)", "¡Mensaje entregado exitosamente!", "success");
    }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contactar</h1>
      </div>
      <div className="contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitHandle}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Dirección Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="msg" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="msg"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary mt-3" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
