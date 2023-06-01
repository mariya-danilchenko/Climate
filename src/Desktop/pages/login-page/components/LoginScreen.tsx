import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../../../../store/loginStore";

const LoginScreen: React.FC = observer(() => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    authStore.nextPortfolio();
    navigate("/portfolio");
  };

  return (
    <div className="container">
      <p className="fontFamily-[Coda] text-[32px] text-light-green  pt-[137px] pb-[44px]">
        climate13 - monitoring ESG risk
      </p>
      <div className="flex flex-row gap-x-[50px]">
        <img src="image/loginImage.png" alt="Sea" />
        <div>
          <form>
            <label className="label-form" htmlFor="email">
              Email address
            </label>
            <input
              className="input-form"
              type="email"
              name="email"
              placeholder="Email"
            />
            <label className="label-form" htmlFor="password">
              Password
            </label>
            <input
              className="input-form"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="btn-next" onClick={handleNextClick}>
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default LoginScreen;
