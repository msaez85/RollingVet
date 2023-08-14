import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import "./testimonios.css";
import { Carousel } from "react-bootstrap";

const testimoniosData = [
  {
    name: "Marcos",
    imageSrc:
      "https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg",
    testimonio: '"Excelente atención y profesionalismo..."',
    date: "2 days ago",
  },
  {
    name: "Claudia",
    imageSrc:
      "https://img.aeroexpo.online/images_ar/projects/images-g/elevar-perfil-mujeres-ingenieria-6393-14652745.jpg",
    testimonio: '"Productos de calidad y buena atención..."',
    date: "5 days ago",
  },
  {
    name: "Lionel",
    imageSrc: "https://www.clarin.com/img/2021/08/12/RsGKHmj9x_720x0__1.jpg",
    testimonio: "Un poco costoso pero lo vale",
    date: "6 days ago",
  },
  {
    name: "Maria",
    imageSrc:
      "https://media.istockphoto.com/id/1303539296/es/foto/una-empresaria-de-perfil-mirando-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=oqV4cNn_dM5I0PeLGo4BKM_DVDrqlqEO24nfaLS_rFc=",
    testimonio: '"Seriedad y compromiso..."',
    date: "8 days ago",
  },
  {
    name: "Alberto",
    imageSrc:
      "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww&w=1000&q=80",
    testimonio: '"Mi veterinaria de confianza..."',
    date: "9 days ago",
  },
  {
    name: "Lucas",
    imageSrc:
      "https://media.istockphoto.com/id/1338134336/es/foto/retrato-de-cabeza-hombre-africano-de-los-a%C3%B1os-30-sonrisa-mira-a-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=CdDUBciEvc8afLAi_5lVRXuzR11kf1sDORt-qsId420=",
    testimonio: '"La buena onda de los empleados , lo mas.."',
    date: "12 days ago",
  },
];

const Testimonios = () => {
  const chunks = [];
  const chunkSize = 2;

  for (let i = 0; i < testimoniosData.length; i += chunkSize) {
    chunks.push(testimoniosData.slice(i, i + chunkSize));
  }

  return (
    <>

      <div data-aos="fade-up" className="banner-promo">
        <p>Envios gratis y en el dia para su comodidad</p>
      </div>

      <div data-aos="fade-up" className="my-5">
        <h3
          style={{ textAlign: "center", color: "#0D1347" }}
        >
          NUESTROS CLIENTES
        </h3>
        <Carousel controls={false} interval={3000} pause={false} wrap={true}>
          {chunks.map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex} className="carousel-item">
              <div className="d-flex">
                {chunk.map((testimonio, index) => (
                  <Card className="card-individuales text-center" key={index}>
                    <Card.Header>{testimonio.name}</Card.Header>
                    <Card.Body className="card-body-testimonios">
                      <Figure>
                        <Figure.Image
                          className="rounded-3"
                          style={{ width: "300px", height: "300px" }}
                          alt={testimonio.name}
                          src={testimonio.imageSrc}
                        />
                      </Figure>
                      <Card.Text>{testimonio.testimonio}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="">{testimonio.date}</Card.Footer>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonios;
