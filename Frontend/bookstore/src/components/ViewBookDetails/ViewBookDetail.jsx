import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewBookDetail = () => {
  const { bookid } = useParams(); // Get book ID from URL
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/bookstore/get-books/${bookid}`);
        const data = await response.json();
        console.log(data);
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookid]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-zinc-900">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="px-12 py-8 bg-zinc-900 flex flex-col md:flex-row text-white">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src= "https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={book.title}
          className="w-3/4 h-auto object-cover rounded"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center pl-8 mt-8 md:mt-0">
        <h1 className="text-4xl text-yellow-500 font-bold">{book.title}</h1>
        <p className="text-lg mt-4">Author: {book.author}</p>
        <p className="text-lg mt-2">Price: ${book.price}</p>
        <p className="text-lg mt-2">
          Description: {book.description || 'No description available.'}
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded hover:bg-yellow-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ViewBookDetail;
