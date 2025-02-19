import { useEffect } from "react";
import { socket } from "./socket";
import { useChatStore } from "./store";
import { Message } from "./types";
import RoomList from "./components/room-list";
import UserList from "./components/user-list";
import Chat from "./components/chat";
import Login from "./components/login";

function App() {
  const {
    username,
    currentRoom,
    messages,
    rooms,
    onlineUsers,
    setUsername,
    setCurrentRoom,
    setMessages,
    addMessage,
    setRooms,
    setOnlineUsers,
  } = useChatStore();

  useEffect(() => {
    socket.on("message", (message: Message) => {
      addMessage(message);
    });

    socket.on("messages", (messages: Message[]) => {
      setMessages(messages);
    });

    socket.on("roomList", (rooms: string[]) => {
      setRooms(rooms);
    });

    socket.on("users", (users: string[]) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("message");
      socket.off("messages");
      socket.off("roomList");
      socket.off("users");
    };
  }, []);

  const handleLogin = (username: string) => {
    if (username.trim()) {
      setUsername(username);
      socket.emit("login", username);
    }
  };

  const handleCreateRoom = (newRoom: string) => {
    if (newRoom.trim()) {
      socket.emit("createRoom", newRoom);
    }
  };

  const handleJoinRoom = (room: string) => {
    socket.emit("joinRoom", room);
    setCurrentRoom(room);
  };

  const handleSendMessage = (newMessage: string) => {
    if (newMessage.trim() && currentRoom) {
      socket.emit("message", { room: currentRoom, message: newMessage });
    }
  };

  if (!username) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-5 gap-4 h-[calc(100vh-2rem)]">
        <div className="col-span-2 bg-white rounded-lg shadow-md p-4 space-y-4">
          <RoomList
            rooms={rooms}
            currentRoom={currentRoom}
            onJoinRoom={handleJoinRoom}
            onCreateRoom={handleCreateRoom}
          />
          <UserList onlineUsers={onlineUsers} />
        </div>

        <div className="col-span-3 bg-white rounded-lg shadow-md p-4 flex flex-col">
          {currentRoom ? (
            <Chat
              currentRoom={currentRoom}
              messages={messages}
              onSendMessage={handleSendMessage}
              username={username}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a room to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
