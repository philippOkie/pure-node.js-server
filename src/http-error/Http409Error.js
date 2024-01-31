class Http409Error extends Error {
  constructor(message) {
    super(message || "Conflict");
    this.status = 409;
  }
}

export default Http409Error;
