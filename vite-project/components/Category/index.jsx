import useCartContext from "../../hooks/useCartContext"; // Fixed import path if needed, check existing
import CartActionButton from "../CartActionBtn";
import JeanImage from "../JeanImage";
import ZoomModal from '../ZoomModal'
import JeanSizes from "../JeanSizes";
import { useProducts } from "../../context/ProductsContext";
import './styles.css'

// eslint-disable-next-line react/prop-types
function Category({ filter }) {
    const { products } = useProducts();

    const {
        setOpenModal,
        setSelectedItem,
    } = useCartContext();

    const filteredJeans = products ? products.filter(jean =>
        jean.category === filter || jean.state === filter || jean.id === filter
    ) : [];

    return (
        <>
            {filteredJeans.length > 0 ? (
                <>
                    <div className="section-title">
                        <h2>{filter}</h2>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-slides">
                            {filteredJeans.map((jean) => {
                                const originalPrice = jean.price;
                                const beforePrice = originalPrice * 2;

                                return (
                                    <div className="carousel-jean" key={jean.id}>
                                        <JeanImage>
                                            <img className="div-jean-img" src={jean.images.img1} alt={jean.name} loading="lazy" />
                                        </JeanImage>
                                        <div className="carousel-jean-data">
                                            <span>{jean.name}</span>
                                            <div className="price-stack">
                                                <span className="price-before">Antes ! ${beforePrice.toLocaleString('es-AR')}</span>
                                                <span className="price-now">Ahora con descuento: ${originalPrice.toLocaleString('es-AR')}</span>
                                            </div>
                                            <JeanSizes item={jean} />
                                        </div>
                                        <div className="carousel-btns">
                                            <CartActionButton
                                                item={jean}
                                                onAddToCart={() => {
                                                    setSelectedItem(jean);
                                                }}
                                                onOpenModal={() => setOpenModal(true)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            ) : null}


        </>

    );

}

export default Category;


/**className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                        style={{ display: index === currentSlide ? 'block' : 'none' }} */
