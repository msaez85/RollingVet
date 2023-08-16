import "./servicios.css";

const Servicos = () => {
  return (
    <>

      <div data-aos="fade-up" className="servicios-v2">
        <div className="imagen-v2">
          <img
            src="https://i.postimg.cc/gj8txkvV/Captura-de-pantalla-2023-08-13-21-18-1j0.png"
            alt="veterinaria"
          />
        </div>

        <div className="texto-v2">
          <h3 style={{ color: "#0D1347", fontWeight: "bold" }}>Veterinaria</h3>
          <p>
            Nos enfocamos en la prevención, impulsando los mejores hábitos para
            su bienestar general.
          </p>
          <p>
            Para ello contamos con profesionales veterinarios experimentados que
            no dejan de capacitarse día a día para brindarles a vos y a tu
            mascota una atención acogedora y de la más alta calidad en nuestros
            modernos consultorios totalmente equipados
          </p>
          <a href="/404">
            <button>Ver Mas</button>
          </a>
        </div>
      </div>

      <div data-aos="fade-up" className="servicios-v3">
        <div className="texto-v2">
          <h3 style={{ color: "#0D1347", fontWeight: "bold" }}>Pet-shop</h3>
          <p>
            Hacer las compras para tu mascota nunca fue tan fácil. Accedé a la
            más amplia variedad de productos al mejor precio del mercado:
          </p>
          <p>
            ¡Alimento balanceado, accesorios, golosinas, juguetes y mucho más!
          </p>
          <a href="/productos">
            <button>Ver Mas</button>
          </a>
        </div>

        <div className="imagen-v2">
          <img
            src="https://i.postimg.cc/j29DWt4h/Captura-de-pantalla-2023-08-14-00-58-21.png"
            alt="pet shop"
          />
        </div>
      </div>

      <div data-aos="fade-up" className="servicios-v2">
        <div className="imagen-v2">
          <img
            src="https://i.postimg.cc/CKgpFXkn/Captura-de-pantalla-2023-08-13-22-06-57h.png"
            alt="peluqueria"
          />
        </div>

        <div className="texto-v2">
          <h3 style={{ color: "#0D1347", fontWeight: "bold" }}>Peluquería</h3>
          <p>
            En RollingVet sabemos que el cuidado del pelaje de tu mascota es
            mucho más que una cuestión estética. Nuestros experimentados
            profesionales brindan cortes de pelo y uñas, peinados y tratamientos
            personalizados que aseguren su bienestar, asesorándote en todo lo
            necesario para mantenerla saludable y sacar a relucir toda su
            belleza.
          </p>
          <a href="/404">
            <button>Ver Mas</button>
          </a>
        </div>
      </div>

      <div data-aos="fade-up" className="servicios-v3">
        <div className="texto-v2">
          <h3 style={{ color: "#0D1347", fontWeight: "bold" }}>Vacunacion</h3>
          <p>
            Tenemos todas las vacunas para su mejor amigos , respetando el
            calendario de cada mascota
          </p>
          <p>¡Siempre junto a vos , siempre RollingVet!</p>
          <a href="/404">
            <button>Ver Mas</button>
          </a>
        </div>

        <div className="imagen-v2">
          <img
            src="https://i.postimg.cc/qq579NHc/calendario-vacunacion-gato55555s.jpg"
            alt="vacunacion"
          />
        </div>
      </div>
      <div data-aos="fade-up" className="banner-promo">
        <p>
          5% de descuento en compras en Farmacia y Pet Shop todo el mes de
          Agosto
        </p>
        
      </div>
      <div data-aos="fade-up" className="titulo-medicos">
        <h3 style={{ textAlign: "center" }}>PRODUCTOS DESTACADOS</h3>
      </div>
    </>
  );
};

export default Servicos;
