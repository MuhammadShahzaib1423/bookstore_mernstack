import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const links = [
    { title: 'Home', link: '/' },
    { title: 'About Us', link: '/about-us' },
    { title: 'All Books', link: '/all-books' },
    { title: 'Cart', link: '/cart' },
    { title: 'Profile', link: '/profile' },
  ]

  return (
    <div className='bg-zinc-800 text-white px-8 py-2 flex items-center justify-between'>
      <div>
        <h1 className='text-2xl font-bold'>Book Heaven</h1>
      </div>
      <div className='nav-links-bookheaven flex items-center gap-4 '> 
                <div className='flex gap-4'>
        {links.map((name, index) => (
          <Link key={index} to={name.link} className='hover:text-blue-500 tansition-all duration-300 cursor-pointer '>
            {name.title}
          </Link>
        ))}
      </div>
      <div className='flex gap-4 '>
        <button className=' px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white cursor-pointer'>
          <Link to='/login'> Login</Link>
        
        </button>
        <button className='px-4 py-2 rounded border text-white hover:bg-white hover:text-black bg-blue-500 cursor-pointer'>
          <Link to='/signup'>Signup </Link></button>

      </div>
      </div>
 
    </div>
  )
}

export default Navbar
 