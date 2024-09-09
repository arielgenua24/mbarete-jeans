import CategoryJeanFactory from "../../../services/factories/categoryJeans.factory";

function Jeans() {
    const baggyCategory = new CategoryJeanFactory()
    return (
      <div>
        {baggyCategory.createCategoryComponent("baggy")}
      </div>
    );
};

export default Jeans;
  