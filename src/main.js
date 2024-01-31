import http from "http";
import router from "./http-server/router.js";
import args from "./http-server/args.js";
import context from "./http-server/context.js";

const PORT = process.env.PORT || 5000;

const server = http.createServer(
  args(
    context(
      router((req, res) => {
        console.log(req.args);
        console.log(req.context);
        res.end();
      })
    )
  )
);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
