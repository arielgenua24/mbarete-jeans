import { processJeansData } from '../services/processJeansData';


class Jeans {
    constructor(){
        this.jeansList;
    }


    filterJeans(filter, products) {
        this.jeansList = processJeansData(products);
        console.log(filter)
        console.log(this.jeansList)
        const filteredJeans = this.jeansList.filter((jean) => {
            
            return jean.category === filter || jean.state === filter || jean.id === filter }
            
        );
    
        if (filteredJeans.length === 0) {
            console.log('No se pudieron encontrar jeans que coincidan con el filtro.');
            

        }
    
        return filteredJeans;
    }
    
        
}


export default Jeans;