import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  children: string
}

const Button = ({ children }: Props) => {
  return <ButtonStyle>{children}</ButtonStyle>
}

export default Button

const ButtonStyle = styled.button`
  background-color: ${cores.corSecondary};
  color: ${cores.corPrimary};
  padding: 4px 0;
  width: 100%;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`
