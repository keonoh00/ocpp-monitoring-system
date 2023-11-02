import React, { FC } from "react";
import AutoScrollContainer from "../AutoScrollContainer/AutoScrollContainer";
import Message from "../Message/Message";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
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
      borderWidth="1px"
      borderRadius="lg"
      flex={1}
      margin={1}
      padding={2}
      borderColor={"gray.400"}
    >
      <Flex
        direction={"row"}
        alignItems={"center"}
        padding={1}
        marginBottom={2}
      >
        {titleLeftEnhancer ? titleLeftEnhancer : null}
        <Spacer />
        <Heading textAlign={"center"} size={"sm"}>
          {title}
        </Heading>
        <Spacer />
        {titleRightEnhancer ? titleRightEnhancer : null}
      </Flex>

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
