import styled, { createGlobalStyle } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.headingColor};
    background-color: ${(props) => props.theme.backgroundColor}
    
  }
`
//before the components, header and shop's photo
export const ListWrapper = styled.div`
  img {
    width: 40%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
  }
  h1,
  h3 {
    text-align: center;
  }
`
//items images
export const ItemImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin: 10px;
  object-fit: cover;
`
// single item style.. item image, name and price
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
  span {
    margin-right: 5%;
    margin-left: auto;
  }
`
//delete button
export const Del = styled.h3`
  font-size: xx-large;
  margin-right: 5%;
  margin-left: auto;
  cursor: pointer;
`
//for the dark mode button
export const ThemeButton = styled.button`
  font-size: 1.5em;
  margin: 1em;
  background: none;
  border: none;
  height: 2em;
  width: 2em;
  cursor: pointer;
  color: ${(props) => props.theme.backgroundColor};
`
//search bar
export const Input = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 70%;
`
//detail page
export const DetailWrapper = styled.div`
  margin: 20px;
  img {
    height: 200px;
    float: left;
  }
  div {
    margin: 30px;
    display: inline-flex;
    flex-direction: column;
  }
`
//link for logos
export const Logo = styled(Link)`
  img {
    background: none;
    border: none;
    height: 2em;
    width: 2em;
  }
`
//navbar
export const NavStyled = styled.nav`
  background-color: ___CSS_0___;
`
export const NavItem = styled(NavLink)`
  margin: 2.2em;
  color: ${(props) => props.theme.headingColor};

  &.active {
    color: ${(props) => props.theme.priceColor};
  }
  &.aaa:hover {
    color: pink;
    text-decoration: none;
  }
`
//button for the modal thing
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.headingColor};
  background-color: ${(props) => props.theme.backgroundColor};

  &:hover {
    color: ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.priceColor};
  }
`
