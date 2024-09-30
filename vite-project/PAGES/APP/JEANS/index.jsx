import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";
import JeansNavbar from "../../../components/JeansNavBar";
import useRefs from '../../../hooks/useRefs';
import './index.css'


function Jeans() {
    const baggyCategory = new CategoryJeanFactory()
    const bermudaCategory = new CategoryJeanFactory()

    const { baggyRef, bermudaRef } = useRefs()



    return (
      <div className="jeans-home">
        <JeansNavbar/>                     
       
        <div className='div-baggy'  ref={baggyRef}>
          {baggyCategory.createCategoryComponent("baggy")}
        </div>

        <div className='div-bermuda'  ref={bermudaRef}>
          {bermudaCategory.createCategoryComponent("bermuda")}          
        </div>

        <div className='div-bermuda'  ref={bermudaRef}>
          {bermudaCategory.createCategoryComponent("bermuda")}          
        </div>

        <div className='div-bermuda'  ref={bermudaRef}>
          {bermudaCategory.createCategoryComponent("bermuda")}          
        </div>

       

      </div>
    );
};

export default Jeans;
  