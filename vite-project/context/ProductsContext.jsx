import React, { createContext, useContext, useState, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import { processJeansData } from '../services/processJeansData';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const { products: rawProducts, getProducts } = useFirestore();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (rawProducts && rawProducts.length > 0) {
            console.log('Procesando productos desde ProductsContext...');
            const processed = processJeansData(rawProducts);
            setProducts(processed);
            setLoading(false);
        } else {
            // Init load
            if (loading && rawProducts.length === 0) {
                // Si tarda mucho o no hay, igual puede que cargue luego
                // getProducts se llama en el hook useFirestore al montar, veremos si necesitamos algo mas
            }
        }
    }, [rawProducts]);

    return (
        <ProductsContext.Provider value={{ products, loading, getProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}

export const useProducts = () => {
    return useContext(ProductsContext);
};
