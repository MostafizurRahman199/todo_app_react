import React from 'react'

export default function Footer({completedTodos}) {
  return (
    <div className='fixed bottom-0 w-full flex flex-col items-center justify-center  bg-gray-100 '>
          <div className={` border-b-2 border-pink-700 focus:ring-2  p-2 text-2xl font-thin  border-outline-none text-pink-700 px-1 py-1`}>
            <h1>Completed : {completedTodos}</h1>
        </div>
      <p className='text-xl font-thin hover-footer relative'>
      © 2024 Mukti's Jamai
        <img src='/pngegg.png' alt='Heart Icon' className='inline-block w-8 h-8 ml-1 mb-1 footer-img transition-transform duration-500'/>
        
      </p>
    </div>
  )
}
