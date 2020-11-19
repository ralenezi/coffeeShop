//mobx
import { makeObservable, observable, action } from 'mobx'
//data
// import items from '../items'
//stuff
import slugify from 'react-slugify'
import axios from 'axios'

class ItemStore {
  items = []
  constructor() {
    makeObservable(this, {
      items: observable,
      createItem: action,
      deleteItem: action,
      updateItem: action,
    })
  }
  fetchItems = async () => {
    const response = await axios.get('http://localhost:8000/items')
    console.log('fetchCookies -> response', response)
    this.items = response.data
  }
  //del
  deleteItem = (itemID) =>
    (this.items = this.items.filter((item) => item.id !== itemID))
  //creating
  createItem = (item) => {
    item.id = this.items[this.items.length - 1].id + 1
    item.slug = slugify(item.name)
    this.items.push(item)
    console.log('objectu', this.items)
  }
  //updating
  updateItem = (updatedItem) => {
    console.log('ItemStore -> updateItem -> updatedItem', updatedItem)
    const item = this.items.find((item) => item.id === updatedItem.id)
    for (const key in item) item[key] = updatedItem[key]
    item.slug = slugify(item.name)
  }
}
const itemStore = new ItemStore()
itemStore.fetchItems()

export default itemStore
