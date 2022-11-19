const bodyParser = require("body-parser"); 
const cors = require("cors");
const express = require("express");
const http = require("http");
const socketServer = require("socket.io");

const accessEnv = require("@root/helpers/accessEnv");

// import router file 
const api = require("@root/routes/api");

const { websocketConnection } = require("@root/ws/socket");

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
  websocketConnection(io);
  app.set('socketio', io);

  // setup api routes 
  app.use("/api", api);

  app.use((err, req, res, next) => {
    return res.status(500).json({ message: err.message });
  });
  
  server.listen(PORT, () => {
    console.log(`api-gateway listening on ${PORT}`);
  });
};

module.exports = startServer;

