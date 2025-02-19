import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// In-memory storage for rooms and messages
const rooms = new Map();
const users = new Map();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('login', (username) => {
    users.set(socket.id, username);
    io.emit('roomList', Array.from(rooms.keys()));
    io.emit('users', Array.from(users.values()));
  });

  socket.on('createRoom', (roomName) => {
    if (!rooms.has(roomName)) {
      rooms.set(roomName, []);
      io.emit('roomList', Array.from(rooms.keys()));
    }
  });

  socket.on('joinRoom', (roomName) => {
    socket.join(roomName);
    socket.emit('messages', rooms.get(roomName) || []);
    io.to(roomName).emit('userJoined', users.get(socket.id));
  });

  socket.on('message', ({ room, message }) => {
    const messageObj = {
      id: Date.now(),
      user: users.get(socket.id),
      text: message,
      timestamp: new Date().toISOString()
    };
    
    if (rooms.has(room)) {
      rooms.get(room).push(messageObj);
      io.to(room).emit('message', messageObj);
    }
  });

  socket.on('disconnect', () => {
    const username = users.get(socket.id);
    users.delete(socket.id);
    io.emit('users', Array.from(users.values()));
    io.emit('userLeft', username);
  });
});

const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});