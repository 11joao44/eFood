import styled from 'styled-components'
import { cores } from '../../../styles'

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 184px;
  background-color: ${cores.corSecondary};
  padding: 64px 0;

  h2,
  span {
    color: ${cores.corPrimary};
    line-height: 22px;
    font-weight: 900;
    font-size: 16px;
    width: 96px;
  }
`
