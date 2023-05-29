import logo from '../../../assets/images/logo.svg'
import { HeaderStyle } from './styles'

const HeaderPage = () => (
  <>
    <HeaderStyle>
      <h2>Restaurantes</h2>
      <img src={logo} alt="Logo do site" />
      <span>0 produto(s) no carrinho</span>
    </HeaderStyle>
  </>
)

export default HeaderPage
