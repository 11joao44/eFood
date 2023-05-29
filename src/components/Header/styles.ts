import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderStyle = styled.header`
  width: 100%;
  height: 384px;
  background-color: ${cores.corSecondary};
  text-align: center;
  padding-top: 64px;
  padding-bottom: 40px;

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
