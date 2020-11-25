//mobx
import { makeAutoObservable } from 'mobx'
//data
// import items from '../items'
//stuff
import slugify from 'react-slugify'
import axios from 'axios'

class ItemStore {
  items = []
  constructor() {
    makeAutoObservable(this)
  }
  fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/items')
      console.log('fetchCookies -> response', response)
      this.items = response.data
    } catch (error) {
      console.error(
        '🚀 ~ file: itemStore.js ~ line 20 ~ ItemStore ~ fetchItems= ~ error',
        error
      )
    }
  }
  //del
  deleteItem = async (itemID) => {
    try {
      await axios.delete(`http://localhost:8000/items/${itemID}`)
      this.items = this.items.filter((item) => item.id !== itemID)
    } catch (error) {
      console.error(
        '🚀 ~ file: itemStore.js ~ line 34 ~ ItemStore ~ deleteItem ~ error',
        error
      )
    }
  }
  //creating
  createItem = async (item) => {
    try {
      const resp = await axios.post('http://localhost:8000/items', item)
      this.items.push(resp.data)
    } catch (error) {
      console.error(
        '🚀 ~ file: itemStore.js ~ line 47 ~ ItemStore ~ error',
        error
      )
    }
  }
  //updating
  updateItem = async (updatedItem) => {
    try {
      await axios.put(
        `http://localhost:8000/items/${updatedItem.id}`,
        updatedItem
      )
      const item = this.items.find((item) => item.id === updatedItem.id)
      for (const key in item) item[key] = updatedItem[key]
      item.slug = slugify(item.name)
    } catch (error) {
      console.error(
        '🚀 ~ file: itemStore.js ~ line 55 ~ ItemStore ~ updateItem= ~ error',
        error
      )
    }
    console.log('ItemStore -> updateItem -> updatedItem', updatedItem)
  }
}
const itemStore = new ItemStore()
itemStore.fetchItems()

export default itemStore
