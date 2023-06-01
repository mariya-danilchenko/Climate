import { observer } from "mobx-react-lite";
import React from "react";

const SignupScreen: React.FC = observer(() => {
  return (
    <div className="container">
      <p className="fontFamily-[Coda] text-[32px] text-light-green  pt-[137px] pb-[44px]">
        climate13 - monitoring ESG risk
      </p>
      <div className="flex flex-row gap-x-[50px]">
        <img src="image/loginImage.png" alt="Sea" />
        <div>
          <form>
            <label htmlFor="email"></label>
            <input
              className="input-form"
              type="email"
              name="email"
              placeholder="Business email address"
            />
            <label htmlFor="name"></label>
            <input
              className="input-form"
              type="text"
              name="name"
              placeholder="Name"
            />

            <label htmlFor="phone"></label>
            <input
              className="input-form"
              type="phone"
              name="phone"
              placeholder="Telephone"
            />

            <label htmlFor="company"></label>
            <input
              className="input-form"
              type="text"
              name="company"
              placeholder="Company name"
            />
            <button className="btn-next">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default SignupScreen;
