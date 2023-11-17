import React from "react";
import Home from "./screen/Home/Home";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Monitor from "./screen/Monitor/Monitor";
import NotFound from "./screen/NotFound/NotFound";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/monitor" element={<Monitor />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
