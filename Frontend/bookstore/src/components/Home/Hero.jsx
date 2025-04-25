import React from 'react'
import Heroimg from '../../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='h-[75vh] flex md:flex-row flex-col gap-4 px-10 items-center justify-center '>
        <div className='lg:w-3/6  flex flex-col  items-start lg:items-start justify-center mt-10 '>
        <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100'>Escape Into Worlds Beyond the Page</h1>
        <p className='text-lg text-gray-200 mt-4'>
    Browse a curated collection of must-read books from every genre. Whether you're into thrillers or love stories, there's something here for every reader.
</p>
<div className='mt-8'>
<button className='text-yellow-100 text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full cursor-pointer'>Discover Books</button>
                                                                                                                                                                                                                                                         
</div>
        </div>
        <div className='lg:w-3/6 w-full  flex items-center justify-center'>
        <img src={Heroimg} alt="Image" className='' /> </div>
      
    </div>
  )
}

export default Hero
