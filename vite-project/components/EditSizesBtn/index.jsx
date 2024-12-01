import { useNavigate } from "react-router-dom";
import './styles.css'

// eslint-disable-next-line react/prop-types
function EditSizesBtn({text, url}) {
    console.log('llamando a EditSizes')
    console.log(text)
    const navigate = useNavigate();
    const openSizesPage = (() => {
        navigate(url)
    })


    if(text == 'ver el carrito') {
        console.log(text)
        console.log(url)
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