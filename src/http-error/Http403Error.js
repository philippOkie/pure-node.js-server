class Http403Error extends Error {
  constructor(message) {
    super(message || "Forbidden");
    this.status = 403;
  }
}

export default Http403Error;
