import { createGlobalStyle } from 'styled-components'

import Header from './Header'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
  </>
)

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #363636;
    --color-light: #7B7B7B;
    --color-bg: #FAFAFA;
    --color-bg__light: #FFFFFF;
    --color-link: #F15A5A;
    --color-border: #DBDBDB;
    --font-size__large: 24px;
    --font-size__medium: 14px;
    --font-size__small: 12px;
    
  }
  *, body {
    margin: 0;
    padding: 0;
    outline-color: var(--color-primary)
  }
  body {
    background-color: var(--color-bg);
    color: var(--color-light);
    font-family: 'Poppins', sans-serif;
    min-height: 101vh;
  }
  main {
    background-color: var(--color-bg);
  }
  h1, h2, h3 {
    font-size: var(--font-size__large);
  }
  h4, h5 {
    font-size: var(--font-size__medium);
  }
  p, a, li {
    font-size: var(--font-size__small);
  }
  a {
    color: var(--color-link);
    text-decoration: none;
  }
  .container {
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
  }
`

export default Layout
