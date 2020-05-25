const experss = require("express");
const path = require("path");
const http = require("http");

const app = experss();
const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/html/index.html"));
});

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
