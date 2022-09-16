import React from "react";

const Contacto = () => {
  return (
    <div className="contaier-fluid text-center pt-4">
      <h3>Cuéntanos, ¿en qué podemos ayudarte?</h3>
      <div className="formulario">
        <form>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="tucorreo@tucorreo.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Cuéntanos, ¿en que podemos ayudarte?"
            />
          </div>
          <button type="submit" className="btn-enviar">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
