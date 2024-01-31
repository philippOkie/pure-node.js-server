import { csv, textHtml, random, json } from "./http-server/wrapper.js";
import people from "./people/people.js";

import lorem from "./lorem-ipsum/lorem.js";
import test from "./test/test.html.js";
import randomNum from "./number/randomNum.js";

const resolver = (fn) => (req, res) => fn(req.args, req.context);

const GET = {
  "/": (req, res) => {
    res.write("the main page!");
  },

  "/api/test": textHtml(test),

  "/api/echo": json((req, res) => {
    return { args: req.args, context: req.context };
  }),

  "/api/lorem": csv(lorem),

  "/api/random": random(randomNum),

  "/api/people": json(resolver(people)),
};

const POST = {
  "/api/sayHi": json((req, res) => {
    return req.args;
  }),
};

export default { GET, POST };
