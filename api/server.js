const express = require("express");
const configMiddleware = require("./middleware/serversetup");

const server = express();
configMiddleware(server);

server.get("/", (req, res) => {
  res.send("<h1>The back-end is up and running</h1>");
});

module.exports = server;
