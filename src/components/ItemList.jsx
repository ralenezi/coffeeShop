import { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import items from '../items'
import SingleItem from './SingleItem'

const ItemList = (props) => {
  const [query, setQuery] = useState('')
  const itemList = items
    .filter((item) => item.name.toLowerCase().includes(query))
    .map((item) => (
      <SingleItem itemObject={item} key={item.id} setItem={props.setItem} />
    ))
  return (
    <>
      <SearchBar query={setQuery}></SearchBar>
      {itemList}
    </>
  )
}

export default ItemList
