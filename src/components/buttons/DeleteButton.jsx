import React from 'react'
import { Del } from '../../styles'

const DeleteButton = (props) => {
  const handleDelete = () => props.deleteItem(props.id)
  return (
    <div>
      <Del onClick={handleDelete}>🚮</Del>
    </div>
  )
}

export default DeleteButton
