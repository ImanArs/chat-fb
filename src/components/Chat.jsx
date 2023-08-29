import React, { useState } from 'react'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../firebase-config'

const Chat = (props) => {
  const [ messages, setMessages ] = useState([])
  const [ newMessage, setNewMessage ] = useState("")
  const { room } = props;

  console.log(auth);

  const messagesRef = collection(db, "messages");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      // user: auth.currentUser.displayName,
      room,
    })
    setNewMessage("")
  }

  return (
    <div>
      <div>
        <h1>Welcome to {room}!!!</h1>
      </div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="" id="" className='border border-[#fb88] my-0 mx-auto' value={newMessage} onChange={e => setNewMessage(e.target.value)} />
        <button type='submit'>send message</button>
      </form>
    </div>
  )
}

export default Chat