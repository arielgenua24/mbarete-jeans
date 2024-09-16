import Category from "../../components/category";
import handleNavigate from "../../utils/navigation.utils";


export const categoryComponents = {
    baggy: <Category filter={"baggy"} onNavigate={handleNavigate} />,
    soldOut:<Category filter={"sold Out"}/>,
};