import { useState, useEffect } from 'react';
import config from '../../../config/config';
import './styles.css'; // Asegúrate de que el CSS esté correctamente vinculado
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar'; // Assuming NavBar component is here
import Footer from '../../../components/Footer';   // Assuming Footer component is here
import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";

function Home() {
  const navigate = useNavigate();
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 800);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);
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
            <img src={`/images-for-home/${images[currentImageIndex]}`} alt="Hero background" />
          </div>
          <div className='hero-text-content'>
            <div style={{  marginBottom: '20px', padding: '10px' }}>
              <h1>MBARETE</h1>
              <h2>VENTA DE JEANS MAYORISTA</h2>
            </div>
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
            <img src="images/milo.jpg" alt="jean milo" style={{width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'contain'}}/>
          </div>
          <div className='tienda-text-content'>
            <p>VISITA NUESTRA TIENDA Y COMPRA ONLINE.</p>
            <p>TE LO LLEVAMOS A TU CASA.</p>
            <button onClick={handleNavigateToJeans} className='tienda-btn'>IR A LA TIENDA</button>
          </div>
        </section>

        <section className='productos-section'>
          <h2>TOP PRODUCTOS</h2>
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
          </div>
        </section>
      </main>

    </div>
  );
}

export default Home;
