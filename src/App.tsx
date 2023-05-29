import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalStyle } from './styles'
import Home from './Pages/Home'
import Restaurant from './Pages/Restaurant'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Restaurant',
    element: <Restaurant />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
