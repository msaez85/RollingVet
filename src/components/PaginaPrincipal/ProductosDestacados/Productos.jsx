import "./productos.css";
import Button from "react-bootstrap/Button";

function ProductosDestacados() {
  return (
    <>
    <div data-aos="fade-up">
    <h3 style={{textAlign:"center", marginTop:"3rem",color:"rgb(211, 98, 22)"}}>PRODUCTOS DESTACADOS</h3>
      <div className="productos" >
        <div id="ocultar">
          <img
            src="https://mundomascotashop.com.ar/wp-content/uploads/2021/09/2oldprince-434x540.png"
            alt=""
          />
          <p>OLD PRINCE ADULT SMALL BREEDS X3KG</p>
          <p>$2999</p>
        </div>
        <div id="ocultar">
          <img
            src="https://mundomascotashop.com.ar/wp-content/uploads/2021/09/1oldprince-434x540.png"
            alt=""
          />
          <p>OLD PRINCE PUPPY ALL BREEDS X3KG</p>
          <p>$1799</p>
        </div>
        <div>
          <img
            src="https://mundomascotashop.com.ar/wp-content/uploads/2021/09/3oldprince-434x540.png"
            alt=""
          />
          <p>OLD PRINCE ADULT MEDIUM AND LARGE BREED X15KG</p>
          <p>$7999</p>
        </div>
        <div>
          <img
            src="https://mundomascotashop.com.ar/wp-content/uploads/2021/09/2oldprince-434x540.png"
            alt=""
          />
          <p>OLD PRINCE ADULT SMALL BREEDS X3KG</p>
          <p>$2999</p>
        </div>
      </div>
      <div className="tienda "><Button variant="outline-success">Ir a Tienda</Button></div>
      
      </div>
    </>
  );
}

export default ProductosDestacados;
