import React from "react";
import { MainScreen } from "../components/MainScreen";
import { Footer } from "../../../../components/Footer/Footer";
import Header from "../components/Header";

export function MainPage() {
  return (
    <div className="overflow-auto">
      <Header />
      <MainScreen />
      <Footer />
    </div>
  );
}
