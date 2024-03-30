import { useAuthContext } from "../context/hooks/useAuthContext";
import { Typography } from "@mui/material";

const Home = () => {
  const { usersName } = useAuthContext();
  return (
    <div>
      <Typography sx={{ fontSize: "20px" }}>
        Hello <span style={{ fontWeight: 700 }}>{usersName}</span>
      </Typography>
    </div>
  );
};

export default Home;
