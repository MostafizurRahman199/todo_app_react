import React, { useState } from "react";
import TodoItem from "./TodoItem";
import NavbarType from "./NavbarType";
import Footer from "./Footer";
import styles from '../components/todoStyles.module.css';
import TodoForm from "./TodoForm";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>        
      <div className={`relative flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-[url('/pngwing.com.png')] bg-no-repeat bg-contain ${styles.customBgSize}`}>
        <img src="/butterfly1.png" className={`${styles.butterfly1} ${styles.butterfly} w-10 h-10`} alt="Butterfly 1"/>
        <img src="/butterfly2.png" className={`${styles.butterfly2} ${styles.butterfly} w-10 h-10`} alt="Butterfly 2"/>
        <img src="/f1.png" className={`${styles.butterfly3} ${styles.butterfly} w-10 h-10`} alt="Butterfly 3"/>
        <img src="/f2.png" className={`${styles.butterfly4} ${styles.butterfly} w-10 h-10`} alt="Butterfly 4"/>
        <img src="/f3.png" className={`${styles.butterfly5} ${styles.butterfly} w-10 h-10`} alt="Butterfly 5"/>
        <img src="/f4.png" className={`${styles.butterfly6} ${styles.butterfly} w-10 h-10`} alt="Butterfly 6"/>
        <img src="/f5.png" className={`${styles.butterfly7} ${styles.butterfly} w-10 h-10`} alt="Butterfly 7"/>

        <img src="/f6.png" className={`${styles.butterfly8} ${styles.butterfly} w-10 h-10`} alt="Butterfly 7"/>
        <img src="/f7.png" className={`${styles.butterfly9} ${styles.butterfly} w-10 h-10`} alt="Butterfly 7"/>
        <img src="/f8.png" className={`${styles.butterfly10} ${styles.butterfly} w-10 h-10`} alt="Butterfly 7"/>

        <NavbarType />
        <TodoForm todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />

        <div className="flex flex-col items-center w-full max-w-md px-4">
          {todos.map((todo, index) => (
            <TodoItem todo={todo} index={index} key={index} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
