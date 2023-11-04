const express = require("express");

const UserController = require("../controller/User");

const router = express.Router();

router.post("/create", UserController.createUser);

router.get("/:email", UserController.getUserDetailsByEmail);

router.get("/", (req, res) => {
  res.json({ reso: "you are user api" });
});

module.exports = router;
