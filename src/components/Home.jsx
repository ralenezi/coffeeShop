import React from 'react'
import { ListWrapper } from '../styles'
import ItemList from './ItemList'

const Home = ({ setItem, itemz, deleteItem }) => {
  return (
    <div>
      <ListWrapper>
        <h1>The ultimate Coffee shop ☕️</h1>
        <h3>We have everything a coffee needs</h3>
        <img
          src='https://cdn2.f-cdn.com/contestentries/1157178/23836476/59f05d51e9719_thumb900.jpg'
          alt='coffee shop'
        />
      </ListWrapper>
      <h3 style={{ margin: '10px' }}>Items we're selling</h3>
      <ItemList
        setItem={setItem}
        itemz={itemz}
        deleteItem={deleteItem}></ItemList>
    </div>
  )
}

export default Home
