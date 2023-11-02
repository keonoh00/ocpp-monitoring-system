import React from "react";
import Home from "./screen/Home/Home";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
