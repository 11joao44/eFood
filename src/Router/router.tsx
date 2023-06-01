import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Arabe from '../Pages/árabe'
import Italiana from '../Pages/italiana'
import Pizzaria from '../Pages/pizzaria'
import Japonês from '../Pages/japonês'
import Português from '../Pages/português'
import Vegano from '../Pages/vegano'

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/italiana',
    element: <Italiana />
  },
  {
    path: '/árabe',
    element: <Arabe />
  },
  {
    path: '/japonês',
    element: <Japonês />
  },
  {
    path: '/pizzaria',
    element: <Pizzaria />
  },
  {
    path: '/português',
    element: <Português />
  },
  {
    path: '/vegano',
    element: <Vegano />
  }
])

export default Routers
