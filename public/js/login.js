const user = document.getElementById("exampleInputEmail1");
const pass = document.getElementById("exampleInputPassword1");
const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  const data = {
    user: user.value,
    password: pass.value,
  };

  console.log(data);

  //Todo the data object will be passed to rest api using fetch api
});
