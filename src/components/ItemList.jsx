import { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import SingleItem from './SingleItem'
import AddButton from './buttons/AddButton.jsx'
import itemStore from '../stores/itemStore'
import { observer } from 'mobx-react'

const ItemList = () => {
  //searching
  const [query, setQuery] = useState('')

  //returning
  const itemList = itemStore.items
    .filter((item) => item.name.toLowerCase().includes(query))
    .map((item) => <SingleItem itemObject={item} key={item.id} />)
  return (
    <div className='container'>
      <AddButton />
      <SearchBar query={setQuery}></SearchBar>
      <div>{itemList}</div>
    </div>
  )
}

export default observer(ItemList)
