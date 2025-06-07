import { useRoutes, HashRouter} from 'react-router-dom'
import { useState } from 'react';
import Jeans from '../../PAGES/APP/JEANS'
import Cart from './CART';
import Home from './HOME'
import Navbar from '../../components/NavBar';
import Modal from '../../components/addToCartModal';
import WelcomeModal from '../../components/WelcomeModal';
import { CartProvider } from '../../context/CartContext'; 

import './App.css'

function AppRouter() {
  let router = useRoutes([
    { path: '/', element: <Home />},
    { path: '/home', element: <Home />},
    { path:'/jeans' , element: <Jeans /> },
    { path:'/product/:id' , element: <Modal /> }, 
    { path:'/cart' , element: <Cart /> }, 
])

  return router
}


function App() {
  const [isModalOpen, setModalOpen] = useState(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <HashRouter>
      <CartProvider>
        <header>
          <Navbar />
        </header>
        <AppRouter />
        <div>
          {isModalOpen && <WelcomeModal onClose={handleCloseModal} />}
        </div>
      </CartProvider>
    </HashRouter>
  )
}

export default App
