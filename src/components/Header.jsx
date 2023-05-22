import React from 'react'
import {images} from '../constants'

const Header = () => {
  return (
   <section>
    <header className='container mx-auto px-5'>
        <div>
         <img src={images.logo} alt='' />
        </div>
        <div>
          <ul>
            <li>
                <a href='/'> Home </a>
            </li>
            <li>
                <a href='/'> About Us </a>
            </li>
            <li>
                <a href='/'> Contact US </a>
            </li>
            <li>
                <a href='/'> Services </a>
            </li>
            <button>Sign in</button>
          </ul>
        </div>
    </header>
   </section>
  )
}

export default Header