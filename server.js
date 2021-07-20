const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Welcome to the trip planner app');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});