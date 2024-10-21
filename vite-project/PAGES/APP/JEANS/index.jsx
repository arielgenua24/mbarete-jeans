import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";
import JeansNavbar from "../../../components/JeansNavBar";
import useRefs from '../../../hooks/useRefs';
import './index.css'


function Jeans() {
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
  