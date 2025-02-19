import React, { useState } from "react";
import { Plus, MessageSquare } from "lucide-react";

interface RoomListProps {
  rooms: string[];
  currentRoom: string | null;
  onJoinRoom: (room: string) => void;
  onCreateRoom: (room: string) => void;
}

const RoomList: React.FC<RoomListProps> = ({
  rooms,
  currentRoom,
  onJoinRoom,
  onCreateRoom,
}) => {
  const [newRoom, setNewRoom] = useState("");

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateRoom(newRoom);
    setNewRoom("");
  };

  const handleJoinRoom = (room: string) => {
    onJoinRoom(room);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        Chat Rooms
      </h2>
      <form onSubmit={handleCreateRoom} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
          placeholder="New room name"
          className="flex-1 p-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        >
          <Plus className="w-5 h-5" />
        </button>
      </form>
      <div className="space-y-2">
        {rooms.map((room) => (
          <button
            key={room}
            onClick={() => handleJoinRoom(room)}
            className={`w-full p-2 text-left rounded-md ${
              currentRoom === room
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            #{room}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
