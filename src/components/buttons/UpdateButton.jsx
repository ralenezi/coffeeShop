import React, { useState } from 'react'
import { UpdateButtonStyled } from '../../styles'
import ItemModal from '../modals/ItemModal'

const UpdateButton = ({ oldItem }) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ItemModal isOpen={isOpen} closeModal={closeModal} oldItem={oldItem} />
    </>
  )
}

export default UpdateButton
