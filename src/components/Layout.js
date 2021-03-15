import { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './Themes'
import Header from './Header'
import ThemeSwitchButton from './ThemeSwitchButton'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <ThemeSwitchButton theme={theme} onClick={themeToggler}>
        Switch Theme
      </ThemeSwitchButton>
      <main>{children}</main>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${({ theme }) => theme.colorPrimary};
    --color-light: ${({ theme }) => theme.colorLight};
    --color-bg: ${({ theme }) => theme.colorBg};
    --color-bg__light: ${({ theme }) => theme.colorBgLight};
    --color-link: ${({ theme }) => theme.colorLink};
    --color-border: ${({ theme }) => theme.colorBorder};
    --font-size__large: 24px;
    --font-size__medium: 14px;
    --font-size__small: 12px;
    
  }
  *, body {
    margin: 0;
    padding: 0;
    outline-color: var(--color-primary);
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
