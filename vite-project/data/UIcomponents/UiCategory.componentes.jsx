import Category from "../../components/category";
import handleNavigate from "../../utils/navigation.utils";


export const categoryComponents = {
    nuevo: <Category filter={"nuevo"} onNavigate={handleNavigate} />,
    SoldOut: <Category filter={"SoldOut"} onNavigate={handleNavigate} />,
    EnOferta: <Category filter={"EnOferta"} onNavigate={handleNavigate} />,
    Clásico: <Category filter={"bagClásicogy"} onNavigate={handleNavigate} />,
    pocoStock: <Category filter={"quedan pocos"} onNavigate={handleNavigate} />,
    baggy: <Category filter={"baggy"} onNavigate={handleNavigate} />,
    bermuda: <Category filter={"bermuda"} onNavigate={handleNavigate} />,
    jean: <Category filter={"jean"} onNavigate={handleNavigate} />,
    ReIngreso: <Category filter={"ReIngreso"} onNavigate={handleNavigate} />,
    joggers: <Category filter={"joggers"} onNavigate={handleNavigate} />,
    parachutte: <Category filter={"parachutte"} onNavigate={handleNavigate} />,
    frisa: <Category filter={"frisa"} onNavigate={handleNavigate} />,
    
};