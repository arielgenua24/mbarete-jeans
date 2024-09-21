import { useRoutes, BrowserRouter } from 'react-router-dom'
import Jeans from '../../PAGES/APP/JEANS'
import { CartProvider } from '../../context/CartContext'; 

import './App.css'

function AppRouter() {
  let router = useRoutes([
    { path:'/jeans' , element: <Jeans /> },      
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
