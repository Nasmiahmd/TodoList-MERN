import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-navbar min-h-12.5 rounded-b-xl flex items-center justify-center px-4'>
      <div className='flex items-center justify-between w-full max-w-5xl mx-auto'>

        <h1 className='text-2xl font-semibold text-navfontcolor tracking-tighter font-mono'><Link to={'/'}>TODO List</Link></h1>
        <div className=''>
          <Link to={'/message'} >
            <span className='text-navfontcolor font-medium text-xl hover:opacity-80 transition-opacity'>Leave a message</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar