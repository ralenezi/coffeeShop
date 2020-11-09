import React from 'react'
import { DetailWrapper } from '../styles'

const ItemDetail = (props) => {
  return (
    <DetailWrapper>
      <h1>{props.item.name}</h1>

      <img src={props.item.image} alt={props.item.name} />
      <div>
        <p>{props.item.description}</p>
        <p>{props.item.price}$</p>
      </div>
    </DetailWrapper>
  )
}

export default ItemDetail
