const socket = io.connect("http://localhost:3000/");

const input = document.getElementById("msg");
const button = document.querySelector("#send");

button.addEventListener("click", (event) => {
  event.preventDefault();
  socket.emit("chat", { message: input.value });
  input.value = "";
});

const returnSubmit = document.getElementById("msg");
returnSubmit.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".btn").click;
  }
});

socket.on("chat", (data) => {
  console.log(data);
});
