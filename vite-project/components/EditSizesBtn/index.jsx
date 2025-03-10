import { useNavigate } from "react-router-dom";
import './styles.css'

// eslint-disable-next-line react/prop-types
function EditSizesBtn({text, url}) {
    
    const navigate = useNavigate();
    const openSizesPage = (() => {
        navigate(url)
    })


    if(text == 'ver el carrito') {
        return (
            <>
                <button className="edit-sizes_btn"
                    onClick={openSizesPage}
                > 
                    Modificar
                </button>
            </>
        )
    }

}
export default EditSizesBtn;