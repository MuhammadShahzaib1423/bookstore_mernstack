import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-zinc-800 text-white h-screen flex justify-center items-center'>
      <div className='bg-zinc-900 p-8 rounded shadow-lg w-96'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Login</h1>
        <form className='flex flex-col'>
          <input type='email' placeholder='Email' className='mb-4 p-2 rounded bg-zinc-700 text-white' required />
          <input type='password' placeholder='Password' className='mb-4 p-2 rounded bg-zinc-700 text-white' required />
          <button type='submit' className='bg-yellow-500 text-black p-2 rounded hover:bg-yellow-600'>Login</button>
        </form>
        <div className='mt-4 text-center'>
        <p className='text-gray-400'>Don't have an account? <Link to='/signup' className='text-yellow-500 hover:underline'>Sign Up</Link></p>

      
    </div>
      </div>
      
    </div>
  )
}

export default Login
