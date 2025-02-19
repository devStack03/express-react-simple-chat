export interface Message {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

export interface ChatStore {
  username: string | null;
  currentRoom: string | null;
  messages: Message[];
  rooms: string[];
  onlineUsers: string[];
  setUsername: (username: string) => void;
  setCurrentRoom: (room: string) => void;
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  setRooms: (rooms: string[]) => void;
  setOnlineUsers: (users: string[]) => void;
}