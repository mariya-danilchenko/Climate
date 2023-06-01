import React from "react";
import { observer } from "mobx-react-lite";
import authStore from "../../../../store/loginStore";
import { useNavigate } from "react-router-dom";

const Header = observer(() => {
  const navigate = useNavigate();
  const handleLogInClick = () => {
    authStore.logIn();
    navigate("/login");
  };

  const handleSignUpClick = () => {
    authStore.logOut();
    navigate("/signup");
  };

  return (
    <div className="bg-cold-steel h-35 pt-2.5">
      <div className="container-header">
        <div className="flex flex-row justify-between">
          <img src="image/logo.png" alt="logo" />
          <div className="flex flex-row gap-x-8">
            <button className="btn-nav">Solutions</button>
            <button className="btn-nav">About</button>
            <button className="btn-nav">Resources</button>
          </div>
          <div className="flex flex-row gap-x-8">
            <button className="btn-nav" onClick={handleLogInClick}>
              Log In
            </button>
            <button className="btn-nav" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
