const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors);
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const port = process.env.NODE_ENV === 'development' ? '5173' : '8080';

console.log(port, process.env.NODE_ENV);

const io = new Server(server, {
  cors: {
    origin: `http://127.0.0.1:${port}`
  }
});

app.get('/', (req, res) => {
  res.send('OK');
});

let users = [];
let rooms = ['main'];

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('room list', rooms);
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', `${msg[1]}: ${msg[0]}`);
  });

  socket.on('new user', (user) => {
    users.push({id: socket.id, name: user});
    io.emit('user update', users);
  });

  socket.on('disconnect', () => {
    users = users.filter(function(obj){
      return obj.id !== socket.id;
    });
    io.emit('user update', users);
    console.log(socket.id);
  });
});




server.listen(3000, () => {
  console.log('listening on *:3000');
});