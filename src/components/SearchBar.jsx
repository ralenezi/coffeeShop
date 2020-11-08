import React from 'react'
import { Input } from '../styles'

const SearchBar = (props) => (
  <Input
    placeholder='Search for an item...'
    onChange={(event) => props.query(event.target.value)}
  />
)

export default SearchBar
