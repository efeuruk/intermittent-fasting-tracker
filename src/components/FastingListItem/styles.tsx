import {
  Card,
  Chip,
  ChipProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  padding: 32px 30px 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const Hour = styled((props: TypographyProps) => (
  <Typography {...props} />
))`
  margin-right: 16px;
  font-size: 32px;
  font-weight: 700;
  color: #6567d9;
`;

export const Date = styled((props: ChipProps) => <Chip {...props} />)`
  background-color: #d2cdff;
  color: #9f70da;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 12px;
  letter-spacing: 0.07em;
`;

export const StartAndEndTime = styled((props: TypographyProps) => (
  <Typography {...props} />
))`
  font-size: 16px;
  color: #8f939a;
`;
