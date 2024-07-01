const express = require("express");
const router = express.Router();

router
  .get("/", (req, res) =>
    res.status(200).json({ message: "This is the response from the homepage" })
  )
  .post("/register", (req, res) =>
    res.status(201).json({ message: "This is the response from the register" })
  );

module.exports = router;
