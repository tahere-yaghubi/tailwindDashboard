import React from 'react'

function Banner({children}) {
  return (
    <div className='md:w-auto sm:w-full h-36 borderh-36  bg m-2 text-center flex justify-center items-center rounded-lg shadow-lg bg-white '>{children}</div>
  )
}

export default Banner