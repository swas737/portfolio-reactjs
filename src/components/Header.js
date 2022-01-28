import React from 'react'
import Typed from 'react-typed'

function Header() {
  return (
    <div className='header-wraper'>
      <div className='main-info'>
        <h1>Web dev</h1>
        <Typed
          className='typed-text'
          strings={['I Am Swastika ', 'Web Designer', 'Web Development']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href='#' className='btn-main-offer'>
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Header
