import React, { useState } from "react";
import TodoItem from "./TodoItem";
import NavbarType from "./NavbarType";
import Footer from "./Footer";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {

    e.preventDefault(); // to prevent page reload

    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo(""); // Clear the input field after adding a todo
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  return (
        <>        
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-[url('/pngwing.com.png')] bg-no-repeat bg-contain custom-bg-size">
        <NavbarType></NavbarType>
      <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            name="todo"
            placeholder="Add a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-grow border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-2 text-center"
          />
          <button
            type="submit"
            className="border focus:bg-pink-600 focus:ring-2 px-4 text-lg font-thin bg-pink-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-opacity-75 text-white"
          >
            Add
          </button>
        </div>
      </form>

      <div className="flex flex-col items-center w-1/2">
        {todos.map((todo, index) => (
            <TodoItem todo={todo} index={index} key={index} handleDelete={handleDelete}></TodoItem>
        ))}
      </div>
    </div>
      <Footer></Footer>

    
    </>

  );
}
