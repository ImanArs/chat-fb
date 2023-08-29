import React, { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { room } = props;

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const q = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("new Message");
      let messagesArr = [];
      snapshot.forEach((doc) => {
        console.log(doc);
        messagesArr.push({ ...doc.data(), id: doc.id });
        console.log(messagesArr);
      });
      setMessages(messagesArr);
    });

    return () => unsubscribe();
  }, [room]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  }

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <span>{message.user}: {message.text} </span>
          </div>
        ))}
      </div>
      <div>
        <h1>Welcome to {room}!!!</h1>
      </div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name=""
          id=""
          className='border border-[#fb88] my-0 mx-auto'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type='submit'>send message</button>
      </form>
    </div>
  );
}

export default Chat;
