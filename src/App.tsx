import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LongContainer from "./components/LongContainer/LongContainer";
import StatusContainer from "./components/StatusContainer/StatusContainer";
import useChargerStatus from "./hooks/useChargerStatus";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

function App() {
  const [visibleClientIdx, setVisibleClientIdx] = useState<number>(0);
  const [maxUsers, setMaxUsers] = useState<number>(10);
  const { data: chargerStatusData } = useChargerStatus();

  const onPressLeft = () => {
    if (visibleClientIdx > 0) {
      setVisibleClientIdx(visibleClientIdx - 1);
    }
  };

  const onPressRight = () => {
    if (visibleClientIdx < maxUsers - 1) {
      setVisibleClientIdx(visibleClientIdx + 1);
    }
  };

  useEffect(() => {}, [maxUsers, visibleClientIdx]);

  return (
    <AppContainer>
      <Title>OCPP-Web</Title>
      <RowContainer>
        <LongContainer
          indexing
          title={`Client: ${visibleClientIdx + 1}/${maxUsers}`}
          style={{ marginRight: 15 }}
          onPressLeft={onPressLeft}
          onPressRight={onPressRight}
        />
        <LongContainer title={"Server"} />
      </RowContainer>
      <StatusContainer />
    </AppContainer>
  );
}

export default App;
