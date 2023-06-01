import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'
import { HeaderStyle } from './styles'

const HeaderPage = () => (
  <>
    <HeaderStyle>
      <h2>Restaurantes</h2>
      <Link to={'/'}>
        <img src={logo} alt="Logo do site" />
      </Link>
      <span>0 produto(s) no carrinho</span>
    </HeaderStyle>
  </>
)

export default HeaderPage
