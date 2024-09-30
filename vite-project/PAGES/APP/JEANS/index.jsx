import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";
import Cart from '../../../components/Cart'
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
        
        {/*<h1> CART TEST</h1>
        <Cart/>*/}

        <div>
            {/*<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat iaculis sollicitudin. Ut consectetur lorem ac ullamcorper auctor. Vivamus ut tellus posuere, mollis metus feugiat, efficitur odio. Nulla facilisi. In imperdiet mauris sed quam sollicitudin ullamcorper. Praesent ultricies urna eget facilisis vulputate. Vivamus orci leo, euismod vitae neque id, dictum accumsan lectus. Duis auctor consectetur mauris, eu feugiat dolor auctor vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis metus vitae nunc pharetra aliquam sit amet eget mauris. Vestibulum nec pharetra massa, nec accumsan velit. Etiam ultricies ultricies nunc, bibendum vulputate lacus maximus vel. Nullam dictum massa magna, vel gravida mi luctus non.

                Donec euismod placerat velit nec vehicula. Sed gravida enim velit, nec mollis velit consectetur in. Morbi ullamcorper porttitor molestie. Fusce bibendum ipsum eget purus sodales molestie. Maecenas venenatis justo id elit tincidunt, a gravida diam convallis. Nullam pellentesque id nisi vitae molestie. Sed porttitor mattis felis eget vehicula. In maximus erat eros, a bibendum justo sollicitudin at. Maecenas ornare convallis elementum. Quisque elementum volutpat erat, nec auctor orci mollis sit amet. Sed velit felis, pellentesque eget tellus in, auctor sollicitudin arcu.

                    Suspendisse vel orci non erat interdum mollis. Nam in felis ut dolor molestie scelerisque. Sed sed rutrum sapien, malesuada tempus lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pharetra facilisis leo at rutrum. Nulla bibendum mauris ac ex scelerisque ultricies. Integer ac posuere enim, a varius libero. Phasellus hendrerit nunc eget massa hendrerit, nec finibus nunc commodo. Suspendisse magna lacus, ornare et nulla ut, efficitur malesuada quam. Nam vel tortor ullamcorper felis imperdiet tincidunt sit amet vitae ipsum. Nulla sit amet mi aliquet, scelerisque turpis a, lacinia nibh. Praesent luctus, metus et consequat rutrum, enim sem tincidunt risus, ut ornare risus purus et enim.

                Aenean fringilla felis vitae nunc dapibus, et consequat quam molestie. Nulla finibus imperdiet leo at aliquam. Mauris in libero a ex congue hendrerit. Praesent metus arcu, sodales sit amet cursus id, bibendum quis ipsum. Donec vel placerat lacus. Cras pretium, nisi elementum rhoncus rhoncus, arcu risus euismod tellus, vel porttitor ipsum est eu augue. Donec tempor, turpis semper bibendum ultrices, est odio rhoncus ligula, ut dapibus odio ipsum a turpis. Fusce ullamcorper, purus in malesuada bibendum, tortor nibh condimentum lacus, et suscipit diam sapien vitae sem. Pellentesque tincidunt quam id semper dictum. Aliquam consectetur augue vitae erat dictum, id pellentesque sem ullamcorper. Aenean sit amet eros sit amet libero sollicitudin sollicitudin. Mauris velit nibh, faucibus a aliquet non, congue eget purus. Praesent placerat in eros id ornare.

                Nulla eu turpis hendrerit, maximus urna id, fringilla nulla. Pellentesque in justo a dui malesuada faucibus. Curabitur venenatis euismod tortor quis lacinia. Cras a mauris volutpat nisi rhoncus mattis. Nam luctus orci ante. Nullam efficitur, tortor eu aliquet lobortis, est lacus tincidunt metus, in porttitor sem enim vel augue. Sed purus libero, efficitur nec semper a, dictum vitae massa. Integer dapibus hendrerit dolor, vitae tincidunt nulla tempor in.  Suspendisse vel orci non erat interdum mollis. Nam in felis ut dolor molestie scelerisque. Sed sed rutrum sapien, malesuada tempus lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pharetra facilisis leo at rutrum. Nulla bibendum mauris ac ex scelerisque ultricies. Integer ac posuere enim, a varius libero. Phasellus hendrerit nunc eget massa hendrerit, nec finibus nunc commodo. Suspendisse magna lacus, ornare et nulla ut, efficitur malesuada quam. Nam vel tortor ullamcorper felis imperdiet tincidunt sit amet vitae ipsum. Nulla sit amet mi aliquet, scelerisque turpis a, lacinia nibh. Praesent luctus, metus et consequat rutrum, enim sem tincidunt risus, ut ornare risus purus et enim.

                Aenean fringilla felis vitae nunc dapibus, et consequat quam molestie. Nulla finibus imperdiet leo at aliquam. Mauris in libero a ex congue hendrerit. Praesent metus arcu, sodales sit amet cursus id, bibendum quis ipsum. Donec vel placerat lacus. Cras pretium, nisi elementum rhoncus rhoncus, arcu risus euismod tellus, vel porttitor ipsum est eu augue. Donec tempor, turpis semper bibendum ultrices, est odio rhoncus ligula, ut dapibus odio ipsum a turpis. Fusce ullamcorper, purus in malesuada bibendum, tortor nibh condimentum lacus, et suscipit diam sapien vitae sem. Pellentesque tincidunt quam id semper dictum. Aliquam consectetur augue vitae erat dictum, id pellentesque sem ullamcorper. Aenean sit amet eros sit amet libero sollicitudin sollicitudin. Mauris velit nibh, faucibus a aliquet non, congue eget purus. Praesent placerat in eros id ornare.

                Nulla eu turpis hendr

            </span>*/}            
        </div>
         
       
        <div className='div-baggy'  ref={baggyRef}>
          {baggyCategory.createCategoryComponent("baggy")}
          
        </div>

        <div className='div-bermuda'  ref={bermudaRef}>
          {bermudaCategory.createCategoryComponent("bermuda")}          
        </div>

       

      </div>
    );
};

export default Jeans;
  