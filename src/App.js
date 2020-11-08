import './App.css'
import Item from './components/Item'
import { ListWrapper, GlobalStyle } from './styles'
import { ThemeProvider } from 'styled-components'
const theme = {
  titleColor: '#023047',
  backgroundColor: '#FAFAFA',
  priceColor: '#8d99ae',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ListWrapper>
        <h1>The ultimate Coffee shop ☕️</h1>
        <h3>We have everything a coffee needs</h3>
        <img
          src='https://cdn2.f-cdn.com/contestentries/1157178/23836476/59f05d51e9719_thumb900.jpg'
          alt='coffee shop'
        />
      </ListWrapper>
      <h3 style={{ margin: '10px' }}>Items we're selling</h3>
      <Item />
    </ThemeProvider>
  )
}

export default App
