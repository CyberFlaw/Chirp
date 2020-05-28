const socket = io.connect("http://localhost:3000/");

const input = document.getElementById("msg");
const button = document.querySelector("#send");
const chatMessage = document.querySelector(".chat-messages");

button.addEventListener("click", (event) => {
  event.preventDefault();
  socket.emit("chat", { message: input.value });
  input.value = "";
});

const returnSubmit = document.getElementById("msg");
returnSubmit.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    socket.emit("chat", { message: input.value });
    input.value = "";
  }
});

socket.on("chat", (data) => {
  console.log(data);

  // displaying to dom

  const msgBubble = document.createElement("div");
  msgBubble.classList.add("message");

  // const name = document.createElement("p");
  // name.classList.add("meta");
  // name.innerText = "tim";

  // const date = document.createElement("span");
  // date.innerText = "date";

  // const body = document.createElement("p");
  // body.innerText = data.message;

  // msgBubble.appendChild(name);
  // msgBubble.appendChild(date);
  // msgBubble.appendChild(body);

  msgBubble.innerHTML = `<p class='meta'>Name <span>Date</span> </p> <p>${data.message}</p>`;

  chatMessage.appendChild(msgBubble);
});
