require("dotenv").config();
const express = require("express");
const Routes = require("./routes/Index");

let PORT = process.env.DEV_PORT;

const Server = () => {
  const APP = express();

  APP.use(Routes);

  APP.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
};

module.exports = Server;
