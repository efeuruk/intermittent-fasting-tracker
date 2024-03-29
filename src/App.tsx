import Header from "./components/Header";
import { StyledEngineProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </StyledEngineProvider>
  );
}

export default App;
