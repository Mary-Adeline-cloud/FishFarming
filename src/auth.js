class Auth {
  constructor() {
    this.authonticated = false;
  }
  login(cb) {
    this.authonticated = true;
    cb();
  }

  logout(cb) {
    this.authonticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();
