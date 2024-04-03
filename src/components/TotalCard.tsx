import { Card, styled, Typography } from "@mui/material";
import React from "react";
import { mediaQueries } from "../constants";

const StyledCard = styled(Card)`
  padding: 24px 15px 31px 15px;
  flex: 1;
  border-radius: 16px;
  border-color: transparent;

  ${mediaQueries.sm} {
    padding: 24px 30px 31px 30px;
  }

  &:first-of-type {
    margin-right: 10px;
    ${mediaQueries.sm} {
      margin-right: 30px;
    }
  }
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
