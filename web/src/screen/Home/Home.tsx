import React, { useEffect } from "react";
import StatusContainer from "../../components/StatusContainer/StatusContainer";
import MessagesContainer from "../../components/MessagesContainer/MessagesContainer";
import { Flex, Heading } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

import useClients, { Client } from "../../hooks/useClients";

const Home = () => {
  const [selectedClient, setSelectedClient] = React.useState<Client | null>(
    null
  );
  const { data: clients } = useClients();

  useEffect(() => {
    if (clients?.length && !selectedClient) {
      handleClientChange(clients[0]);
    }
  }, [clients, selectedClient]);

  const handleClientChange = (client: Client) => {
    setSelectedClient(client);
  };

  return (
    <Flex
      direction={"column"}
      paddingInline={2}
      justifyItems={"center"}
      paddingBlock={5}
    >
      <Heading
        color={"red.400"}
        fontSize={"3xl"}
        textAlign={"center"}
        marginBottom={5}
      >
        OCPP Monitoring System
      </Heading>

      <Flex marginBottom={5}>
        {selectedClient ? (
          <MessagesContainer
            titleLeftEnhancer={
              <ArrowLeftIcon
                boxSize={3}
                onClick={() => {
                  const idx = clients.findIndex(
                    (client) => client.id === selectedClient.id
                  );
                  if (idx > 0) {
                    handleClientChange(clients[idx - 1]);
                  }
                }}
              />
            }
            title={`Client: ${selectedClient.id}`}
            titleRightEnhancer={
              <ArrowRightIcon
                boxSize={3}
                onClick={() => {
                  const idx = clients.findIndex(
                    (client) => client.id === selectedClient.id
                  );
                  if (idx < clients.length - 1) {
                    handleClientChange(clients[idx + 1]);
                  }
                }}
              />
            }
            messages={selectedClient.messages}
          />
        ) : (
          <MessagesContainer
            title="Loading..."
            messages={[
              {
                message: "Loading...",
                modalContent: {
                  title: "Loading...",
                  details: "Loading...",
                },
              },
            ]}
          />
        )}

        <MessagesContainer
          title="Server"
          messages={[
            {
              message: "Loading...",
              modalContent: {
                title: "Loading...",
                details: "Loading...",
              },
            },
          ]}
        />
      </Flex>
      <StatusContainer />
    </Flex>
  );
};

export default Home;
