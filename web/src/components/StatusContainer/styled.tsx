import styled from "styled-components";

export const BorderContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  overflow: auto;
  height: 200px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StatusTitle = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8em;
  text-align: center;
  color: black;
  width: 100px;
`;

export const StatusText = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8em;
  text-align: center;
  color: black;
  width: 100px;
`;

export const StatusDeatails = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8em;
  text-align: center;
  color: black;
  flex: 1;
`;
