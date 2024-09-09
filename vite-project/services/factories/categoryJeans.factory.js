import { Category } from "../../data/jeans.categories";
import { categoryComponents } from "../../data/UIcomponents/UiCategory.componentes"

class CategoryJeanFactory {
    constructor(){
    }

    createCategoryComponent(category) {
        try {
            if(!categoryComponents[category]) {
                return 'componente no encontrado'
            } 
            if(!Category[category]) {
                return 'categoria no encontrada'
            }
            return categoryComponents[category]
        } catch(e) {
            console.error(e)
        }
       

    }
}

export default CategoryJeanFactory