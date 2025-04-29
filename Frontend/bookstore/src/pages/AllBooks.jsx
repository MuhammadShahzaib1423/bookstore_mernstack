import React, { useState, useEffect } from 'react'
import BookCard from '../components/Bookcard/BookCard';

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/bookstore/get-books');
        const data = await response.json(); 
        console.log(data);
        setBooks(data);
      }
      catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks(); // 👈 Correct placement here
  }, []);

  return (
    <div className='bg-zinc-800 text-white'>
      <h1 className='text-center text-4xl font-bold'>All Books</h1>

      <div className=' my-4 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 cursor-pointer'>
       {books.map((book,index)=>
      (
        <BookCard key={index} data={book} />
           
        
      ))}
      </div>

    </div>
  )
}

export default AllBooks
