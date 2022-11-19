const socketHandler = (socket) => {
  socket.on('hello', (arg) => {
    console.log(arg);
  });

  socket.on('postMessage', (arg) => {
    console.log(arg);
  });
};

export default socketHandler;