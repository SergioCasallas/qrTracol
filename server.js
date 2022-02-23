// ! Variables a Usar
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const { default: helmet } = require("helmet");

// !Server
const server = express();

// ! Midlewars

server
  .use(helmet())
  .use(morgan("dev"))
  .use(cors())
  .use(json({ limit: "50mb" }))
  .use(urlencoded({ extended: true, limit: "50mb" }));
require("dotenv").config();

// !Routes

server.use("/qr", require("./src/routes/QR"));

//  !Port
const PORT = process.env.EXPRESSPORT || 6000;

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
