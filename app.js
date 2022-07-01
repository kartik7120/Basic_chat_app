const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("index.html");
})

server.listen(3000, () => {
    console.log("Listening on port 3000");
})