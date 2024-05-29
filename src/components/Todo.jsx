import React, { useState } from "react";
import TodoItem from "./TodoItem";
import NavbarType from "./NavbarType";
import Footer from "./Footer";
import styles from '../components/todoStyles.module.css';
import TodoForm from "./TodoForm";
import TodoImage from "./TodoImage";

export default function Todo() {
  const [todo, setTodo] = useState({name: '', done:false});
  const [todos, setTodos] = useState([]);

  const completedTodos = todos.filter((singleTodo)=>singleTodo.done).length


  const handleDelete = (index) => {
   
    setTodos(todos.filter((_, i) => i !== index));
  };

  const sortedTodos = todos.slice().sort((a,b)=>Number(a.done) - Number(b.done))

  return (
    <>        
      <div className={`relative flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-[url('/pngwing.com.png')] bg-no-repeat bg-contain ${styles.customBgSize}`}>
        
        <TodoImage></TodoImage>
       
        <NavbarType />
        <TodoForm todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />

        <div className="flex flex-col items-center w-full max-w-md px-4">
          {sortedTodos.map((todo, index) => (
            <TodoItem todo={todo} index={index} key={index} handleDelete={handleDelete} todos={todos}  setTodos={setTodos}/>
          ))}
        </div>

      
      </div>
      <Footer completedTodos={completedTodos} />
    </>
  );
}
