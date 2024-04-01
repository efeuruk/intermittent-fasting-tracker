import React from "react";
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";

type CTAButtonProps = MUIButtonProps;

const CTAButton: React.FC<CTAButtonProps> = props => {
  return (
    <MUIButton
      {...props}
      variant="contained"
      fullWidth
      sx={{
        borderRadius: "100px",
        padding: "17px",
        backgroundColor: "#002548",
        textTransform: "none",
        fontSize: "17px",
        fontWeight: 500,
        "&:hover": {
          backgroundColor: "#002548",
        },
      }}
    >
      {props.children}
    </MUIButton>
  );
};

export default CTAButton;
