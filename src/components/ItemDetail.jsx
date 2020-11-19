import React from 'react'
import { Redirect, useParams } from 'react-router'
import { DetailWrapper } from '../styles'
import DeleteButton from './buttons/DeleteButton'
import itemStore from '../stores/itemStore'
import { observer } from 'mobx-react'
import UpdateButton from './buttons/UpdateButton'

const ItemDetail = () => {
  //params thing
  const itemSlug = useParams().itemSlug
  const item = itemStore.items.find((item) => item.slug === itemSlug)
  if (!item) return <Redirect to='/items' />
  return (
    <DetailWrapper>
      <h1>{item.name}</h1>

      <img src={item.image} alt={item.id} />
      <div>
        <p>{item.description}</p>
        <p>{item.price}$</p>
      </div>
      <UpdateButton oldItem={item} />
      <DeleteButton id={item.id} />
    </DetailWrapper>
  )
}

export default observer(ItemDetail)
