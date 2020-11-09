import { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import SingleItem from './SingleItem'

const ItemList = (props) => {
  //searching
  const [query, setQuery] = useState('')

  //returning
  const itemList = props.itemz
    .filter((item) => item.name.toLowerCase().includes(query))
    .map((item) => (
      <SingleItem
        itemObject={item}
        key={item.id}
        setItem={props.setItem}
        deleteItem={props.deleteItem}
      />
    ))

  return (
    <>
      <SearchBar query={setQuery}></SearchBar>
      {itemList}
    </>
  )
}

export default ItemList
