import { Category } from "../../data/jeans.categories";
import { categoryComponents } from "../../data/UIconfig/UiCategory.componentes"

class CategoryJeanFactory {
    constructor(){
    }

    createCategoryComponente(jeansList, category) {
        try {
            if(!categoryComponents[category]) {
                return 'componente no encontrado'
            } 
            if(!Category[category]) {
                return 'categoria no encontrada'
            }
            return categoryComponents[category](jeansList)
        } catch(e) {
            console.error(e)
        }
       

    }
}

export default CategoryJeanFactory