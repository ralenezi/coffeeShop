import React from 'react'
import { Redirect, useParams } from 'react-router'
import { DetailWrapper } from '../styles'
import DeleteButton from './buttons/DeleteButton'

const ItemDetail = (props) => {
  // const item = props.items[0]
  const handleDelete = (itemID) => {
    props.deleteItem(itemID)
    props.setItem()
  }
  //params thing
  const itemSlug = useParams().itemSlug
  const item = props.items.find((item) => item.slug === itemSlug)
  if (!item) return <Redirect to='/items' />
  return (
    <DetailWrapper>
      <h1>{item.name}</h1>

      <img src={item.image} alt={item.id} />
      <div>
        <p>{item.description}</p>
        <p>{item.price}$</p>
      </div>
      <DeleteButton id={item.id} deleteItem={handleDelete} />
    </DetailWrapper>
  )
}

export default ItemDetail
