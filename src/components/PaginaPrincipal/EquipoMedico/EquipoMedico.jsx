import React from "react";
import "./equipomedico.css";

const EquipoMedico = () => {
  return (
    <>
    <div style={{backgroundColor:"#E8E8E8"}}>
    <div data-aos="fade-up" className="banner-promo">
        <p>Envios gratis y en el dia para su comodidad</p>
        <div className="pagos">
        <a href="https://postimages.org/" target="_blank">
          <img
            src="https://i.postimg.cc/ctS5LxwZ/amex-2x-png.png"
            alt="amex-2x-png"
          />
        </a>{" "}
        <a href="https://postimages.org/" target="_blank">
          <img
            src="https://i.postimg.cc/Lg3Qqc3P/cencosud-2x-png.png"
            alt="cencosud-2x-png"
          />
        </a>{" "}
        <a href="https://postimages.org/" target="_blank">
          <img
            src="https://i.postimg.cc/V5qVHtPN/maestro-2x-png.png"
            alt="maestro-2x-png"
          />
        </a>{" "}
        <a href="https://postimages.org/" target="_blank">
          <img
            src="https://i.postimg.cc/MvzFkGzm/mastercard-2x-png.png"
            alt="mastercard-2x-png"
          />
        </a>{" "}
        <a href="https://postimages.org/" target="_blank">
          <img
            src="https://i.postimg.cc/bGS60DRp/nativa-2x-png.png"
            alt="nativa-2x-png"
          />
        </a>{" "}
        <a href="https://postimages.org/" target="_blank">
          <img
            src="https://i.postimg.cc/PCxVxFpL/tarjeta-naranja-2x-png.png"
            alt="tarjeta-naranja-2x-png"
          />
        </a>{" "}
        <a href="https://postimages.org/" target="_blank">
          <img
            src="https://i.postimg.cc/gn4BGPJF/tarjeta-shopping-2x-png.png"
            alt="tarjeta-shopping-2x-png"
          />
        </a>{" "}
        <a href="https://postimages.org/" target="_blank">
          <img
            src="https://i.postimg.cc/BjVY1cHm/visa-2x-png.png"
            alt="visa-2x-png"
          />
        </a>
      </div>
      </div>
      
      <div data-aos="fade-up" className="titulo-medicos">
        <h3 style={{ textAlign: "center" }}>Nuestro Equipo</h3>
      </div>

      <div data-aos="fade-up" className="medicos">
        <div>
          <img
            src="https://i.postimg.cc/R0xqGRqz/24-removebg-preview.png"
            alt="saldaña"
          />
          <p>Saldaña Martinez,MP:12713</p>
        </div>

        <div>
        <img
            src="https://i.postimg.cc/rpRCRg3X/16-removebg-preview.png"
            alt="Angel"
          />
          <p>Angel Gonzalo,MP:069846</p>
        </div>

        <div>
        <img
            src="https://i.postimg.cc/sgNbR67t/26-removebg-preview.png"
            alt="Julia"
          />
          <p>Julia Moreno,MP:127569</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default EquipoMedico;
