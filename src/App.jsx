import './App.css'
const styles = {
  text: { textAlign: "center" },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
  },itemImage: {
    width: "15%",
    height:"15%",
    borderRadius:"50%",
    marginRight:"10px",
    marginTop:"10px",
  },
  divStyle:{
    display:"flex",
    color:"black",
    fontWeight:"bold",
    borderBottom: "1px solid gray",
  }
};
function App() {
  return <div><h1 style={styles.text} >Cookies and beyond</h1>
  <h3 style={styles.text}>Where cookies maniacs gather</h3>
  <img style={styles.shopImage} src="https://media-cdn.tripadvisor.com/media/daodao/photo-s/13/af/91/d0/caption.jpg" alt="cookie shop"/>
  <h3>Items we're selling</h3>
  <span style={styles.divStyle}><img style={styles.itemImage} src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" alt="coffee"/><div ><h4>COffee</h4> <p>$12.99</p></div>  </span>
  <span style={styles.divStyle}><img style={styles.itemImage} src="https://www.clonelab.at/wp-content/uploads/45.jpg" alt="Water"/> <div><h4>Water</h4> <p>$12.99</p></div>   </span>
  <span style={styles.divStyle}><img style={styles.itemImage} src="https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg" alt="Cookies"/> <div><h4>Cookies</h4> <p>$12.99</p></div>   </span>
  </div>
}

export default App
//npm vs yarn
//{{}}
//auto complete 