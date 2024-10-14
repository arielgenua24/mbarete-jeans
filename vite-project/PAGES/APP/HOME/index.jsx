import config from '../../../config/config'
import './styles.css'; // Asegúrate de que el CSS esté correctamente vinculado
import { Link } from 'react-router-dom'


function Home() {
  const enviarMensaje = () => {
    const phoneNumber = config.phoneNumber;
    const message = "Hola MBARETE JEANS. He visitado su web y quiero hablar con un asesor.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='home'>
      {/* Botón de WhatsApp */}
      <section id="wpp-btn" className="wpp-btn">
        <div className="whatsapp">
          <button  className="wtp-icon-btn" onClick={enviarMensaje}>
            <img  className="whatsapp-icon" src="/images/logos/social.png" alt="whatsapp icon"></img>
          </button>
        </div>
      </section>

      {/* Carrusel de imágenes */}
      <section className="carousel">
        <div className="carousel-item">
          <img className="main-photo" src="../images/home-photos/home-photo.png" alt="Foto principal" />
          <div className="buttons main-photo-btn">
          <a className="button jeans-button"> 
            <Link  className='button jeans-button' to="/jeans">VER JEANS</Link>
          </a>
          </div>
        </div>
      </section>

      <section className="carousel quality-section">
        <h2>Envíos a todo el país 🇦🇷, siempre disponibles, siempre puntuales.</h2>
        <span>Tu éxito es nuestra prioridad: Stock constante y entregas a tiempo.</span>
        <div className="carousel-home-container">
          <div className="carousel-track">
            <img className="quality-section-photo" src="../images/home-photos/stock-image-4.jpg" alt="Stock 1" />
            <img className="quality-section-photo" src="../images/home-photos/stock-image-5.jpg" alt="Stock 2" />
            <img className="quality-section-photo" src="../images/home-photos/stock-image-6.jpg" alt="Stock 3" />
          </div>
          <a className="button jeans-button"> 
            <Link className='button jeans-button' to="/jeans">VER JEANS</Link>
          </a>
        </div>
      </section>

      {/* Sección de calidad */}
      <section className="carousel quality-section">
        <h2>Moda que multiplica tus ganancias.</h2>
        <span>Jeans seductores, sensitivos y exclusivos. Precios que aseguran un retorno excelente.</span>
        <div className="text-description">
          <img src="/images/home-photos/formato-de-texto.png" alt="Logo" className="logo" />
          <p>
            Con nuestros jeans, cada cliente encuentra su estilo y tú encuentras tu rentabilidad.
            Inspirados en las últimas modas y con un desarrollo exclusivo, nuestros productos aseguran márgenes de ganancia atractivos,
            mientras que la claridad en descripciones y colores te permite destacar en el mercado.
          </p>
        </div>
        <div className="carousel-home-container jean-carousel">
          <div className="carousel-track">
            <img className="quality-section-photo" src="../images/home-photos/earning_1.png" alt="Jeans de calidad" />
            <img className="quality-section-photo" src="../images/home-photos/earning_3.png" alt="Jeans de calidad" />
            <img className="quality-section-photo" src="../images/home-photos/earning_2.png" alt="Jeans de calidad" />
          </div>
        </div>
        <div className="buttons quality-section-btn">
          <a className="button jeans-button"> 
            <Link className='button jeans-button' to="/jeans">VER JEANS</Link>
          </a>
        </div>
      </section>

      {/* Otras secciones */}
      <section className="carousel quality-section">
        <h2>Calidad garantizada, sin riesgos, sin excepciones.</h2>
        <span>Cambios fáciles, reembolsos del 100% y un control de calidad inigualable.</span>
        <div className="carousel-home-container">
          <div className="carousel-track">
            <img className="quality-section-photo" src="../images/home-photos/quality-photo-1.jpg" alt="Calidad 1" />
            <img className="quality-section-photo" src="../images/home-photos/quality-photo-2.jpg" alt="Calidad 2" />
          </div>
          <a className="button jeans-button"> 
            <Link className='button jeans-button'  to="/jeans">VER JEANS</Link>
          </a>
        </div>
      </section>


      <section className="carousel quality-section">
        <h2>Compra fácil, entrega segura.</h2>
        <span>Siempre tenemos lo que necesitas, cuando lo necesitas, donde lo necesitas.</span>
        <div className="carousel-home-container">
          <div className="carousel-track">
            <img className="quality-section-photo" src="../images/home-photos/delivery.png" alt="Delivery" />
          </div>
          <a className="button jeans-button"> 
            <Link className='button jeans-button' to="/jeans">VER JEANS</Link>
          </a>
        </div>
      </section>

      <section className="coming-soon">
        <h2>Próximamente</h2>
      </section>
    </div>
  );
}

export default Home;
