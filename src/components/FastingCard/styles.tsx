import { Card, Typography } from "@mui/material";
import styled from "styled-components";
import { mediaQueries } from "../../constants";

export const StyledCard = styled(Card)`
  position: relative;
  display: flex;
  justify-content: center;

  padding: 72px 24px 3px 24px;
  margin-top: 36px;
  border-radius: 16px;
  border-color: transparent;

  ${mediaQueries.sm} {
    padding: 72px 92px 3px 92px;
  }
`;

export const FastingCardTitle = styled(Typography)`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
`;

export const Timers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 33px;
  padding-left: 70px;
  padding-right: 70px;
`;

export const TimeLabel = styled(Typography)`
  font-size: 14px;
  color: #9695a8;
`;
