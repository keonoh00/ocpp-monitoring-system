import { useEffect, useState } from "react";

const MESSAGES_CLIENT_1 = [
  {
    message: "Message 1 from client 1",
    modalContent: {
      title: "Message 1 - Client 1",
      details: "This is a message from client 1",
    },
  },
];

const MESSAGES_CLIENT_2 = [
  {
    message: "Message 1 from client 2",
    modalContent: {
      title: "Message 1 - Client 2",
      details: "This is a message from client 2",
    },
  },
];

const MESSAGES_CLIENT_3 = [
  {
    message: "Message 1 from client 3",
    modalContent: {
      title: "Message 1 - Client 3",
      details: "This is a message from client 3",
    },
  },
];

const MESSAGES_CLIENT_4 = [
  {
    message: "Message 1 from client 4",
    modalContent: {
      title: "Message 1 - Client 4",
      details: "This is a message from client 4",
    },
  },
];

const MESSAGES_CLIENT_7 = [
  {
    message: "Message 1 from client 7",
    modalContent: {
      title: "Message 1 - Client 7",
      details: "This is a message from client 7",
    },
  },
];

const CLIENT_1 = {
  id: 1,
  name: "Client 1",
  messages: MESSAGES_CLIENT_1,
};

const CLIENT_2 = {
  id: 2,
  name: "Client 2",
  messages: MESSAGES_CLIENT_2,
};

const CLIENT_3 = {
  id: 3,
  name: "Client 3",
  messages: MESSAGES_CLIENT_3,
};

const CLIENT_4 = {
  id: 4,
  name: "Client 4",
  messages: MESSAGES_CLIENT_4,
};

const CLIENT_5 = {
  id: 5,
  name: "Client 5",
  messages: [],
};

const CLIENT_6 = {
  id: 6,
  name: "Client 6",
  messages: [],
};

const CLIENT_7 = {
  id: 7,
  name: "Client 7",
  messages: MESSAGES_CLIENT_7,
};

const CLIENT_8 = {
  id: 8,
  name: "Client 8",
  messages: [],
};

const CLIENTS = [
  CLIENT_1,
  CLIENT_2,
  CLIENT_3,
  CLIENT_4,
  CLIENT_5,
  CLIENT_6,
  CLIENT_7,
  CLIENT_8,
];

export interface IMessage {
  message: string;
  modalContent: {
    title: string;
    details: string;
  };
  createdAt?: Date;
}

export interface Client {
  id: number;
  name: string;
  messages: IMessage[];
}

const useClients = () => {
  const [clients, setClients] = useState<Client[]>(CLIENTS);

  useEffect(() => {
    // Add a message to random clients
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * clients.length);
      const randomClient = clients[randomIdx];

      const newMessage = {
        message: `Message ${randomClient.messages.length + 1} from client ${
          randomClient.id
        }`,
        modalContent: {
          title: `Message ${randomClient.messages.length + 1} - Client ${
            randomClient.id
          }`,
          details: `This is a message from client ${randomClient.id}`,
        },
        createdAt: new Date(),
      };

      setClients((prevClients) => {
        const newClients = [...prevClients];
        newClients[randomIdx].messages.push(newMessage);
        return newClients;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data: clients };
};

export default useClients;
