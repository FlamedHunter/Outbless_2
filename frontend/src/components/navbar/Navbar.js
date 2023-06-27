import React, { Component, useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaShoppingCart,  } from 'react-icons/fa';

const Menu = () => (
    <>
      <p><a href="/">Home</a></p>
      <p><a href="/products">Products</a></p>
      <p><a href="/contact">Contact</a></p>
    </>
  )
  
  const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  
    return (
      <div className='navbar'>
        <div className='navbar-links'>
          <div className='navbar-logo'>
            <img src="" alt="logo" />
          </div>
          <div className='navbar-links-container'>
            <Menu />
          </div>
        </div>
        <a href="/cart">
            <FaShoppingCart size={23} />
        </a>
        <div className='navbar-menu'>
          {toggleMenu ? 
            <FaTimes size={27} onClick={() => setToggleMenu(false)} />
            : <FaBars size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
              <div className='navbar-menu-container'>
                <div className='navbar-menu-container-links'>
                  <Menu />
                </div>
              </div>
            )
            }
        </div>
      </div>
    )
  }

export default Navbar;