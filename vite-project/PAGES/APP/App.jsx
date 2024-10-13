import { useRoutes, BrowserRouter} from 'react-router-dom'
import Jeans from '../../PAGES/APP/JEANS'
import Cart from './CART';
import Home from './HOME'
import Navbar from '../../components/NavBar';

import { CartProvider } from '../../context/CartContext'; 

import './App.css'

function AppRouter() {
  let router = useRoutes([
    { path: '/', element: <Home />},
    { path: '/home', element: <Home />},
    { path:'/jeans' , element: <Jeans /> }, 
    { path:'/cart' , element: <Cart /> }, 
])

  return router
}


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <header>
          <Navbar />
        </header>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
