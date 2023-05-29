import { createGlobalStyle } from 'styled-components'

export const cores = {
  corPrimary: '#E66767',
  corSecondary: '#FFEBD9',
  corBackground: '#F5F5F5'
}

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.corBackground};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
