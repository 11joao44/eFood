import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterStyle = styled.footer`
  width: 100%;
  height: 296px;
  background-color: ${cores.corSecondary};

  p {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`

export const Images = styled.div`
  display: grid;
  justify-items: center;

  img {
    margin-top: 32px;
  }
`
