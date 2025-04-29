import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BookCard from '../Bookcard/BookCard';

const RecentlyAdded = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bookstore/get-recent-books')
        console.log(response.data)
        setBooks(response.data);
      }
      catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div className='mt-8 px-12'>
      <h4 className='text-2xl text-yellow-500'>Recently Added Books</h4>
      <div className="my-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book._id} data={book} />
        ))}
      </div>

    </div>
  )
}

export default RecentlyAdded
