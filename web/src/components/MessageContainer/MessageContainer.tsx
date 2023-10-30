import React, { FC, useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

export interface MessageContainerProps {
  message?: string;
  buttonStyle?: React.CSSProperties;
  modalStyle?: React.CSSProperties;
  modalContent?: {
    title?: string;
    details?: string;
  };
}

const MessageContainer: FC<MessageContainerProps> = ({
  message,
  buttonStyle,
  modalStyle,
  modalContent,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button
        style={{
          fontSize: "0.5em",
          width: "100%",
          justifyContent: "flex-start",
          paddingTop: 0,
          paddingBottom: 0,
          textAlign: "left",
          ...buttonStyle,
        }}
        onClick={handleOpen}
      >
        {message || "No Message"}
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
            ...modalStyle,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalContent?.title || "No Title"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalContent?.details ||
              "asdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowieasdfasdf afsdasdfa asdfasdfasdfasdfa  iajfwo;eijfaow;ef a;fjwa;oif ja;ofj a;woeifjaowiejfawoifjaowie"}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default MessageContainer;
