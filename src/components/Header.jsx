import React from 'react'
import { images } from '../constants'

const navImtemsInfo =[
  {name: "Home"},
  {name: "Services"},
  {name: "About Us"},
  {name : "FAQ"},
  {name: "Contact Us"}
 
]

const NavItem = ({name}) => {
  return (
    <li className=' relative group'>
    <a href='/' className='px-4 py-2 group-hover:text-yellow-500' > {name} </a>
    <span className='text-yellow-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100'> / </span>
  </li>
  )
}

const Header = () => {
  return (
    <section>
      <header className="container mx-auto mt-5 px-5 flex justify-between items-center align-middle">
        <div className='cursor-pointer'>
          <img src={images.logo} alt='' />
        </div>
        <div className='flex gap-x-9 items-center align-middle'>
          <ul className='flex gap-x-5 items-center align-middle font-semibold'>

            {navImtemsInfo.map((item)=> (
              <NavItem  key={item.name} name={item.name}/>
            ))}
            <button className='border-2 border-yellow-500 px-6 py-3 rounded-full text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300'>Sign in</button>
          </ul>

        </div>
      </header>
    </section>
  )
}

export default Header