const email = document.getElementById("exampleInputEmail1");
const user = document.getElementById("exampleInputEmail2");
const pass = document.getElementById("exampleInputPassword1");
const submit = document.getElementById("submit");
const check = document.getElementById("exampleCheck1");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  //   if (
  //     user.innerText !== "" &&
  //     email.innerText !== "" &&
  //     pass.innerText !== "" &&
  //     check.checked
  //   ) {
  const data = {
    email: email.value,
    user: user.value,
    password: pass.value,
  };

  console.log(data);

  // Give a post request to rest api
});
