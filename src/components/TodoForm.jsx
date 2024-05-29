import React from 'react'

export default function TodoForm({todo, setTodo, todos, setTodos}) {

   

 
    const handleSubmit = (e) => {
        e.preventDefault(); // to prevent page reload
    
        if (todo.name.trim() !== "") {
          setTodos([...todos, todo]);
          setTodo({name:"", done:false}); // Clear the input field after adding a todo
        }
      };

  return (
    <form className="flex flex-col w-full max-w-md px-4" onSubmit={handleSubmit}>
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        name="todo"
        placeholder="Enter todo items..."
        value={todo.name}
        onChange={(e) => setTodo({name:e.target.value,done:false })}
        className="flex-grow border border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:opacity-90 p-2 text-center shadow-lg input-todo"
      />
      <button
        type="submit"
        className="border focus:bg-pink-600 focus:ring-2 px-4 text-lg font-thin bg-pink-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-opacity-75 text-white hover:shadow-lg"
      >
        Add
      </button>
    </div>
  </form>
  )
}
