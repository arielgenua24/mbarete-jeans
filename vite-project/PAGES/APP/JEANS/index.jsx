import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";
import JeansNavbar from "../../../components/JeansNavBar";
import Footer from "../../../components/Footer";
import useRefs from '../../../hooks/useRefs';
import { useEffect } from "react";
import './index.css';

function Jeans() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Instancias de factory para cada categoría
  const baggyCategory = new CategoryJeanFactory();
  const bermudaCategory = new CategoryJeanFactory();
  const jeanCategory = new CategoryJeanFactory();
  const joggersCategory = new CategoryJeanFactory();
  const parachutteCategory = new CategoryJeanFactory();
  const frisaCategory = new CategoryJeanFactory();
  const newCategory = new CategoryJeanFactory();
  const latestCategory = new CategoryJeanFactory();
  const camperasCategory = new CategoryJeanFactory();
  const chalecosCategory = new CategoryJeanFactory();

  // Desestructuramos los refs, incluyendo los nuevos para Camperas y Chalecos
  const { 
    baggyRef,
    latestRef,
    newRef,
    bermudaRef,
    jeanRef,
    joggersRef,
    parachutteRef,
    frisaRef,
    camperasRef,
    chalecosRef
  } = useRefs();

  return (
    <>
      <JeansNavbar/>
      <div className="jeans-home">
        <div className='div-chalecos' ref={chalecosRef}>
          {chalecosCategory.createCategoryComponent("Chalecos")}
        </div>

        <div className='div-camperas' ref={camperasRef}>
          {camperasCategory.createCategoryComponent("Camperas")}
        </div>

        <div className='div-parachutte' ref={parachutteRef}>
          {parachutteCategory.createCategoryComponent("parachutte")}
        </div>

        <div className='div-latest' ref={latestRef}>
          {latestCategory.createCategoryComponent("PocoStock")}
        </div>

        <div className='div-new' ref={newRef}>
          {newCategory.createCategoryComponent("Nuevos")}
        </div>

        <div className='div-baggy' ref={baggyRef}>
          {baggyCategory.createCategoryComponent("baggy")}
        </div>

        <div className='div-bermuda' ref={bermudaRef}>
          {bermudaCategory.createCategoryComponent("bermuda")}
        </div>

        <div className='div-jean' ref={jeanRef}>
          {jeanCategory.createCategoryComponent("jean")}
        </div>

        <div className='div-joggers' ref={joggersRef}>
          {joggersCategory.createCategoryComponent("joggers")}
        </div>

        <div className='div-frisa' ref={frisaRef}>
          {frisaCategory.createCategoryComponent("frisa")}
        </div>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}

export default Jeans;
