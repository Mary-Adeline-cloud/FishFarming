//import cookie from "js-cookie";
class Auth {
  constructor() {
    this.authenticated = false;
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
export const setLocalStorage = (key, data) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const authenticate = (response, next) => {
  // setCookie('token', response.data.token)
  setLocalStorage("data", response.data.data); 
  next()

  
};
export const isAuth = () => {
  if (window !== "undefined") {
    if (localStorage.getItem("data")) {
      return (localStorage.getItem("data"));
    } else {
      return false;
    }
  }
};


export default new Auth();
