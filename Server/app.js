const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require("path");

const PORT = 3000;

const app = express();
const myServer = http.createServer(app);
const io = new Server(myServer);

//Routes
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Resources
app.get("/public/js/chunk-vendors.:id.js", (req, res) => {
  res.sendFile(
    path.join(__dirname, `/public/js/chunk-vendors.${req.params.id}.js`)
  );
});
app.get("/public/css/app.:id.css", (req, res) => {
  res.sendFile(path.join(__dirname, `/public/css/app.${req.params.id}.css`));
});
app.get("/css/bootstrap.min.css", (req, res) => {
  res.sendFile(path.join(__dirname, `/public/css/bootstrap.min.css`));
});
app.get("/public/js/app.:id.js", (req, res) => {
  res.sendFile(
    path.join(__dirname, `/public/js/app.${req.params.id}.js`)
  );
});
app.get("/public/js/socket.io.js", (req, res) => {
  res.sendFile(
    path.join(__dirname, `/node_modules/socket.io/client-dist/socket.io.min.js`)
  );
});

//Server up
myServer.listen(PORT, () => {
  console.log(`Server up at ${PORT} port.`);
});

//Socket.io
io.on("connection", (socket) => {
  console.log("New user connected");
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
  socket.on('chat',(msg)=>{
    io.emit('chat',msg);
  });
});