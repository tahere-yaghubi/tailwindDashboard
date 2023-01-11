import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Message from '../../elements/Message'

function MainMessages() {
  const [messages,setMessages] = useState([])

  useEffect(()=>{
    GetMessagesFunc()
  },[])
  const GetMessagesFunc = () =>{
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res =>{
      setMessages(res.data)
    }).catch(err => console.log(err))
  }
  return (
    <div className='w-full'> 
    {
      messages.map((el)=>(
       
        <Message name={el.name} email={el.email} body={el.body} key={el.id}/>
      ))
    }
     </div>
  )
}

export default MainMessages