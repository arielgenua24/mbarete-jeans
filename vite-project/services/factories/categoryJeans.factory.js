
import { categoryComponents } from "../../data/UIcomponents/UiCategory.componentes"

class CategoryJeanFactory {
    constructor(){
    }

    createCategoryComponent(category) {
        try {
            if(!categoryComponents[category]) {
                return 'componente no encontrado'
            } 
            return categoryComponents[category]
        } catch(e) {
            console.error(e)
        }
       

    }
}

export default CategoryJeanFactory