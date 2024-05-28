import React, { useState } from 'react'

export default function Todo() {

const [todo , setTodo] = useState("");

  return (
    <div>
        <form className='flex flex-cols justify-center '>

            <div className='grid grid-cols-2 w-1/2 justify-center gap-2 my-20'>
            <input type="text" name="todo" placeholder="Add a todo"  value={todo} onChange={(e)=>setTodo(e.target.value)}  className="border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-5"/>

        
            <button type="submit" className='border  focus:bg-pink-600 focus:ring-pink-2 px-2 w-1/2 text-2xl font-thin bg-pink-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-opacity-75 text-white'>Add</button>
            
            </div>
        </form>
    </div>
  )
}
