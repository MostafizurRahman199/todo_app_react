import React from 'react'

export default function Footer() {
  return (
    <div className='w-full flex flex-col items-center justify-center '>
      <p className='text-xl font-thin hover-footer relative'>
      © 2024 Mukti's Jamai
        <img src='/pngegg.png' alt='Heart Icon' className='inline-block w-8 h-8 ml-1 mb-1 footer-img transition-transform duration-500'/>
        
      </p>
    </div>
  )
}
