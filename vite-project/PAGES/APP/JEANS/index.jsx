import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";
import JeansNavbar from "../../../components/JeansNavBar";
import useRefs from '../../../hooks/useRefs';
import useFirestore from "../../../hooks/useFirestore";
import { useEffect, useMemo } from "react";
import './index.css'
import { Category } from "../../../data/jeans.categories";



function Jeans() {
  const { getProducts, products } = useFirestore();



  const jeansData = useMemo(() => {
    if (!products || products.length === 0) return [];

    // Agrupar productos por nombre
    const groupedProducts = products.reduce((acc, product) => {
      const key = product.name;
      if (!acc[key]) acc[key] = [];
      acc[key].push(product);
      return acc;
    }, {});

    return Object.entries(groupedProducts).map(([name, group]) => {
      // Reordenar: productos con image1 primero
      const prioritizedGroup = [...group].sort((a) => a.image1 ? -1 : 1);
      const mainProduct = prioritizedGroup[0] || {};

      // Extraer tallas únicas
      const uniqueSizes = [...new Set(group.map(p => parseInt(p.size)))];
      
      return {
        id: mainProduct.id, // Mantener ID original
        name,
        category: Category[mainProduct.category] || Category.other,
        specialTag: '',
        images: {
          img1: mainProduct.image1 || '',
          img2: mainProduct.image2 || '',
          img3: mainProduct.image3 || ''
        },
        price: parseInt(mainProduct.price) || 0,
        state: '',
        sizes: uniqueSizes
          .filter(size => !isNaN(size))
          .sort((a, b) => a - b)
          .map(size => ({ size, quantity: 0 }))
      };
    });
  }, [products]);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('products', products);
    console.log('jeansData', jeansData);

  }, [products]);
  

  

    const baggyCategory = new CategoryJeanFactory()
    const bermudaCategory = new CategoryJeanFactory()
    const jeanCategory = new CategoryJeanFactory()
    const clasicoCategory = new CategoryJeanFactory()
    const joggersCategory = new CategoryJeanFactory()
    const parachutteCategory = new CategoryJeanFactory()
    const frisaCategory = new CategoryJeanFactory()
    const newCategory = new CategoryJeanFactory()
    const latestCategory = new CategoryJeanFactory()


    const { 
      baggyRef,
      latestRef,
      newRef,
      bermudaRef,
      jeanRef,
      clasicoRef,
      joggersRef,
      parachutteRef,
      frisaRef } = useRefs()



    return (
      <div className="jeans-home">
        <JeansNavbar/>                     
       
        <div className='div-parachutte'  ref={parachutteRef}>
          {parachutteCategory.createCategoryComponent("parachutte")}          
        </div>

        <div className='div-latest'  ref={latestRef}>
          {latestCategory.createCategoryComponent("pocoStock")}
        </div>

        <div className='div-new'  ref={newRef}>
          {newCategory.createCategoryComponent("nuevo")}
        </div>

        <div className='div-baggy'  ref={baggyRef}>
          {baggyCategory.createCategoryComponent("baggy")}
        </div>

        <div className='div-bermuda'  ref={bermudaRef}>
          {bermudaCategory.createCategoryComponent("bermuda")}          
        </div>

        <div className='div-jean'  ref={jeanRef}>
          {jeanCategory.createCategoryComponent("jean")}          
        </div>

        <div className='div-joggers'  ref={joggersRef}>
          {joggersCategory.createCategoryComponent("joggers")}          
        </div>


        <div className='div-frisa'  ref={frisaRef}>
          {frisaCategory.createCategoryComponent("frisa")}          
        </div>

  

       

      </div>
    );
};

export default Jeans;
  