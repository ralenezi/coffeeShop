import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { ItemWrapper, ItemImage } from '../styles'
import DeleteButton from './buttons/DeleteButton'
import UpdateButton from './buttons/UpdateButton'

const SingleItem = (props) => {
  return (
    <ItemWrapper>
      <Link to={`/items/${props.itemObject.slug}`}>
        <ItemImage alt={props.itemObject.name} src={props.itemObject.image} />
      </Link>
      <div>
        <h4>{props.itemObject.name}</h4>
        <p>{props.itemObject.price} </p>
      </div>
      <span>
        <UpdateButton Olditem={props.itemObject} />
        <DeleteButton id={props.itemObject.id} />
      </span>
    </ItemWrapper>
  )
}

export default observer(SingleItem)
