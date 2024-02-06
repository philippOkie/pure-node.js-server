import { csv, textHtml, random, json } from "./http-server/wrapper.js";
import peopleService from "./people/people.js";
import lorem from "./lorem-ipsum/lorem.js";
import test from "./test/test.html.js";
import randomNum from "./number/randomNum.js";
import userEvents from "./tracking/userEvents.js";

const resolver = (fn) => (req, res) => fn(req.args, req.context);

const GET = {
  "/": (req, res) => {
    res.write("the main page!");
  },

  "/api/userEvents": json(resolver(userEvents)),

  "/api/test": textHtml(test),

  "/api/echo": json((req, res) => {
    return { args: req.args, context: req.context };
  }),

  "/api/lorem": csv(lorem),

  "/api/random": random(randomNum),

  "/api/people": json(resolver(peopleService.getPeople)),
};

const POST = {
  "/api/sayHi": json((req, res) => {
    return req.args;
  }),
  "/api/people/add": json(
    resolver((args, context) => peopleService.addPerson(args, context))
  ),
};

export default { GET, POST };
