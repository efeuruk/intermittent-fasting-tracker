import styled from "styled-components";
import {
  Button,
  ButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const Container = styled.div`
  margin-top: 40px;
  max-height: 400px;
  overflow-y: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled((props: TypographyProps) => (
  <Typography {...props} />
))`
  font-size: 24px;
  font-weight: 700;
`;

export const ViewButton = styled((props: ButtonProps) => <Button {...props} />)`
  text-transform: none;
  color: #834cc9;
  &:hover {
    background-color: rgba(131, 76, 201, 0.2);
  }
`;

export const FastingListContainer = styled.div`
  margin-top: 20px;
`;
