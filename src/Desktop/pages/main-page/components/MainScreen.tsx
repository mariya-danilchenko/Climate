import React from "react";

export function MainScreen() {
  return (
    <div className="bg-black pt-[134px]">
      <div className="container">
        <div className="flex flex-col gap-y-[50px]">
          <h1 className="text-[38px] font-semibold pb-[199px]">
            Hard to get ESG data made
            <span className="text-light-green"> easy</span>
          </h1>
          <p className="text-[32px] font-semibold">
            Climate13 is a state of the art AI platform to discover ESG risk in
            companies.
          </p>
          <img src="image/mainImage.png" alt="Nature" />
          <p className="text-[24px]">
            We analyse data from hundreds of thousands of sources with
            cutting-edge AI to extract ESG risk intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
