import { pub } from "./pubsub.js";

setInterval(() => {
  pub("everyFiveSeconds");
}, 5e3);

export default [
  [
    "everyFiveSeconds",
    () => {
      console.log("some");
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
