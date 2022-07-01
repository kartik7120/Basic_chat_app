const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("index.html");
})

io.on("connection", (socket) => {
    console.log("A user is connected");
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on("disconnect", () => {
        console.log("User is disconnected");
    })
})

server.listen(3000, () => {
    console.log("Listening on port 3000");
})