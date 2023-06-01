import styled from 'styled-components'
import { cores } from '../../../styles'

export const RestauranteStyle = styled.div`
  position: relative;
  height: 280px;
  background-color: rgba(0, 0, 0, 0.5);

  img {
    position: absolute;
    width: 100%;
    height: 280px;
    object-fit: cover;
    z-index: -1;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    color: ${cores.corTexto};

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;

      h2 {
        font-size: 32px;
        font-weight: 900;
      }

      h3 {
        font-size: 32px;
        font-weight: 100;
        margin-right: 16px;
      }

      span {
        font-size: 16px;
        font-weight: 300;
      }

      img {
        margin-left: 8px;
        width: 15px;
        height: 15px;
        z-index: 1;
      }
    }
  }
`
export const Descricao = styled.p`
  text-align: center;
`
export const CardapioStyle = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`
export const ImageStyle = styled.img`
  width: 300px;
  height: 168px;
  object-fit: cover;
`

export const PratoStyle = styled.div`
  background-color: ${cores.corPrimary};
  color: ${cores.corSecondary};
  position: relative;
  padding: 8px;

  img {
    width: 308px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
  }

  p {
    margin: 8px 0 64px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  button {
    background-color: ${cores.corSecondary};
    color: ${cores.corPrimary};
    position: absolute;
    padding: 4px 0;
    bottom: 8px;
    right: 8px;
    left: 8px;
    border: none;
    cursor: pointer;
  }
`

export const Modal = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &.visivel {
    display: flex;
  }
`

export const ModalContent = styled.div`
background-color: ${cores.corPrimary};
color: ${cores.corTexto};
align-items: center;
position: relative;
display: flex;
padding: 32px;
gap: 24px;

  h3 {
      font-size: 14px;
      font-weight: bold;
    }

    p {
      width: 656px;
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 300;
      line-height: 22px;
    }

    a {
      text-decoration: none;
      padding: 4px 8px;
      background-color: ${cores.corSecondary};
      color: ${cores.corTexto};
      font-size: 14px;
      font-weight: bold;
    }
  }
`
export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalSobre = styled.div`
  a {
    position: absolute;
    right: 16px;
    bottom: 16px;
    background-color: ${cores.corSecondary};
    color: ${cores.corPrimary};
    padding: 8px 16px;
    opacity: 0.5;
    transition: ease-in-out 0.2s;

    &:hover {
      opacity: 1;
      transition: ease-in-out 0.2s;
    }
  }
`

export const ModalDescription = styled.div``

export const Close = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  width: 16px;
  height: 16px;
`
