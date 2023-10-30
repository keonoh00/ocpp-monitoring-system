import styled from "styled-components";

export const BorderContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  overflow: auto;
  flex: 1;
  height: 300px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  text-align: center;
  color: black;
`;

export const Arrow = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5em;
  cursor: pointer;
  color: black;
`;
