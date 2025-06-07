import config from '../../../config/config';
import './styles.css'; // Asegúrate de que el CSS esté correctamente vinculado
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar'; // Assuming NavBar component is here
import Footer from '../../../components/Footer';   // Assuming Footer component is here
import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";

function Home() {
  const navigate = useNavigate();
  const enviarMensaje = () => {
    const phoneNumber = config.phoneNumber;
    const message = "Hola MBARETE JEANS. He visitado su web y quiero hablar con un asesor.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const jeanCategory = new CategoryJeanFactory();
  const parachutteCategory = new CategoryJeanFactory();
  const baggyCategory = new CategoryJeanFactory();

  const handleNavigateToJeans = () => {
    navigate('/jeans');
  };

  return (
    <div className='home-page-container home-page'>
      <NavBar />
      <main className='home-main-content'>
        <section className='hero-section'> 
          <div className='hero-image-container'>
            {/* La imagen de fondo se manejará con CSS */}
          </div>
          <div className='hero-text-content'>
            <h1>MBARETE</h1>
            <h2>VENTA DE JEANS MAYORISTA</h2>
            <div className='hero-buttons'>
              <button onClick={handleNavigateToJeans} className='hero-btn comprar-ahora-btn'>COMPRAR AHORA</button>
              <button onClick={enviarMensaje} className='hero-btn hablemos-btn'>HABLEMOS</button>
            </div>
          </div>
        </section>

        <section className='info-text-section'>
          <p>Fabricantes de jeans mayoristas que marcan tendencia.</p>
          <p>Envíos a todo el país.</p>
          <p>Conéctate con nosotros y eleva tu stock.</p>
        </section>

        <section className='tienda-section'>
          <div className='tienda-image-placeholder'>
            {/* Placeholder para la imagen, se puede añadir <img /> si hay una específica */}
            <span>IMAGEN</span> 
          </div>
          <div className='tienda-text-content'>
            <p>VISITA NUESTRA TIENDA Y COMPRA ONLINE.</p>
            <p>TE LO LLEVAMOS A TU CASA.</p>
            <button onClick={handleNavigateToJeans} className='tienda-btn'>IR A LA TIENDA</button>
          </div>
        </section>

        <section className='productos-section'>
          <h2>ALGUNOS DE NUESTROS PRODUCTOS</h2>
          <div className='productos-grid'>
            <div className='producto-item'>
              {jeanCategory.createCategoryComponent("jean", true)}
            </div>
            <div className='producto-item'>
              {parachutteCategory.createCategoryComponent("parachutte", true)}
            </div>
            <div className='producto-item'>
              {baggyCategory.createCategoryComponent("baggy", true)}
            </div>
            <div className='producto-item placeholder-producto'>
              {/* Empty placeholder that will be hidden */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
