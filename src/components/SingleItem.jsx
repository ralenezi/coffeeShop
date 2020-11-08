import { ItemWrapper, ItemImage } from '../styles'

const SingleItem = (props) => {
  return (
    <div>
      <ItemWrapper>
        <ItemImage alt={props.itemObject.name} src={props.itemObject.image} />
        <div>
          <h4>{props.itemObject.name}</h4>
          <p>{props.itemObject.price} </p>
        </div>
      </ItemWrapper>
    </div>
  )
}

export default SingleItem
