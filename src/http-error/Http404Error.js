class Http404Error extends Error {
  constructor(message) {
    super(message || "Not Found");
    this.status = 404;
  }
}

export default Http404Error;
