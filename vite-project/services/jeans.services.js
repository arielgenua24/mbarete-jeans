import { processJeansData } from '../services/processJeansData';


class Jeans {
    constructor(){
        this.jeansList;
    }


    filterJeans(filter, products) {
        // Si se envían los productos desde el home, los proceso, los almaceno en localStorage y los asigno a this.jeansList
        if (products) {
            this.jeansList = processJeansData(products);
            // Guardar los datos procesados en el localStorage bajo la clave "jeansData"
            localStorage.setItem('jeansData', JSON.stringify(this.jeansList));
        } else {
            // Si products es undefined, obtengo los datos previamente almacenados en localStorage
            const storedJeansData = localStorage.getItem('jeansData');
            if (storedJeansData) {
                this.jeansList = JSON.parse(storedJeansData);
            } else {
                console.warn('No se encontraron datos de jeans en localStorage.');
                this.jeansList = [];
            }
        }
       
        console.log(filter);
        console.log(this.jeansList);
        const filteredJeans = this.jeansList.filter((jean) => {
            console.log(jean.id)
            console.log(jean.id === filter)
            console.log(filter)
            return jean.category === filter || jean.state === filter || jean.id === filter;
        });

        if (filteredJeans.length === 0) {
            console.log('No se pudieron encontrar jeans que coincidan con el filtro.');
        }

        return filteredJeans;
    }
    
        
}


export default Jeans;