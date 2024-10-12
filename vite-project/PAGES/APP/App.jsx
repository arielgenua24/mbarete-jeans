import { useRoutes, BrowserRouter} from 'react-router-dom'
import Jeans from '../../PAGES/APP/JEANS'
import Cart from './CART';
import Navbar from '../../components/NavBar';

import { CartProvider } from '../../context/CartContext'; 

import './App.css'

function AppRouter() {
  let router = useRoutes([
    { path:'/jeans' , element: <Jeans /> }, 
    { path:'/cart' , element: <Cart /> }, 
])

  return router
}


function App() {

  //window.location.href = 'https://mbarete-jeans.web.app/home/';

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/> 
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
