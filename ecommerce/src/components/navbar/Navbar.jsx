import React, {useState} from 'react'
import './navbar.scss';
import logo from '../../images/logo.svg';
import cartIcon from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';
import close from '../../images/icon-close.svg'

const Menu = () => {
  return (
    <>
      <ul>
        <img src={close} alt='logo' />
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  )
}

const Navbar = () => {
  return (
    <nav>
        <div className='app__menu'>
            <img src={logo} alt='logo' className='app__menu-logo' />
            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='app__menu-mobile'>
              <Menu/>
            </div>
        </div>
        <div className="app__cart">
            <img src={cartIcon} alt='cart' className='app__cart-icon' />
            <img src={avatar} alt='profile' className='app__cart-profile' />
        </div>
    </nav>
  )
}

export default Navbar