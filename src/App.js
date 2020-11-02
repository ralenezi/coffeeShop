import './App.css'
import Item from './components/Item'
import styles from './styles'
function App() {
  return (
    <div>
      <h1 style={styles.text}>The ultimate Coffee shop ☕️</h1>
      <h3 style={styles.text}>We have everything a coffee needs</h3>
      <img
        style={styles.shopImage}
        src='https://cdn2.f-cdn.com/contestentries/1157178/23836476/59f05d51e9719_thumb900.jpg'
        alt='coffee shop'
      />
      <h3 style={{ margin: '10px' }}>Items we're selling</h3>
      <Item />
    </div>
  )
}

export default App
//npm vs yarn
// waht's a json file
