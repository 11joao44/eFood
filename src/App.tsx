import { RouterProvider } from 'react-router-dom'

import Routers from './Router/router'
import { GlobalStyle } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Routers} />
      <Footer />
    </>
  )
}

export default App
