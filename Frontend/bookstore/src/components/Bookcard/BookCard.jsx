import React from 'react'

const BookCard = ({ data }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all">
      <img src={data.url} alt={data.title} className="w-full h-64 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{data.title}</h3>
      <p className="text-gray-500">{data.author}</p>
      <p className="text-blue-600 font-semibold mt-1">${data.price}</p>
    </div>
  )
}

export default BookCard
