import { create } from "zustand";
import { ChatStore } from "./types";

export const useChatStore = create<ChatStore>((set) => ({
  username: null,
  currentRoom: null,
  messages: [],
  rooms: [],
  onlineUsers: [],
  setUsername: (username) => set({ username }),
  setCurrentRoom: (room) => set({ currentRoom: room }),
  setMessages: (messages) => set({ messages }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setRooms: (rooms) => set({ rooms }),
  setOnlineUsers: (users) => set({ onlineUsers: users }),
}));
