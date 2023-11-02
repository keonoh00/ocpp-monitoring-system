import React, { FC, useState } from "react";
import { Modal, Button, Box, Text } from "@chakra-ui/react";
import { IMessage } from "../../hooks/useClients";

export interface MessageProps extends IMessage {}

const Message: FC<MessageProps> = ({ message, modalContent }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Button
      onClick={handleOpen}
      style={{
        fontSize: "0.5em",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 0,
        paddingBottom: 0,
        textAlign: "left",
        backgroundColor: "lightgray",
        borderRadius: 0,
      }}
    >
      {message ? message : "No Message"}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "1em",
            padding: "1em",
            minWidth: "50%",
            maxWidth: "80%",
            minHeight: "50%",
            maxHeight: "80%",
            overflow: "auto",
          }}
        >
          <Text id="modal-modal-title" variant="h6">
            {modalContent && modalContent.title
              ? modalContent.title
              : "No Title"}
          </Text>
          <Text id="modal-modal-description" sx={{ mt: 2 }}>
            {modalContent && modalContent.details
              ? modalContent.details
              : "No Details"}
          </Text>
        </Box>
      </Modal>
    </Button>
  );
};
export default Message;
