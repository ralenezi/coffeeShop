import styled, { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.headingColor};
    background-color: ${(props) => props.theme.backgroundColor}
    
  }
`
const ListWrapper = styled.div`
  img {
    width: 40%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
  }

  h1,
  h3,
  h4 {
    text-align: center;
  }
`
const ItemImage = styled.img`
  width: 15%;
  height: 15%;
  border-radius: 50%;
  margin: 10px;
`

export const ItemWrapper = styled.span`
  display: flex;
  color: black;
  font-weight: bold;
  border-bottom: 1px solid gray;
  p {
    color: ${(props) => props.theme.priceColor};
    font-weight: lighter;
    font-size: small;
  }
  h4 {
    color: ${(props) => props.theme.titleColor};
  }
`
export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  background: none;
  border: none;
  height: 2em;
  width: 2em;
  cursor: pointer;
  color: ${(props) => props.theme.backgroundColor};
`
export { ListWrapper, ItemImage, GlobalStyle }
