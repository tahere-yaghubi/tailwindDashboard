import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Messages() {
const [users,setUsers] = useState([])


useEffect(()=>{

  getUser()
},[])
  function getUser(){
    axios.get('https://randomuser.me/api/?results=5000').then(res => {
    // console.log(res.data,"res")
  })
  }
  return (
    <div className='md:w-1/2 sm:w-full h-36 borderh-36  m-2 text-center flex justify-center items-center rounded-lg shadow-lg bg-white '>hello</div>
    )
}

export default Messages