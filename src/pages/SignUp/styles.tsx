import styled from "styled-components";
import {
  Card,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const SignUpContainer = styled.div``;

export const StyledCard = styled(Card)`
  border-radius: 16px;
  padding: 50px 92px 62px 92px;
`;

export const CardTitle = styled((props: TypographyProps) => (
  <Typography {...props} />
))`
  font-size: 24px;
  font-weight: 700;
`;

export const CardSubTitle = styled((props: TypographyProps) => (
  <Typography {...props} />
))`
  font-size: 17px;
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
