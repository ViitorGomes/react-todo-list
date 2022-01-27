import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { StyledScroll } from './components/style/elements/Scroll/style'
import Light from './components/style/Themes/light'
import Dark from './components/style/Themes/dark'
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';

const App = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background.bg2};
  transition: background-color .3s;
`

export default function index() {

  const [ theme, setTheme ] = useState(() => {
    const storedTheme = JSON.parse(localStorage.getItem('theme'))
    
    if (storedTheme) {
      return storedTheme === 'light' ? Light : Dark
    }

    return Light
  })

  useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme.title))
  }, [theme.title])

  function toggleTheme() {
    setTheme(theme.title === "light" ? Dark : Light)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledScroll/>
      <App>
        <Dashboard themeCb={toggleTheme}/>
      </App>
    </ThemeProvider>
  )
}

