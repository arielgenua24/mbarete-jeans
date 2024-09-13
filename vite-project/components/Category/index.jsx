import Jeans from "../../services/jeans.services";
import './styles.css'

function Category({ filter }){
    const service = new Jeans();

    const filteredJeans = service?.filterJeans(filter)
    // la aplicacion no funnciona porque jean.nombre y demas no existe, chequea la estructura de datos!
    return (
     <> 
      <div className="section-title">
            <h2>{filter}</h2>
        </div>
        <div className="carousel-container">
            <div className="carousel-slides">
            {filteredJeans.map((jean) => (
                    <div
                        className="carousel-jean"
                        key={jean.id}
                        >
                            <img src={jean.images.img1} alt={jean.name} />
                            <div className="carousel-jean-data">
                                <p>{jean.name}</p>
                                <p>${jean.price.toLocaleString('es-AR')}</p>
                            </div>
                            <button className="btn-add-cart">Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
     </>
    );

}

export default Category;


/**className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                        style={{ display: index === currentSlide ? 'block' : 'none' }} */