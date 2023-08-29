import React, { useRef, useState } from 'react'
import Auth from './components/Auth'

import Cookies from 'universal-cookie'
import Chat from './components/Chat';

let cookies = new Cookies();

const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [ room, setRoom ] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div className=''>
        <Auth setIsAuth={setIsAuth} />
      </div>
    )
  }
  return (
    <div>
      {
        room ?
        <Chat room={room} />
        :
        <div>
          <p>Enter room name</p>
          <input type="text" ref={roomInputRef} />
          <button className='bg-[#0007]' onClick={() => setRoom(roomInputRef.current.value)}>enter chat</button>
        </div>
      }
    </div>
  )
}

export default App