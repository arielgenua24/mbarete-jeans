function Category({filter }){
    const jeansFiltered = filterJeans(filter)

    return (
     <>
        <div className="carousel-container">
            <div className="carousel-slides">
                
            </div>
        </div>
        
    </>
    );

}

export default Category;


/**{jeansData.map((jean, index) => (
                    <div
                        key={jean.id}
                        className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                    >
                        <img src={jean.img} alt={jean.nombre} />
                        <p>{jean.nombre}</p>
                        <p>${jean.precio.toLocaleString('es-AR')}</p>
                        <button className="btn-add-cart">Agregar al carrito</button>
                    </div>
                ))} */