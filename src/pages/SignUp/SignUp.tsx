import { CardContent, CircularProgress } from "@mui/material";
import * as S from "./styles";
import CTAButton from "../../components/CTAButton";
import { useAuthContext } from "../../context/hooks/useAuthContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const authContext = useAuthContext();

  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  if (authContext.isLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoading(true);
    const status = await authContext.register(data);
    if (status) {
      authContext.setUsersName(data.name);
      authContext.setLoggedIn(true);
      navigate("/home");
    } else {
      console.error("Can't register");
    }
    setLoading(false);
  };

  return (
    <S.SignUpContainer>
      <S.StyledCard variant="outlined">
        <CardContent sx={{ padding: 0 }}>
          <S.CardTitle component={"h3"}>Create New Profile</S.CardTitle>
          <S.CardSubTitle component={"h4"}>
            Start Your Fasting Journey
          </S.CardSubTitle>
          <S.InputsForm onSubmit={handleSubmit(onSubmit)}>
            <S.Input
              label="Name"
              variant="outlined"
              required
              name="name"
              inputProps={{
                ...register("name", { required: true }),
              }}
            />
            <S.Input
              label="E-Mail"
              type="email"
              variant="outlined"
              required
              name="email"
              inputProps={{
                ...register("email", { required: true }),
              }}
            />
            <S.Input
              label="Password"
              type="password"
              variant="outlined"
              $noMargin
              required
              name="password"
              inputProps={{
                ...register("password", { required: true }),
              }}
            />
            <CTAButton
              style={{ marginTop: "39px" }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading && (
                <CircularProgress
                  sx={{
                    color: "rgba(0, 0, 0, 0.26)",
                    marginRight: "10px",
                  }}
                  size={20}
                />
              )}
              Register
            </CTAButton>
          </S.InputsForm>
        </CardContent>
      </S.StyledCard>
    </S.SignUpContainer>
  );
};

export default SignUp;
