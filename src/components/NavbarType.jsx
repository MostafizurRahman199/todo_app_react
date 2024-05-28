import React from 'react';

export default function NavbarType() {
  return (
    <div className='flex flex-col items-center justify-center '>
      <p className='text-2xl font-mono mb-4 '>
        Mukti's Todo List
        <img src='/heart-67-512.png' alt='Heart Icon' className='inline-block w-6 h-6 ml-2'/>
      </p>
    </div>
  );
}
