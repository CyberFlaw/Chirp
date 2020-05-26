const experss = require("express");

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
