import { useState } from 'react'
import Modal from 'react-modal'
import { CreateButtonStyled } from '../../styles'
import itemStore from '../../stores/itemStore'

const ItemModal = ({ isOpen, closeModal, oldItem }) => {
  const [item, setItem] = useState(
    oldItem ?? {
      name: '',
      price: 0,
      description: '',
      image: '',
    }
  )
  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    itemStore[oldItem ? 'updateItem' : 'createItem'](item)
    closeModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Item Modal'>
      <h3>New Item</h3>
      <form>
        <div className='form-group row'>
          <div className='col-6'>
            <label>Name</label>
            <input
              required
              type='text'
              className='form-control'
              name='name'
              value={item.name}
              onChange={handleChange}
            />
          </div>
          <div className='col-6'>
            <label>Price</label>
            <input
              type='number'
              min='1'
              className='form-control'
              name='price'
              value={item.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <label>Description</label>
          <input
            type='text'
            className='form-control'
            name='description'
            value={item.description}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Image</label>
          <input
            type='text'
            className='form-control'
            name='image'
            value={item.image}
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className='btn float-right' onClick={handleSubmit}>
          {oldItem ? 'Update' : 'Create'}
        </CreateButtonStyled>
      </form>
    </Modal>
  )
}

export default ItemModal
