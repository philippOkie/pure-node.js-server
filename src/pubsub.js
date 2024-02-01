import EventEmitter from "node:events";

const pubsub = new EventEmitter();
pubsub.setMaxListeners(1e3);

export const pub = (eventName, ...rest) => {
  pubsub.emit(eventName, ...rest);
};

const safeCall =
  (eventName, fn) =>
  async (...args) => {
    try {
      await fn(...args);
    } catch (err) {
      console.log(eventName, err);
    }
  };

export const sub = (eventName, callback) => {
  pubsub.addListener(eventName, safeCall(eventName, callback));
};
