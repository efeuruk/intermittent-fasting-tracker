import FastingIcon from "../../public/fasting-icon.svg?react";
import styled from "styled-components";
import { IconButton, Typography, TypographyProps } from "@mui/material";
import { useAuthContext } from "../context/hooks/useAuthContext";
import ExitIcon from "../assets/exit-icon.svg?react";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Header = () => {
  const { isLoggedIn, logout } = useAuthContext();
  return (
    <StyledHeader>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          ...(isLoggedIn && {
            marginLeft: "auto",
          }),
        }}
      >
        <FastingIcon />
        <Text>
          <span className="header__text">FASTING</span>
          <span className="header__number">24</span>
        </Text>
      </div>
      {isLoggedIn && (
        <IconButton
          sx={{ marginLeft: "auto", backgroundColor: "#00000029" }}
          onClick={logout}
        >
          <ExitIcon />
        </IconButton>
      )}
    </StyledHeader>
  );
};

export default Header;
