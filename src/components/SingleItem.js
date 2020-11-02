import styles from '../styles'

const SingleItem = (props) => {
  return (
    <div>
      <span style={styles.divStyle}>
        <img
          style={styles.itemImage}
          alt={props.itemObject.name}
          src={props.itemObject.image}
        />
        <div>
          <h4>{props.itemObject.name}</h4>
          <p>{props.itemObject.price} </p>
        </div>
      </span>
    </div>
  )
}

export default SingleItem
