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
