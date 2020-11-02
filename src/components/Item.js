import items from '../items'
import styles from '../styles'
import SingleItem from './SingleItem'
const Item = () => {
  const itemList = items.map((item) => <SingleItem itemObject={item} />)
  return <div style={styles.list}>{itemList}</div>
}

export default Item
