import styled from 'styled-components'

import { cores } from '../../../styles'

export const Card = styled.div`
  background-color: ${cores.corPrimary};
  color: ${cores.corSecondary};
  position: relative;
  width: 320px;
  padding: 8px;

  img {
    cursor: pointer;
    transition: ease 0.5s;

    &:hover {
      transform: scale(1.01);
      transition: ease 0.5s;
    }
  }
`

export const Description = styled.div`
  position: relative;

  h3 {
    font-size: 16px;
    font-weight: 900;
    line-height: 18px;
  }

  p {
    margin-top: 16px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

  a {
    display: block;
    width: 100%;
    text-align: center;
    background-color: ${cores.corSecondary};
    color: ${cores.corPrimary};
    text-decoration: none;
    font-weight: bold;
    padding: 4px 6px;
    font-size: 14px;
    border: none;
  }
`
export const Modal = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  &.visivel {
    display: flex;
  }
`
export const ModalContent = styled.div`
  padding: 32px;
  width: 1024px;
  background-color: ${cores.corPrimary};
  color: ${cores.corSecondary};
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;

  h3 {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      width: 100%;
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }

    a {
      text-decoration: none;
      padding: 4px 8px;
      background-color: ${cores.corSecondary};
      color: ${cores.corPrimary};
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

export const DescriptionModal = styled.div`
  display: block;
`
export const Close = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`
