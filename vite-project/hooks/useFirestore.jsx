import { useState, useEffect } from "react";
import { db } from "../firebaseSetUp";
import { collection, getDocs } from "firebase/firestore";

const useFirestore = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const productsSnapshot = await getDocs(collection(db, "products"));
      const products = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(products);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    getProducts(); // Solo se ejecuta cuando el hook se monta
  }, []);

  return { getProducts, setProducts, products };
};

export default useFirestore;
