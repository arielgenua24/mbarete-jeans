import useCartContext from "../../hooks/useCart";
import Jeans from "../../services/jeans.services";
import CartActionButton from "../CartActionBtn";
import JeanImage from "../JeanImage";
import ZoomModal from '../ZoomModal'
import JeanSizes from "../JeanSizes";
import useFirestore from "../../hooks/useFirestore";
import './styles.css'

// eslint-disable-next-line react/prop-types
function Category({ filter}){
    const {products } = useFirestore();
    const service = new Jeans();
    
    const {
        setOpenModal,
        setSelectedItem,
    } = useCartContext(); 

    

   

    console.log(filter)
    const filteredJeans = service?.filterJeans(filter, products)
    console.log(filteredJeans)
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
                            
                            
                            <JeanImage>
                                <img className="div-jean-img" src={jean.images.img1} alt={jean.name} loading="lazy" />
                            </JeanImage>
                          
                            
                            <div className="carousel-jean-data">
                                <span>{jean.name}</span>
                                <span>${jean.price.toLocaleString('es-AR')}</span>
                                <JeanSizes item={jean}/>
                            </div>
                            <div className="carousel-btns">
                                <CartActionButton   
                                    item={jean}
                                    onAddToCart={()=>{
                                        setSelectedItem(jean)
                                        //setOpenModal(true)
                                    }}
                                    onOpenModal={()=> setOpenModal(true)}
                                />

                            </div>
                            

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