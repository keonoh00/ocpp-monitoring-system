import React from "react";
import { Arrow, TitleContainer, BorderContainer, Title } from "./styled";

type LongContainerProps = {
  title?: string;
  style?: React.CSSProperties;
  indexing?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  children?: React.ReactNode;
};

const LongContainer: React.FC<LongContainerProps> = ({
  title,
  style,
  indexing,
  onPressLeft,
  onPressRight,
  children,
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
      {children}
    </BorderContainer>
  );
};

export default LongContainer;
