import "./productos.css";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';

const productosData = [
  {
    id: 1,
    imageSrc: 'https://mundomascotashop.com.ar/wp-content/uploads/2021/09/2oldprince-434x540.png',
    name: 'OLD PRINCE ADULT SMALL BREEDS X3KG',
    price: '$2999',
  },
  {
    id: 2,
    imageSrc: 'https://mundomascotashop.com.ar/wp-content/uploads/2021/09/1oldprince-434x540.png',
    name: 'OLD PRINCE PUPPY ALL BREEDS X3KG',
    price: '$1799',
  },
  {
    id: 3,
    imageSrc: 'https://mundomascotashop.com.ar/wp-content/uploads/2021/09/3oldprince-434x540.png',
    name: 'OLD PRINCE ADULT MEDIUM AND LARGE BREED X15KG',
    price: '$7999',
  },
  {
    id: 4,
    imageSrc: 'https://mundomascotashop.com.ar/wp-content/uploads/2021/09/2oldprince-434x540.png',
    name: 'OLD PRINCE ADULT SMALL BREEDS X3KG',
    price: '$2999',
  },
];

const ProductosDestacados = () => {
  
  return (
    <>
      <div data-aos="fade-up">
        <h3 style={{ textAlign: "center", marginTop: "3rem", color: "rgb(211, 98, 22)" }}>PRODUCTOS DESTACADOS</h3>
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
            <Button href="/productos" variant="outline-success">Ir a Tienda</Button>
          </div>
        
      </div>
    </>
  );
}

export default ProductosDestacados;

