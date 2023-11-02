import React, { FC, useState } from "react";
import {
  Modal,
  Button,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Spacer,
} from "@chakra-ui/react";
import { IMessage } from "../../hooks/useClients";

export interface MessageProps extends IMessage {}

const Message: FC<MessageProps> = ({ message, modalContent, createdAt }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);

  return (
    <Button
      onClick={handleOpen}
      fontSize={"0.5em"}
      width={"100%"}
      justifyContent={"flex-start"}
      borderRadius={0}
      height={"auto"}
      padding={1}
      margin={0}
    >
      {message ? message : "No Message"}
      <Spacer />
      {createdAt?.toLocaleTimeString() || "No Date"}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalContent && modalContent.title
              ? modalContent.title
              : "No Title"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text id="modal-modal-description" sx={{ mt: 2 }}>
              {modalContent && modalContent.details
                ? Object.entries(modalContent.details).map(
                    ([key, value], idx) => (
                      <Text key={idx}>
                        {key}: {value}
                      </Text>
                    )
                  )
                : "No Details"}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Button>
  );
};
export default Message;
