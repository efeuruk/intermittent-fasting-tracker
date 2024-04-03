import {
  Card,
  Chip,
  ChipProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import styled from "styled-components";
import { mediaQueries } from "../../constants";

export const StyledCard = styled(Card)`
  position: relative;
  padding: 22px 20px 20px;

  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  border-color: transparent;

  ${mediaQueries.sm} {
    padding: 32px 30px 30px;
  }
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
  margin-right: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #6567d9;

  ${mediaQueries.sm} {
    font-size: 32px;
    margin-right: 16px;
  }
`;

export const Date = styled((props: ChipProps) => <Chip {...props} />)`
  background-color: #d2cdff;
  color: #9f70da;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 10px;
  letter-spacing: 0.07em;

  ${mediaQueries.sm} {
    font-size: 12px;
  }
`;

export const StartAndEndTime = styled((props: TypographyProps) => (
  <Typography {...props} />
))`
  font-size: 12px;
  color: #8f939a;

  ${mediaQueries.sm} {
    font-size: 16px;
  }
`;
