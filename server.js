const http = require("http");
const express = require('express');
const trips = require("./model/trips");

const hostname = "127.0.0.1";
const port = 3000;

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')


const server = http.createServer(app);

app.get('/', (req, res) => {
    res.render('home',{
        title: "Trip Planner",
        H1: "My Trips",
        location: "Houston",
        link: "New Trip"
    });
});

app.get("/new", (req, res) => {
    res.send("new",{

    });
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});