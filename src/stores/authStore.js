import { decorate, observable } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      localStorage.setItem("Token", token);
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      localStorage.removeItem("Token");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  signupUser = async (userData, history) => {
    try {
      const res = await axios.post(
        "https://the-index-api.herokuapp.com/signup/",
        userData
      );
      const user = res.data;
      this.setUser(user.token);
      history.push("/");
    } catch (err) {
      console.error(err.response.data);
    }
  };
  loginUser = async (userData, history) => {
    try {
      const res = await axios.post(
        "https://the-index-api.herokuapp.com/login/",
        userData
      );
      const user = res.data;
      this.setUser(user.token);
      history.replace("/");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  logoutUser = history => {
    this.setUser();
  };
  checkForToken = () => {
    const token = localStorage.getItem("Token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logoutUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
