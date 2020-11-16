import React from 'react'
import { Del } from '../../styles'
import itemStore from '../../stores/itemStore'

const DeleteButton = (props) => {
  const handleDelete = (event) => {
    // event.preventDefault()
    itemStore.deleteItem(props.id)
  }
  return (
    <div>
      <Del onClick={handleDelete}>🚮</Del>
    </div>
  )
}

export default DeleteButton
