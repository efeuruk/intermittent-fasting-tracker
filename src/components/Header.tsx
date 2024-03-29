import React from "react";
import FastingIcon from "../../public/fasting-icon.svg?react";
import styled from "styled-components";
import { Typography, TypographyProps } from "@mui/material";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #ffffff;
`;

const Text = styled((props: TypographyProps) => <Typography {...props} />)`
  margin-left: 7px;
  color: #002548;
  font-size: 28px;
  letter-spacing: 0.05em;

  .header__text {
    font-weight: 400;
  }
  .header__number {
    font-weight: 700;
  }
`;

const Header: React.FC<{}> = () => {
  return (
    <StyledHeader>
      <FastingIcon />
      <Text>
        <span className="header__text">FASTING</span>
        <span className="header__number">24</span>
      </Text>
    </StyledHeader>
  );
};

export default Header;
