const experss = require("express");
const http = require("http");

const app = experss();
const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;

app.use(experss.static("./public/html"));

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
