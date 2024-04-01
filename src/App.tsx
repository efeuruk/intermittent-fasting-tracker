import Header from "./components/Header";
import { StyledEngineProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import React from "react";
import { FastingProvider } from "./context/FastingContext";

const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AuthProvider>
        <FastingProvider>
          <Header />
          <Layout>
            <Routes>
              <Route path="/register" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Layout>
        </FastingProvider>
      </AuthProvider>
    </StyledEngineProvider>
  );
}

export default App;
