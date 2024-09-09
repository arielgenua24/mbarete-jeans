function Category({ jeans, filter }){
    const jeansFiltered = filterJeans(jeans, filter)

    return (
     <>
        <div className="carousel-container">
            <div className="carousel-slides">
                {jeansData.map((jean, index) => (
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
                ))}
            </div>
        </div>




        
    </>
    );

}

export default Category;