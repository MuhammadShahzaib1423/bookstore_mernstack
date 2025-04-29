import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({ data }) => {
  return (
    <Link to ={`/view-book-details/${data._id}`} >
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all">
      <img src='https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={data.title} className="w-full h-64 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{data.title}</h3>
      <p className="text-gray-500">{data.author}</p>
      <p className="text-blue-600 font-semibold mt-1">${data.price}</p>
    </div>
    </Link>
  )
}



export default BookCard
