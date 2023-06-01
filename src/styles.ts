import { createGlobalStyle } from 'styled-components'

export const cores = {
  corPrimary: '#E66767',
  corSecondary: '#FFEBD9',
  corBackground: '#F5F5F5',
  corTexto: '#ffffff'
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

    a {
      text-decoration: none;
    }
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
