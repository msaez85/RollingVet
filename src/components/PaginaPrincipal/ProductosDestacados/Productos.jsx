import "./productos.css";
import Button from "react-bootstrap/Button";

const productosData = [
  {
    id: 1,
    imageSrc:
      "https://mundomascotashop.com.ar/wp-content/uploads/2021/09/2oldprince-434x540.png",
    name: "OLD PRINCE ADULT SMALL BREEDS X3KG",
    price: "$USD 15",
  },
  {
    id: 2,
    imageSrc:
      "https://mundomascotashop.com.ar/wp-content/uploads/2021/09/1oldprince-434x540.png",
    name: "OLD PRINCE PUPPY ALL BREEDS X3KG",
    price: "$USD 20",
  },
  {
    id: 3,
    imageSrc:
      "https://mundomascotashop.com.ar/wp-content/uploads/2021/09/3oldprince-434x540.png",
    name: "OLD PRINCE ADULT MEDIUM AND LARGE BREED X15KG",
    price: "$USD 40",
  },
  {
    id: 4,
    imageSrc:
      "https://mundomascotashop.com.ar/wp-content/uploads/2021/09/2oldprince-434x540.png",
    name: "OLD PRINCE ADULT SMALL BREEDS X3KG",
    price: "$USD 15",
  },
];

const ProductosDestacados = () => {
  return (
    <>
      <div data-aos="fade-up">
        <div className="productos">
          {productosData.map((producto) => (
            <div key={producto.id} id="ocultar">
              <img src={producto.imageSrc} alt="" />
              <p>{producto.name}</p>
              <p>{producto.price}</p>
            </div>
          ))}
        </div>

        <div className="tienda">
          <Button href="/productos" variant="outline-success">
            Ir a Tienda
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductosDestacados;
