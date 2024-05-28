import React from 'react'

export default function TodoItem({todo,  handleDelete, key, index}) {
 return (
    <div key={key} className="flex items-center gap-2 mb-2 w-full">
            <p className="flex-grow border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-2 text-2xl font-thin text-center">
              {todo}
            </p>
            
            <button
              onClick={() => handleDelete(index)}
              className="border focus:bg-pink-600 focus:ring-2 px-4 text-lg font-thin  rounded-lg focus:outline-none focus:ring-4 focus:ring-opacity-75 text-white p-2 border-red-500 hover:shadow-lg"
            >❌</button>

          </div>
  )
}
