const http = require("http");
const today = require("./today");

const requestListener = function (req, res) {
  res.writeHead(200);
  var dateVal = today.getDate();
  var greeting = "It is still not morning";

  if (dateVal.getHours() > 6 && dateVal.getHours() < 12) {
    greeting = "Good Morning";
  } else if (dateVal.getHours() >= 12 && dateVal.getHours() < 18) {
    greeting = "Good Afteroon";
  } else if (dateVal.getHours() >= 18 && dateVal.getHours() < 21) {
    greeting = "Good Evening";
  } else if (dateVal.getHours() >= 21 && dateVal.getHours() < 24) {
    greeting = "Good Night!";
  }
  res.end(`Hello, ${greeting} It's here now time ${dateVal.getDate()} `);
};

const port = 8080;
const server = http.createServer(requestListener);
console.log("server listening on port: " + port);
server.listen(port);
