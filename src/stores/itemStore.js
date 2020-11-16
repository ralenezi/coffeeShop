//mobx
import { makeObservable, observable, action } from 'mobx'
//data
import items from '../items'
//stuff
import slugify from 'react-slugify'

class ItemStore {
  items = items
  constructor() {
    makeObservable(this, {
      items: observable,
      createItem: action,
      deleteItem: action,
    })
  }

  //del
  deleteItem = (itemID) =>
    (this.items = this.items.filter((item) => item.id !== itemID))
  //creating
  createItem = (item) => {
    item.id = this.items[items.length - 1].id + 1
    item.slug = slugify(item.name)
    this.items.push(item)
    console.log('objectu', this.items)
  }
}
const itemStore = new ItemStore()
export default itemStore
