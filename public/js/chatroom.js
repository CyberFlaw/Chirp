const socket = io.connect("http://localhost:3000/");

const input = document.getElementById("msg");
const user = document.getElementById("user");

const button = document.querySelector(".btn");
button.addEventListener("click", (e) => {
  e.preventDefault();
  socket.emit("chat", { message: input.value, user: user.value });
  input.value = "";
});

const returnSubmit = document.getElementById("msg");
returnSubmit.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.querySelector(".btn").click;
  }
});

socket.on("chat", (data) => {
  console.log(data);
});
