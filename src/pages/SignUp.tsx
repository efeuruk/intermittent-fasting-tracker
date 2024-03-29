import { Card, CardContent, TextField, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CardTitle = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
`;

const CardSubTitle = styled(Typography)`
  font-size: 17px;
  font-weight: 400;
`;

const SignUp = () => {
  return (
    <Card>
      <CardContent>
        <CardTitle>Create New Profile</CardTitle>
        <CardSubTitle>Start Your Fasting Journey</CardSubTitle>
        <div>
          <TextField label="Outlined" variant="outlined" />
          <TextField label="Outlined" variant="outlined" />
          <TextField label="Outlined" variant="outlined" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUp;
