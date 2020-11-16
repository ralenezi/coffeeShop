import { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import ItemModal from '../modals/ItemModal.jsx'

const AddButton = ({ createItem }) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  console.log(createItem)
  return (
    <>
      <BsPlusCircle className='float-right' size='2em' onClick={openModal} />
      <ItemModal
        isOpen={isOpen}
        closeModal={closeModal}
        createItem={createItem}
      />
    </>
  )
}

export default AddButton
