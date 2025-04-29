import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: you can use any icon here

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { title: 'Home', link: '/' },
    { title: 'About Us', link: '/about-us' },
    { title: 'All Books', link: '/all-books' },
    { title: 'Cart', link: '/cart' },
    { title: 'Profile', link: '/profile' },
  ];

  return (
    <div className='bg-zinc-800 text-white px-6 py-3 flex items-center justify-between relative cursor-pointer'>
      <div>
        <h1 className='text-2xl font-bold'>Book Heaven</h1>
      </div>

      <div className='hidden md:flex items-center gap-6'>
        {links.map((name, index) => (
          <Link key={index} to={name.link} className='hover:text-blue-500 transition duration-300'>
            {name.title}
          </Link>
        ))}
        <Link to='/login'>
          <button className='px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white'>
            Login
          </button>
        </Link>
        <Link to='/signup'>
          <button className='px-4 py-2 rounded border text-white hover:bg-white hover:text-black bg-blue-500'>
            Signup
          </button>
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-zinc-800 flex flex-col items-center py-4 gap-4 z-50'>
          {links.map((name, index) => (
            <Link key={index} to={name.link} className='hover:text-blue-500' onClick={() => setMenuOpen(false)}>
              {name.title}
            </Link>
          ))}
          <Link to='/login' onClick={() => setMenuOpen(false)}>
            <button className='px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white cursor-pointer'>
              Login
            </button>
          </Link>
          <Link to='/signup' onClick={() => setMenuOpen(false)}>
            <button className='px-4 py-2 rounded border text-white hover:bg-white hover:text-black bg-blue-500 cursor-pointer'>
              Signup
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
