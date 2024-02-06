import { pub } from "./pubsub.js";
import _trackUserEvent from "./tracking/_trackUserEvent.js";

setInterval(() => {
  pub("everyFiveSeconds");
}, 60e3);

export default [
  ["/", _trackUserEvent],

  [
    "everyFiveSeconds",
    () => {
      console.count("server is running for minutes:");
    },
  ],

  [
    "/",
    (args, { userAgent }) => {
      console.count("visit");
      if (userAgent.includes("Linux")) {
        console.count("visit from linux");
      }
      if (userAgent.includes("Macintosh") || userAgent.includes("iPhone")) {
        console.count("visit from IOS or MacOS");
      }
      if (userAgent.includes("Windows")) {
        console.count("visit from windows");
      }
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
