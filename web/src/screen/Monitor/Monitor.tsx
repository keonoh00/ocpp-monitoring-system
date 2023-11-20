import React, { useEffect } from "react";
import StatusContainer from "../../components/StatusContainer/StatusContainer";
import MessagesContainer from "../../components/MessagesContainer/MessagesContainer";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, DownloadIcon } from "@chakra-ui/icons";
import useClients, { IClient } from "../../hooks/useClients";
import useServer from "../../hooks/useServer";

const Monitor = () => {
  const [selectedClient, setSelectedClient] = React.useState<IClient | null>(
    null
  );
  const { data: clients, isLoading: isLoadingClient } = useClients();
  const { data: server } = useServer();

  const handleClientChange = (client: IClient) => {
    setSelectedClient(client);
  };

  useEffect(() => {
    if (clients) {
      if (clients.length === 0) {
        setSelectedClient(null);
      } else if (clients.length === 1) {
        setSelectedClient(clients[0]);
      } else {
        const idx = clients.findIndex(
          (client) => client.id === selectedClient?.id
        );
        if (idx === -1) {
          setSelectedClient(clients[0]);
        }
      }
    } else {
      setSelectedClient(null);
    }
  }, [clients, selectedClient]);

  const onPressDownloadLog = () => {
    const element = document.createElement("a");
    let logs;
    logs = server?.messages || [];
    if (selectedClient) {
      logs.push(...selectedClient?.messages);
    }

    // Sort by date
    logs.sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return a.createdAt.getTime() - b.createdAt.getTime();
      } else {
        return 0;
      }
    });

    // Convert to string with line breaks
    logs = logs
      .map((log) => {
        const isClient = selectedClient?.messages.includes(log);

        return `${log.createdAt?.toLocaleString()} - ${
          isClient ? "incoming_message" : "outgoing_message"
        } - ${log.message} - ${JSON.stringify(log.modalContent.details)}`;
      })
      .join("\n");

    const file = new Blob([logs], { type: "text/plain" });

    element.href = URL.createObjectURL(file);
    element.download = `logs_${new Date().toISOString()}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Flex
      direction={"column"}
      paddingInline={2}
      justifyItems={"center"}
      paddingBlock={5}
    >
      <Flex
        justifyContent={"center"}
        direction={"row"}
        marginBottom={4}
        paddingInline={4}
      >
        <Box boxSize={5} marginRight={"auto"} />
        <Heading
          color={"linkedin.600"}
          fontSize={"3xl"}
          textAlign={"center"}
          alignSelf={"center"}
        >
          OCPP Monitoring System
        </Heading>
        <DownloadIcon
          boxSize={5}
          alignSelf={"center"}
          justifyContent={"flex-end"}
          justifySelf={"flex-end"}
          marginLeft={"auto"}
          onClick={onPressDownloadLog}
        />
      </Flex>

      <Flex marginBottom={5}>
        {!isLoadingClient ? (
          selectedClient ? (
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
            <MessagesContainer title="No Clients Connected" />
          )
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

        <MessagesContainer title="Server" messages={server?.messages} />
      </Flex>
      <StatusContainer />
    </Flex>
  );
};

export default Monitor;
