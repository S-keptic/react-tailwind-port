import React from 'react'
import  { useState, useEffect } from 'react';

export const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  return (
   <>
   <nav className='bg-black flex justify-between border-b-2 border-white text-white  fixed w-full top-0 scroll-m-0 '>
   <div className='ml-4 py-4 font-mono text-xl'>{currentTime.toLocaleTimeString()} (UTC+5:30)</div>
    <ul className='flex space-x-6 mx-4 px-4 py-4  font-mono text-xl'>
        <li className='cursor-pointer hover:text-purple-300'>Home</li>
        <li className='cursor-pointer hover:text-purple-300'>Github</li>
        <li className='cursor-pointer hover:text-purple-300'>About</li>
    </ul>
   
   </nav>
  
   </>
  )
}
