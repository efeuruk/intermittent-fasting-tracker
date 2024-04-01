import { Card, styled, Typography } from "@mui/material";
import React from "react";

const StyledCard = styled(Card)`
  padding: 24px 20px 31px 20px;
  flex: 1;
  border-radius: 16px;
`;

const Icon = styled(Typography)`
  font-size: 28px;
`;

const Number = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  color: #040404;
`;

const Title = styled(Typography)`
  font-size: 16px;
  color: #696c74;
`;

type TotalCardProps = {
  icon: string;
  number: number;
  title: string;
  style?: React.CSSProperties;
};

const TotalCard: React.FC<TotalCardProps> = ({
  icon,
  number,
  title,
  style,
}) => {
  return (
    <StyledCard variant="outlined" style={style}>
      <Icon>{icon}</Icon>
      <Number>{number}</Number>
      <Title>{title}</Title>
    </StyledCard>
  );
};

export default TotalCard;
