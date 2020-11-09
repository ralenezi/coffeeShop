import React from 'react'
import { DetailWrapper } from '../styles'
import DeleteButton from './buttons/DeleteButton'

const ItemDetail = (props) => {
  const handleDelete = (itemID) => {
    props.deleteItem(itemID)
    props.setItem()
  }

  return (
    <DetailWrapper>
      <h1>{props.item.name}</h1>

      <img src={props.item.image} alt={props.item.name} />
      <div>
        <p>{props.item.description}</p>
        <p>{props.item.price}$</p>
      </div>
      <DeleteButton id={props.item.id} deleteItem={handleDelete} />
    </DetailWrapper>
  )
}

export default ItemDetail
