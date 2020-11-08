import items from '../items'
import SingleItem from './SingleItem'
const Item = () => {
  const itemList = items.map((item) => (
    <SingleItem itemObject={item} key={item.id} />
  ))
  return <div>{itemList}</div>
}

export default Item
