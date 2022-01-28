import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Portfolio
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About Me
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Services
                </a>
              </li>{' '}
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  How What
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact Us
                </a>
              </li>
            </ul>
            <form className='form-inline my-2 my-lg-0'></form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
