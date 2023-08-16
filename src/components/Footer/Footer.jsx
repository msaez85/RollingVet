import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import {IoLocationOutline} from "react-icons/io5";
import "./footer.css";

function Footer() {
  return (
    <>
      <Tabs
        defaultActiveKey="contact"
        id="uncontrolled-tab-example"
        className="tabs nav-justified"
      >
        
        <Tab eventKey="home" title="Telefonos" className="telefono">
          <div className="feo"> 
            <ImPhone />
            <p>Sucursal Centro:+543815486688</p>
            <p>Lunes a Sabado:8 a 20 Hs</p>
          </div>

          <div>
            {" "}
            <ImPhone />
            <p>Emergenicas 24Hs:+54381489978</p>
            <p></p>
          </div>

          <div>
            <ImPhone />
            <p>Sucursal Yerba Buena:+543813881133</p>
            <p>Lunes a Sabado:8 a 20 Hs</p>
          </div>
        </Tab>
        
        <Tab eventKey="contact" title="Redes" className="redes">
          <div>
            <a href="/404"><ImFacebook2 /></a>
            
            <h4>Facebook</h4>
          </div>
          <div>
            <a href="/404"><ImInstagram /></a>
            <h4>Instagram</h4>
          </div>
          <div>
            <a href="/404"><ImLinkedin /></a>
            <h4>Linkedin</h4>
          </div>
          
        </Tab>
        <Tab eventKey="profile" title="Locales" className="mapa">
          {/* <iframe
            className="border border-1 rounded"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d9783.526015723482!2d-65.20169509883819!3d-26.828648763243084!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sus!4v1689040573391!5m2!1ses-419!2sus"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <div className="locales">
          <a href="https://goo.gl/maps/xu3WNsDnj9j4qc5S9"><IoLocationOutline/></a>
          <p>AV Belgrano 756 , SMT</p>
          <p>Lun a Sab : 8 a 20 Hs</p>
          
          </div>
          
          <div className="locales">
            <a href="https://goo.gl/maps/hEvd1vrJXoo4Ecqt9"><IoLocationOutline/></a>
            
          <p>AV Peron 2000 , YB</p>
          <p>Lun a Sab : 8 a 20 Hs</p>
          
          </div>
          
          
        </Tab>
      </Tabs>
      <div className="texto">
        <p>© 2023 RollingVet. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
