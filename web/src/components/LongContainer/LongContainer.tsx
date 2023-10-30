import React from "react";
import { Arrow, TitleContainer, BorderContainer, Title } from "./styled";

type LongContainerProps = {
  title?: string;
  style?: React.CSSProperties;
  indexing?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
};

const LongContainer: React.FC<LongContainerProps> = ({
  title,
  style,
  indexing,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <BorderContainer style={style}>
      {indexing ? (
        <TitleContainer>
          <Arrow onClick={onPressLeft}>{"<"}</Arrow>
          <Title>{title}</Title>
          <Arrow onClick={onPressRight}>{">"}</Arrow>
        </TitleContainer>
      ) : (
        <Title>{title}</Title>
      )}
    </BorderContainer>
  );
};

export default LongContainer;
