import { useRoutes, BrowserRouter } from 'react-router-dom'
import Jeans from '../../PAGES/APP/JEANS'

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
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
