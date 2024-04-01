import FastingCard from "../components/FastingCard/FastingCard";
import FastingList from "../components/FastingList";
import TotalCards from "../components/TotalCards";
import { useAuthContext } from "../context/hooks/useAuthContext";
import { Typography } from "@mui/material";

const Home = () => {
  const { usersName } = useAuthContext();
  return (
    <>
      <Typography component={"h3"} sx={{ fontSize: "20px" }}>
        Hello <span style={{ fontWeight: 700 }}>{usersName}</span>
      </Typography>
      <FastingCard />
      <TotalCards />
      <FastingList />
    </>
  );
};

export default Home;
