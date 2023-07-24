import "./servicios.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function Servicos() {
  return (
    <>
    <div data-aos="fade-up">
      <div >
        <h2 style={{ textAlign: "center", margin: "2rem", color: "#F7AB26" }}>
          NUESTROS SERVICIOS
        </h2>
      </div>
      <CardGroup >
        <Card>
          <Card.Img
            variant="top"
            src="https://sumimascotas.com/wp-content/uploads/2023/05/7.-Que-es-una-peluqueria-canina-1.jpg"
          />
          <Card.Body>
            <h4>Peluqueria</h4>
            <Card.Text>
              Con baño y corte de pelo deacuerdo a cada raza.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img 
            variant="top"
            src="https://www.clinicaveterinariaejea.com/wp-content/uploads/2014/05/clinica_veterinaria_ejea_073-1024x682.jpeg"
          />
          <Card.Body>
            <h4>Cirugias</h4>
            <Card.Text>
              Contamos con guardias,rayos X, ecografias y colocacion de chips.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.sudoesteba.com/adjuntos/800/sudoba/2023/04/cloudfrontuseast1.images.arcpublishing-2.png"
          />
          <Card.Body>
            <h4>Vacunacion</h4>
            <Card.Text>
              Respetando el calendario de vacunacion de cada animal.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://1.bp.blogspot.com/-HrfjrldTqI0/YKGj4BEcuvI/AAAAAAAAKd4/61vZpkKOtw0epE6fGz_fLAv9PWdz-T7lQCLcBGAsYHQ/w1200-h630-p-k-no-nu/pet-shop-online.jpg"
          />
          <Card.Body>
            <h4>Pet Shop</h4>
            <Card.Text>
              Los mejores productos para su mascota
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <div className="ver">
        <Button variant="primary">Ver Mas</Button>{" "}
      </div>
      </div>
    </>
  );
}

export default Servicos;
