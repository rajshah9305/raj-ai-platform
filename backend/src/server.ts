import app from './app';
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Event Listener for Task Updates
  socket.on('task:update', (data) => {
    console.log('Task Update Event:', data);
    io.emit('task:updated', data); // Broadcast to all clients
  });

  // Event Listener for Notifications
  socket.on('notification', (data) => {
    console.log('Notification Event:', data);
    io.emit('notification', data); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});