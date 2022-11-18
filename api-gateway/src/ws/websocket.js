const websocket = (io) => {
  console.log("websocket logic");

  io.on("connection", (socket) => {
    console.log("connected to socket!", socket.id);

    socket.on("disconnect", () => {
      console.log("Disconnected - ", socket.id);
    });
  });
};

module.exports = websocket;