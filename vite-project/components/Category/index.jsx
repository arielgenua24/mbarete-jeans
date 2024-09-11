import Jeans from "../../services/jeans.services";

function Category({filter}){
    const filteredJeans = Jeans?.filterJeans(filter)
    // la aplicacion no funnciona porque jean.nombre y demas no existe, chequea la estructura de datos!
    return (
     <> 
        <div className="carousel-container">
            <div className="carousel-slides">
            {filteredJeans.map((jean) => (
                    <div
                        key={jean.id}
                        >
                        <img src={jean.img} alt={jean.nombre} />
                        <p>{jean.nombre}</p>
                        <p>${jean.precio.toLocaleString('es-AR')}</p>
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