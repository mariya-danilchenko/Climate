import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./Desktop/pages/main-page/MainPage/MainPage";
import { LoginPage } from "./Desktop/pages/login-page/LoginPage/LoginPage";
import { SignupPage } from "./Desktop/pages/signup-page/SignupPage/SignupPage";
import PortfolioPage from "./Desktop/pages/portfolio-page/PortfolioPage/PortfolioPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
