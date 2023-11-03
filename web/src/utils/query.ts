import { IGQLClientMessage } from "../hooks/useClients";
import { IGQLServerMessage } from "../hooks/useServer";

export const parseClientMessage = (message: IGQLClientMessage) => {
  const { id, messageName, messageParameters, createdAt } = message;
  let parsedMessageParameters;
  try {
    parsedMessageParameters = JSON.parse(messageParameters);
  } catch (error) {
    parsedMessageParameters = { data: messageParameters };
  }
  if (typeof parsedMessageParameters !== "object") {
    parsedMessageParameters = { data: messageParameters };
  }
  return {
    id,
    messageName,
    messageParameters: parsedMessageParameters,
    createdAt,
  };
};

export const parseServerMessage = (message: IGQLServerMessage) => {
  const { id, messageName, messageParameters, createdAt } = message;
  let parsedMessageParameters;
  try {
    parsedMessageParameters = JSON.parse(messageParameters);
  } catch (error) {
    console.log(error);
  }
  if (typeof parsedMessageParameters !== "object") {
    parsedMessageParameters = { data: messageParameters };
  }
  return {
    id,
    messageName,
    messageParameters: parsedMessageParameters,
    createdAt,
  };
};
