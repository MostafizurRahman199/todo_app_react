import React from 'react'

export default function TodoItem({todo,  handleDelete, key, index}) {
 return (
    <div key={key} className="flex items-center gap-2 mb-2 w-full">
            <p className="flex-grow border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-2 text-2xl font-thin text-center hover:bg-red-600 hover:shadow-lg hover:text-white text-pink-700">
              {todo}
            </p>
            
            <button
              onClick={() => handleDelete(index)}
              className="border px-4 text-lg font-thin  rounded-lg focus:outline-none  text-white p-2 border-red-500 hover:shadow-lg"
            >❌</button>

          </div>
  )
}
