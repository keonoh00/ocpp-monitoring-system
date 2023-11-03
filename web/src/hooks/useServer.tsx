import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { IMessage } from "./useClients";
import { GET_SERVER_MESSAGE } from "../api/gql";
import { POLL_INTERVAL } from "../constants/query";
import { parseServerMessage } from "../utils/query";

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
    pollInterval: POLL_INTERVAL,
  });

  useEffect(() => {
    if (data) {
      const messages = data.servers.map((message) => {
        const parsed = parseServerMessage(message);
        let details;
        try {
          details = JSON.parse(parsed.messageParameters);
        } catch (e) {
          details = parsed.messageParameters;
        }
        return {
          message: parsed.messageName,
          modalContent: {
            title: parsed.messageName,
            details,
          },
          createdAt: new Date(Number(parsed.createdAt)),
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
