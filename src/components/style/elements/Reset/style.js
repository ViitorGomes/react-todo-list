import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  html, body {
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  table {
    border-collapse: collapse;
  }

  button {
    outline: 0;
  }
`