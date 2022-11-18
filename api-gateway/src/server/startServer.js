const bodyParser = require("body-parser"); 
const cors = require("cors");
const express = require("express");
const http = require("http");
const socketServer = require("socket.io");

const accessEnv = require("@root/helpers/accessEnv");
const setupRoutes = require("@root/server/setupRoutes");
const websocket = require("@root/ws/websocket");

const PORT = parseInt(accessEnv("PORT", "3001"), 10); 

const startServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  }));

  // setup socket.io 
  let server = http.createServer(app);
  let io = socketServer(server);
  //websocket(io);

  // setup api routes 
  setupRoutes(app);

  app.use((err, req, res, next) => {
    return res.status(500).json({ message: err.message });
  });
  
  server.listen(PORT, () => {
    console.log(`api-gateway listening on ${PORT}`);
  });

  io.on("connection", (socket) => {
    console.log("connected to socket!", socket.id);

    socket.on("disconnect", () => {
      console.log("Disconnected - ", socket.id);
    });
  });
};

module.exports = startServer;

