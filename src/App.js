import { useState } from 'react'
import { Route, Switch } from 'react-router'
//components
import ItemList from './components/ItemList.jsx'
import ItemDetail from './components/ItemDetail.jsx'
//styles
import { GlobalStyle } from './styles'
import { ThemeProvider } from 'styled-components'
import Home from './components/Home'
import NavBar from './components/NavBar'
const theme = {
  light: {
    titleColor: '#023047',
    backgroundColor: '#FAFAFA',
    priceColor: '#8d99ae',
    headingColor: '#000007',
  },
  dark: {
    titleColor: '#fefafb', // main font color
    backgroundColor: '#242424', // main background color
    priceColor: '#ff85a2',
    headingColor: 'papayawhip',
  },
}

function App() {
  const [currentTheme, setCurrentTheme] = useState('light')
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme}></NavBar>
      <Switch>
        <Route exact path='/items'>
          <ItemList />
        </Route>
        <Route path='/items/:itemSlug'>
          <ItemDetail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
