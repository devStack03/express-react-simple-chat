import React, { useState } from "react";
import { Message } from "../types";
import { Send } from "lucide-react";

interface ChatProps {
  currentRoom: string | null;
  messages: Message[];
  onSendMessage: (message: string) => void;
  username: string;
}

const Chat: React.FC<ChatProps> = ({
  currentRoom,
  messages,
  onSendMessage,
  username,
}) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="flex-1 overflow-y-auto space-y-4 mb-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        {currentRoom}
      </h2>
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${
              message.user === username ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[70%] group ${
                message.user === username ? "items-end" : "items-start"
              }`}
            >
              <div className="font-medium text-sm mb-1 px-2">
                {message.user === username ? "You" : message.user}
              </div>
              <div
                className={`relative p-4 rounded-2xl shadow-sm ${
                  message.user === username
                    ? "bg-blue-500 text-white rounded-tr-none"
                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                }`}
              >
                <div className="text-base leading-relaxed break-words">
                  {message.text}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    message.user === username
                      ? "text-blue-100"
                      : "text-gray-500"
                  }`}
                >
                  {new Date(message.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSendMessage}
        className="flex gap-2 p-2 bg-gray-50 rounded-lg"
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default Chat;
