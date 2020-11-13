// Styling
import { Logo, NavStyled, ThemeButton, NavItem } from '../styles'
import lightLogo from '../light-logo.svg'
import darkLogo from '../dark-logo.svg'
const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyled className='navbar navbar-expand-sm'>
      <Logo className='navbar-brand' to='/'>
        <img src={currentTheme === 'light' ? lightLogo : darkLogo} alt='logo' />
      </Logo>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav ml-auto'>
          <NavItem className='nav-item aaa' to='/items'>
            items
          </NavItem>
          <ThemeButton className='nav-item' onClick={toggleTheme}>
            {currentTheme === 'light' ? '🌞' : '🌚'}
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  )
}
export default NavBar
