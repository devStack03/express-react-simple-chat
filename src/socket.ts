import { io } from "socket.io-client";

export const socket = io("http://localhost:3000");

export const initializeSocket = () => {
  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });
};
