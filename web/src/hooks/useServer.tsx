import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { IMessage } from "./useClients";
import { GET_SERVER_MESSAGE } from "../api/gql";

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

export interface IGQLServerMessage {
  id: number;
  createdAt: string;
  messageName: string;
  messageParameters: string;
}
export interface IGQLServer {
  servers: IGQLServerMessage[];
}

const useServer = () => {
  const [server, setServer] = useState<IServer>(SERVER);
  const { data } = useQuery<IGQLServer>(GET_SERVER_MESSAGE, {
    pollInterval: 100,
  });

  useEffect(() => {
    if (data) {
      const messages = data.servers.map((message) => {
        const base = {
          message: message.messageName,
          modalContent: {
            title: message.messageName,
            details: "",
          },
          createdAt: new Date(Number(message.createdAt)),
        };
        try {
          base.modalContent.details = JSON.parse(message.messageParameters);
        } catch (e) {
          return base;
        }
        return {
          message: message.messageName,
          modalContent: {
            title: message.messageName,
            details: JSON.parse(message.messageParameters),
          },
          createdAt: new Date(Number(message.createdAt)),
        };
      });

      const server = {
        id: 1,
        name: "Server",
        messages: messages,
        status: "Online",
        statusDetails: "Waiting for client",
      };

      setServer(server);
    }
  }, [data]);

  return { data: server };
};

export default useServer;
