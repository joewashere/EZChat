import { useState } from 'react'
import { io } from "socket.io-client";
import './App.css'
import MainChat from './components/mainchat/MainChat'
import Modal from './components/modal/Modal'
import RoomList from './components/roomlist/RoomList'
import UserList from './components/userlist/UserList'

const socket = io("ws://localhost:3000/");

function App() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);

  socket.on('user update', function(userUpdate){
    setUsers(userUpdate);
  });

  socket.on('room list', function(roomList){
    setRooms(roomList);
  });

  return (
    <div className="App bg-midnight text-paragraph">
      <div className="flex flex-row justify-between">
        <RoomList rooms={rooms} />
        <MainChat username={username} socket={socket}/>
        <UserList users={users}/>
      </div>
      <Modal show={username == ''} user={username} setUsername={setUsername} socket={socket}/>
    </div>
  )
}

export default App
