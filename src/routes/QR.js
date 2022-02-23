const express = require("express");
const router = express.Router();
const {createQR} = require("../controllers/QRController.js");

router.post("/", createQR);

module.exports = router;
