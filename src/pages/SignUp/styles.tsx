import styled from "styled-components";
import {
  Card,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { mediaQueries } from "../../constants";

export const StyledCard = styled(Card)`
  padding: 50px 24px 38px 24px;
  border-radius: 16px;
  border-color: transparent;

  ${mediaQueries.sm} {
    padding: 50px 92px 38px 92px;
  }
`;

export const CardTitle = styled((props: TypographyProps) => (
  <Typography {...props} />
))`
  font-size: 20px;
  font-weight: 700;
`;

export const CardSubTitle = styled((props: TypographyProps) => (
  <Typography {...props} />
))`
  font-size: 14px;
  font-weight: 400;
`;

export const InputsForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

export const Input = styled(
  (props: TextFieldProps & { $noMargin?: boolean }) => <TextField {...props} />
)`
  margin-bottom: 22px;
  ${({ $noMargin }) => $noMargin && "margin-bottom: 0;"}
`;
