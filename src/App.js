import { useState } from 'react'
import { Route, Switch } from 'react-router'
//data
import items from './items'
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

  //
  const [item, setItem] = useState(null)

  //deleting
  const [itemz, setItemz] = useState(items)
  const deleteItem = (itemID) =>
    setItemz(itemz.filter((item) => item.id !== itemID))

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme}></NavBar>
      <Switch>
        <Route exact path='/items'>
          <ItemList setItem={setItemz} itemz={itemz} deleteItem={deleteItem} />
        </Route>
        <Route path='/items/:itemSlug'>
          <ItemDetail items={itemz} deleteItem={deleteItem} setItem={setItem} />
        </Route>
        <Route path='/'>
          <Home setItem={setItemz} itemz={itemz} deleteItem={deleteItem} />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
