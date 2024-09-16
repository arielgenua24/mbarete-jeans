import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";
import Navbar from "../../../components/NavBar";
import handleNavigate from "../../../utils/navigation.utils";


function Jeans() {
    const baggyCategory = new CategoryJeanFactory()
    return (
      <div>
        <Navbar onNavigate={handleNavigate}/>
        {baggyCategory.createCategoryComponent("baggy")}
      </div>
    );
};

export default Jeans;
  