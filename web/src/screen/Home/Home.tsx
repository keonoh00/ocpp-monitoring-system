import { RowContainer, Title } from "./styled";
import React, { useEffect } from "react";
import StatusContainer from "../../components/StatusContainer/StatusContainer";
import MessagesContainer from "../../components/MessagesContainer/MessagesContainer";
import { Box } from "@chakra-ui/react";
import useClients, { Client } from "../../hooks/useClients";

const Home = () => {
  const [selectedClient, setSelectedClient] = React.useState<Client | null>(
    null
  );
  const { data: clients } = useClients();

  useEffect(() => {
    if (clients?.length) {
      handleClientChange(clients[0]);
    }
  }, [clients]);

  const handleClientChange = (client: Client) => {
    setSelectedClient(client);
  };

  return (
    <Box paddingInline={2} justifyItems={"center"}>
      <Title>OCPP-Web</Title>
      <RowContainer>
        {selectedClient ? (
          <MessagesContainer
            title={`Client: ${selectedClient.id}`}
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
      </RowContainer>
      <StatusContainer />
    </Box>
  );
};

export default Home;
