import { CardContent } from "@mui/material";
import * as S from "./styles";
import CTAButton from "../../components/CTAButton";

const SignUp = () => {
  return (
    <S.SignUpContainer>
      <S.StyledCard variant="outlined">
        <CardContent sx={{ padding: 0 }}>
          <S.CardTitle component={"h3"}>Create New Profile</S.CardTitle>
          <S.CardSubTitle component={"h4"}>
            Start Your Fasting Journey
          </S.CardSubTitle>
          <S.InputsContainer>
            <S.Input label="Name" variant="outlined" />
            <S.Input label="E-Mail" type="email" variant="outlined" />
            <S.Input
              label="Password"
              type="password"
              variant="outlined"
              $noMargin
            />
          </S.InputsContainer>
          <CTAButton style={{ marginTop: "39px" }}>Register</CTAButton>
        </CardContent>
      </S.StyledCard>
    </S.SignUpContainer>
  );
};

export default SignUp;
