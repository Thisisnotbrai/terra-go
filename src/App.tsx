import { Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/auth/AuthPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}