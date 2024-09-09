import { jeansData } from '../data/jeans.data'

class Jeans {
    constructor(){
        this.jeansList = jeansData
    }

    addjean() {}

    static filterJeans(filter) {
        const filteredJeans = this.jeansList.filter((jean) => 
            jean.category === filter || jean.state === filter
        );
    
        if (filteredJeans.length === 0) {
            console.log('No se pudieron encontrar jeans que coincidan con el filtro.');
        }
    
        return filteredJeans;
    }
    
        
}

export default Jeans;