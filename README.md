# Simple Real-Time Chat Application

A modern real-time chat application built with React, TypeScript, Socket.IO, and Express. The application supports multiple chat rooms, real-time messaging, and basic user authentication.

[![Chat Application Screenshot]](https://drive.google.com/file/d/1eX_dcPdgHytaA_DlXw70JfVtVQ95AWuW/view?usp=sharing)

## Features

- 🚀 Real-time messaging using Socket.IO
- 👥 Multiple chat rooms support
- 🔒 Basic username authentication
- 👀 Online users tracking
- 🏗️ Dynamic room creation
- ⚡ Message history (in-memory)
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design

## Tech Stack

- **Frontend:**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Socket.IO Client
  - Zustand (State Management)
  - Lucide React (Icons)

- **Backend:**
  - Node.js
  - Express
  - Socket.IO
  - In-memory data storage

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/react-express-chat-app.git
   cd react-express-chat-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
1. Start the backend server:
   ```bash
   npm run server
   ```
1. Start the frontend development server:
   ```bash
   npm run dev
   ```
1. Open [http://localhost:5173](http://localhost:5173) in your browser

## Architecture Decisions

### Frontend Architecture

1. **State Management**
   - Zustand for global state management
   - Lightweight and simple compared to Redux
   - Perfect for managing chat state and user information

2. **Component Structure**
   - Break into smaller components for better maintainability
   - Separation of concerns between socket, store, and types

3. **Real-time Communication**
   - Socket.IO client for real-time updates
   - Event-based communication for messages and user status
   - Singleton socket instance for consistent connection

### Backend Architecture

1. **Server Setup**
   - Express for HTTP server
   - Socket.IO for WebSocket communication
   - In-memory storage for simplicity

2. **Data Storage**
   - Map data structure for rooms and users
   - Efficient lookup and updates
   - Memory-based for quick prototyping

3. **Event Handling**
   - Clear separation of socket events
   - Room management
   - User tracking

## Code Structure

```
├── server/
│   └── index.js           # Express + Socket.IO server
├── src/
│   ├── components/       # React components
│   │   ├── chat.tsx      # Chat component
│   │   ├── login.tsx     # Login component
│   │   ├── room-list.tsx # Room list component
│   │   └── user-list.tsx # User list component
│   ├── App.tsx           # Main application component
│   ├── socket.ts         # Socket.IO client setup
│   ├── store.ts          # Zustand store
│   └── types.ts          # TypeScript interfaces
```
## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.