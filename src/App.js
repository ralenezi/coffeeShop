import { useState } from 'react'
import items from './items'
//components
import ItemList from './components/ItemList.jsx'
import ItemDetail from './components/ItemDetail.jsx'
//styles
import { ListWrapper, GlobalStyle, ThemeButton } from './styles'
import { ThemeProvider } from 'styled-components'
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
  //
  const setView = () =>
    item ? <ItemDetail item={item} /> : <ItemList setItem={setItem} />
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === 'light' ? '🌞' : '🌚'}
      </ThemeButton>
      <ListWrapper>
        <h1>The ultimate Coffee shop ☕️</h1>
        <h3>We have everything a coffee needs</h3>
        <img
          src='https://cdn2.f-cdn.com/contestentries/1157178/23836476/59f05d51e9719_thumb900.jpg'
          alt='coffee shop'
        />
      </ListWrapper>
      <h3 style={{ margin: '10px' }}>Items we're selling</h3>
      <ThemeButton onClick={() => setItem()}>🔙</ThemeButton>
      {setView()}
    </ThemeProvider>
  )
}

export default App
