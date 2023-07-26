import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import "./testimonios.css";

function Testimonios() {
  return (
    <>
    <div data-aos="fade-up">
    <h3 style={{ textAlign: "center", marginTop: "1rem", color: "rgb(211, 98, 22)" }}>NUESTROS CLIENTES</h3>
    <div className="cartas">
     <Card className="text-center">
      <Card.Header>Marcos</Card.Header>
      <Card.Body>
      <Figure>
      <Figure.Image className='rounded-3'
        width={171}
        height={180}
        alt="171x180"
        src="https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg"
      />
    </Figure>
        <Card.Text>
          "Excelente atencion y profesionalismo"
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>

    <Card className="text-center">
      <Card.Header>Claudia</Card.Header>
      <Card.Body>
      <Figure>
      <Figure.Image className='rounded-3'
        width={171}
        height={180}
        alt="171x180"
        src="https://img.aeroexpo.online/images_ar/projects/images-g/elevar-perfil-mujeres-ingenieria-6393-14652745.jpg"
      />
    </Figure>
        <Card.Text>
          "Productos de calidad y buena atencion"
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">5 days ago</Card.Footer>
    </Card>

    <Card className="text-center">
      <Card.Header>Ruben</Card.Header>
      <Card.Body>
      <Figure>
      <Figure.Image className='rounded-3'
        width={171}
        height={180}
        alt="171x180"
        src="https://media.licdn.com/dms/image/sync/C4D27AQFtfU0Eie2OYQ/articleshare-shrink_800/0/1688497200979?e=1690239600&v=beta&t=zbmIxegQu0R-tsT4oN9j45E2M9Wqy6NJH10kfzp246M"
      />
    </Figure>
        <Card.Text>
          "La mejor cobertura para tu mascota"
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">6 days ago</Card.Footer>
    </Card>
    </div>
    </div>

    </>
  );
}

export default Testimonios;
