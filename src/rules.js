import { pub } from "./pubsub.js";

setInterval(() => {
  pub("everyFiveSeconds");
}, 60e3);

export default [
  [
    "everyFiveSeconds",
    () => {
      console.count("server is running for minutes:");
    },
  ],

  [
    "/",
    () => {
      console.count("visit");
    },
  ],

  [
    "/api/random",
    (args, { languages }) => {
      for (const lang in languages) {
        console.count(lang);
      }
    },
  ],

  [
    "/",
    (args, { languages }) => {
      if (languages.de) {
        console.log("Hallo!");
      }
    },
  ],
];
