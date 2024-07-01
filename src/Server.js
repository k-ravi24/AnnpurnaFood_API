const express = require("express");

const Server = () => {
  const APP = express();

  APP.listen(8080, () => console.log("Server is running at PORT: 8080"));
};

module.exports = Server;
