import Header from "./components/Header";
import { StyledEngineProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import { FastingProvider } from "./context/FastingContext";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home";
import ViewAll from "./pages/ViewAll";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AuthProvider>
        <FastingProvider>
          <Header />
          <Layout>
            <Routes>
              <Route path="/register" element={<SignUp />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/view-all"
                element={
                  <ProtectedRoute>
                    <ViewAll />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={<Navigate to="/home" replace={true} />}
              />
            </Routes>
          </Layout>
        </FastingProvider>
      </AuthProvider>
    </StyledEngineProvider>
  );
}

export default App;
