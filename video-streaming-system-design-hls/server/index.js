const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/hls", express.static(path.join(__dirname, "hls")));

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);