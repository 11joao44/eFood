import styled from 'styled-components'
import { cores } from '../../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: -1;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  display: none;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.corPrimary};
  padding: 40px 16px 0 16px;
  width: 360px;
`
export const Product = styled.li`
  display: flex;
  background-color: ${cores.corSecondary};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;
  width: 344px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    margin-left: 8px;
    color: ${cores.corPrimary};

    h3 {
      font-size: 16px;
      font-weight: 900;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
    }

    span {
      img {
        position: absolute;
        width: 16px;
        height: 16px;
        bottom: 8px;
        right: 8px;
        cursor: pointer;
      }
    }
  }
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 16px;

  p {
    color: ${cores.corSecondary};
    font-size: 16px;
    font-weight: bold;
  }
`
