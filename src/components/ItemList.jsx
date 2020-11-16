import { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import SingleItem from './SingleItem'
import AddButton from './buttons/AddButton.jsx'

const ItemList = ({ setItem, itemz, deleteItem, createItem }) => {
  //searching
  const [query, setQuery] = useState('')

  //returning
  const itemList = itemz
    .filter((item) => item.name.toLowerCase().includes(query))
    .map((item) => (
      <SingleItem
        itemObject={item}
        key={item.id}
        setItem={setItem}
        deleteItem={deleteItem}
      />
    ))
  console.log(createItem)
  return (
    <div className='container'>
      <AddButton createItem={createItem} />
      <SearchBar query={setQuery}></SearchBar>
      <div>{itemList}</div>
    </div>
  )
}

export default ItemList
