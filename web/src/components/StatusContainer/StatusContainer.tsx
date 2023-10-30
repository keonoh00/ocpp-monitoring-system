import React, { useState } from "react";
import {
  BorderContainer,
  RowContainer,
  StatusTitle,
  StatusText,
  StatusDeatails,
} from "./styled";

interface Status {
  idx: number;
  title: string;
  status: string;
  details?: string;
}

const HEADER = {
  title: "Title",
  status: "Status",
  details: "Details",
};

const StatusContainer = () => {
  const [status, setStatus] = useState<Status[]>([
    { idx: 0, title: "Charger1", status: "Charging", details: "70%" },
    { idx: 1, title: "Charger2", status: "OK" },
    { idx: 2, title: "Charger3", status: "OK" },
    { idx: 3, title: "Charger4", status: "OK" },
    { idx: 4, title: "Charger5", status: "Fail", details: "Error Code: 1" },
  ]);

  return (
    <BorderContainer>
      <RowContainer
        key={HEADER.status}
        style={{
          paddingBottom: 5,
          marginBottom: 5,
          borderBottom: 1,
          borderColor: "lightgray",
          borderBottomStyle: "solid",
        }}
      >
        <StatusTitle style={{ fontSize: "1em" }}>{HEADER.title}</StatusTitle>
        <StatusText style={{ fontSize: "1em" }}>{HEADER.status}</StatusText>
        <StatusDeatails style={{ fontSize: "1em" }}>
          {HEADER.details}
        </StatusDeatails>
      </RowContainer>
      {status.map((status) => (
        <RowContainer key={status.idx} style={{ marginBottom: 5 }}>
          <StatusTitle>{status.title}</StatusTitle>
          <StatusText>{status.status}</StatusText>
          <StatusDeatails>{status?.details}</StatusDeatails>
        </RowContainer>
      ))}
    </BorderContainer>
  );
};

export default StatusContainer;
