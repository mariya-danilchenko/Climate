import { makeAutoObservable } from "mobx";

class AuthStore {
  isLoggedIn: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
  logIn() {
    this.isLoggedIn = true;
  }
  logOut() {
    this.isLoggedIn = false;
  }
  nextPortfolio() {
    this.isLoggedIn = true;
  }
}
const authStore = new AuthStore();
export default authStore;
