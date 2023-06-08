import styled from 'styled-components'
import { cores } from '../../styles'
import background from '../../assets/images/backgroundHome.svg'

export const HeaderStyle = styled.header`
  background-image: url(${background});
  padding-bottom: 40px;
  text-align: center;
  padding-top: 64px;
  height: 384px;
  width: 100%;

  img {
    padding-bottom: 136px;
  }

  p {
    font-weight: bold;
    line-height: 40px;
    font-size: 32px;
    color: ${cores.corPrimary};
  }
`
