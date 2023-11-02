import { useEffect, useState } from "react";
import { IMessage } from "./useClients";

const SERVER = {
  id: 1,
  name: "Server",
  messages: [],
  status: "Online",
  statusDetails: "Waiting for client",
};

export interface IServer {
  id: number;
  name: string;
  messages: IMessage[];
  status: string;
  statusDetails?: string;
}

const useServer = () => {
  const [server, setServer] = useState<IServer>(SERVER);

  useEffect(() => {
    // Randomly generate a new status for the server
    const status = Math.random() < 0.5 ? "Online" : "Offline";
    const statusDetails =
      status === "Online" ? "Waiting for client" : "No Client Connected";
    setServer((prev) => ({ ...prev, status, statusDetails }));
  }, []);

  useEffect(() => {
    // Randomly generate a new message for the server
    const interval = setInterval(() => {
      const addMessage = Math.random() < 0.5 ? true : false;
      if (!addMessage) return;

      const modalContent = {
        title: "Server",
        details: "This is a message from the server",
      };
      setServer((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            message: `This is a ${
              prev.messages.length + 1
            } message from the server`,
            modalContent,
            createdAt: new Date(),
          },
        ],
      }));

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return { data: server };
};

export default useServer;
