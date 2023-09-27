import React from 'react';
import './contacto.css';

const Contacto = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-5">Contáctanos</h1>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Nombre" required />
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend"></div>

                <select className="form-control">
                  <option value="USA">🇺🇸 +1</option>
                  <option value="ARG">🇦🇷 +54</option>
                  <option value="MEX">🇲🇽 +52</option>
                  <option value="BRA">🇧🇷 +55</option>
                </select>
                <input type="text" className="form-control" placeholder="Número telefónico" required />
              </div>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Comentario o consulta" required />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Enviar
            </button>
          </form>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            // src="https://i.postimg.cc/90W6xbqn/perros-vivir-mas-anos-1669733501-removebg-preview.png"  //foto sin color
            src="https://i.postimg.cc/mDmctpHT/perros-vivir-mas-anos-1669733501-removebg-preview-1.png" //foto color rojo
            alt="Perro"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacto;