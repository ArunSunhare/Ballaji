 try {
 require("dotenv").config();
} catch {
  // dotenv is optional when the host injects PORT/HOSTNAME directly.
}

const { createServer } = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || process.env.HOST || "0.0.0.0";
const rawPort = process.env.PORT || process.env.NEXT_PORT || "3000";
const port = Number.parseInt(rawPort, 10);

if (!Number.isFinite(port)) {
  throw new Error(`Invalid PORT value: ${rawPort}`);
}

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, hostname, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Server ready on http://${hostname}:${port}`);
  });
});