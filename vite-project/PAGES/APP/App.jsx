import { useRoutes, BrowserRouter } from 'react-router-dom'
import Jeans from '../../PAGES/APP/JEANS'
import Cart from './CART';

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

  return (
    <BrowserRouter>
      <CartProvider>
        
        <AppRouter />

      </CartProvider>
    </BrowserRouter>
  )
}

export default App
