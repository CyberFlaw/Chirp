const returnSubmit = document.getElementById("msg");
returnSubmit.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".btn").click;
  }
});
