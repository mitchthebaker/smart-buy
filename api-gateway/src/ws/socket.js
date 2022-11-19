const websocketConnection = (io) => {
  io.on("connection", (socket) => {
    console.log("connected to socket!", socket.id);

    socket.emit("hello", "world");

    socket.on("disconnect", () => {
      console.log("Disconnected - ", socket.id);
    });
  });
};

const postMessageHandler = (io, data) => {
  io.emit(data.type, data.payload);
};

module.exports = { websocketConnection, postMessageHandler };