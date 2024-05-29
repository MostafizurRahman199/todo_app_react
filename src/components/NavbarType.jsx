import React from "react";

export default function NavbarType() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl font-bold mb-4 text-pink-700 relative hover-target">
        <img
          src="/heart-49-512 - Copy.png"
          alt="Heart Icon"
          className="inline-block w-6 h-6 mr-2 absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover-img"
        />
        <img
          src="/heart-67-512 - Copy.png"
          alt="Heart Icon"
          className="inline-block w-6 h-6 mr-2 main-img"
        />
        Mukti's Todo List
        <img
          src="/heart-67-512.png"
          alt="Heart Icon"
          className="inline-block w-6 h-6 ml-2 main-img"
        />
        <img
          src="/heart-49-512.png"
          alt="Heart Icon"
          className="inline-block w-6 h-6 ml-2 absolute top-0 right-0 opacity-0 transition-opacity duration-300 hover-img"
        />
      </p>
    </div>
  );
}
