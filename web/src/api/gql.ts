import { gql } from "@apollo/client";

export const GET_SERVER_MESSAGE = gql`
  query {
    servers {
      id
      createdAt
      messageName
      messageParameters
    }
  }
`;

export const GET_CLIENT_MESSAGE = gql`
  query {
    clients {
      id
      createdAt
      messageName
      messageParameters
    }
  }
`;

export const GET_CLIENT_STATUS = gql`
  query {
    clientStatus {
      id
      status
      value
    }
  }
`;
