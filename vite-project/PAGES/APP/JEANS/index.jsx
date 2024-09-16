import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";
import Navbar from "../../../components/NavBar";
import handleNavigate from "../../../utils/navigation.utils";
import Cart from '../../../components/Cart'

function Jeans() {
    const baggyCategory = new CategoryJeanFactory()
    return (
      <div>
        <h1> CART TEST</h1>
          <Cart/>
        <Navbar onNavigate={handleNavigate}/>
        {baggyCategory.createCategoryComponent("baggy")}
      </div>
    );
};

export default Jeans;
  