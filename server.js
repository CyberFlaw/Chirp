const experss = require("express");
const socket = require("socket.io");

const app = experss();
const PORT = 3000 || process.env.PORT;

const server = app.listen(PORT, (err) => {
  if (err) {
    console.log(`Whops an error pooped up... ${err}`);
  } else {
    console.log(`Server running in port ${PORT}`);
  }
});

app.use(experss.static("./public"));

const io = socket(server);
io.on("connection", (socket) => {
  console.log("Client Connected...");

  socket.on("chat", (data) => {
    console.log(data);
    io.sockets.emit(chat.data);
  });
});
