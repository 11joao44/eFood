import styled from 'styled-components'

import { cores } from '../../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  position: relative;
  line-weight: 22px;
  border: 1px solid ${cores.corPrimary};

  a {
    text-decoration: none;
  }

  ${TagContainer} {
    position: absolute;
    margin-left: 8px;
    right: 8px;
    top: 8px;
  }
`

export const Description = styled.div`
  color: ${cores.corPrimary};
  position: relative;
  padding: 10px;

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  span {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;

    img {
      margin-left: 8px;
    }
  }

  p {
    margin-top: 16px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
  }

  a {
    font-weight: bold;
    font-size: 14px;
    padding: 4px 6px;
    background-color: ${cores.corPrimary};
    color: ${cores.corSecondary};
    border: none;
  }
`
