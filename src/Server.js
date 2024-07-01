const express = require("express");
require("dotenv").config();

let PORT = process.env.DEV_PORT;

const Server = () => {
  const APP = express();

  APP.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
};

module.exports = Server;
