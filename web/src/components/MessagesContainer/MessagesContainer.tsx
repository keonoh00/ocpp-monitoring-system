import React, { FC } from "react";
import AutoScrollContainer from "../AutoScrollContainer/AutoScrollContainer";
import Message from "../Message/Message";
import { Box, Heading } from "@chakra-ui/react";
import { IMessage } from "../../hooks/useClients";

interface MessagesContainerProps {
  title: string;
  titleLeftEnhancer?: React.ReactNode;
  titleRightEnhancer?: React.ReactNode;
  messages?: IMessage[];
}

const MessagesContainer: FC<MessagesContainerProps> = ({
  title,
  titleLeftEnhancer,
  titleRightEnhancer,
  messages,
}) => {
  return (
    <Box
      border={1}
      borderColor={"lightGrey"}
      flex={1}
      borderRadius={3}
      padding={1}
    >
      <Box flexDirection={"row"} justifyContent={"center"}>
        <Box>{titleLeftEnhancer ? titleLeftEnhancer : null}</Box>
        <Heading size={"sm"}>{title}</Heading>
        <Box>{titleRightEnhancer ? titleRightEnhancer : null}</Box>
      </Box>

      <AutoScrollContainer height={230}>
        {messages && messages?.length > 0
          ? messages.map((message, idx) => (
              <Message
                key={idx}
                message={message.message}
                modalContent={message.modalContent}
              />
            ))
          : null}
      </AutoScrollContainer>
    </Box>
  );
};

export default MessagesContainer;
