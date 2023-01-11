import React from 'react'

function Message({name,email,body }) {
 
  return (
    <div className='w-full h-[10rem] shadow-md flex items-center justify-around'>
        <div className='w-10 h-10 overflow-hidden rounded-full'><img src="https://via.placeholder.com/150" alt="" className=''/></div>
        <div className='flex flex-col justify-center'>
        <span>{name}</span>
       
        <p>{body}</p>
        </div>
    </div>
  )
}

export default Message