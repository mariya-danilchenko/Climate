import React from "react";
import { Header } from "../components/Header";
import SignupScreen from "../components/SignupScreen";
import { Footer } from "../../../../components/Footer/Footer";

export function SignupPage() {
  return (
    <div className="wrapper">
      <Header />
      <SignupScreen />
      <Footer />
    </div>
  );
}
