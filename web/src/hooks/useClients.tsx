import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENT_MESSAGE } from "../api/gql";

export interface IMessage {
  message: string;
  modalContent: {
    title: string;
    details: string;
  };
  createdAt?: Date;
}

export interface IClient {
  id: number;
  name: string;
  messages: IMessage[];
  status: string;
  statusDetails?: string;
}

export interface IGQLClientMessage {
  id: number;
  createdAt: string;
  messageName: string;
  messageParameters: string;
}
export interface IGQLClient {
  clients: IGQLClientMessage[];
}

const useServer = () => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
  const { loading, data } = useQuery<IGQLClient>(GET_CLIENT_MESSAGE, {
    pollInterval: 100,
  });

  useEffect(() => {
    if (!isFirstLoading) return;

    if (!loading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading, loading]);

  useEffect(() => {
    if (data) {
      const messages = data.clients.map((message) => {
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

      const client = {
        id: 1,
        name: "Client",
        messages: messages,
        status: "Online",
        statusDetails: "Waiting for server",
      };

      setClients([client]);
    }
  }, [data]);

  return { data: clients, isFirstLoading };
};

export default useServer;
