import { Card, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  position: relative;
  border-radius: 16px;
  padding: 72px 92px 3px 92px;
  margin-top: 36px;
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
