const db = require("./db.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const joi = require("joi");
// const jwt = require("jsonwebtoken");
// var uuid = require("uuid");
// const { func, string, object } = require("joi");
// const crypto = require("crypto");
// const bcrypt = require("bcrypt");
// const { send } = require("process");
// const saltRound = 10;
// const { stringify } = require("querystring");
// const { time } = require("console");
// const { response } = require("express");
// const fs = require("fs");
require("dotenv").config();
const port = process.env.PORT;
const host = process.env.HOST;
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect");
  }
});

app.use(express.static("public"));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app
  .route("/:sensor/:data")

  .get(function (req, res) {
    const sensor = req.params.sensor;
    const data = req.params.data;
    query_statement =
      "SELECT " +
      data +
      ", botIndex, latitude, longitude, timestamp FROM " + sensor;
    db.query(query_statement, (err, result) => {
      if (err) {
        message = "Error getting orders with these requirements";
        res.send({
          code: 1,
          message: message,
          result: err,
        });
      } else {
        message = "Successful";
        res.send({
          code: 0,
          message: message,
          result: result,
        });
      }
    });
  });

app.listen(port, host, () => {
  console.log("Server started on port " + port);
});
