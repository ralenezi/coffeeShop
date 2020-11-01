import './App.css'
import items from './items'
import styles from './styles'
function App() {
  const itemList = items.map((item) => (
    <span style={styles.divStyle} key={item.id}>
      <img style={styles.itemImage} alt={item.name} src={item.image} />
      <div>
        <h4>{item.name}</h4>
        <p>{item.price} </p>
      </div>
    </span>
  ))
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
      {itemList}
    </div>
  )
}

export default App
//npm vs yarn
// waht's a json file
