import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENT_MESSAGE } from "../api/gql";
import { POLL_INTERVAL } from "../constants/query";
import { parseClientMessage } from "../utils/query";

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
  const { loading, data } = useQuery<IGQLClient>(GET_CLIENT_MESSAGE, {
    pollInterval: POLL_INTERVAL,
  });

  useEffect(() => {
    if (data) {
      const messages = data.clients.map((message) => {
        const parsed = parseClientMessage(message);
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

      const client = {
        id: 1,
        name: "Client",
        messages: messages,
      };

      setClients([client]);
    }
  }, [data]);

  return { data: clients, isLoading: loading };
};

export default useServer;
