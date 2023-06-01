import React from "react";
import LoginScreen from "../components/LoginScreen";
import { Footer } from "../../../../components/Footer/Footer";
import { Header } from "../components/Header";

export function LoginPage() {
  return (
    <div className="wrapper">
      <Header />
      <LoginScreen />
      <Footer />
    </div>
  );
}
