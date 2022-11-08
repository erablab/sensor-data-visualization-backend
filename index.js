const db = require("./db.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3100;
const host = process.env.HOST;

function connect() {
  db.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  });
}

setTimeout(connect, 10000);


app.use(express.static("public"));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app
  .route("/raw/:sensor/:data")

  .get(function (req, res) {
    const sensor = req.params.sensor;
    const data = req.params.data;
    if (sensor != "power_sensor") {
      query_statement =
        "SELECT " +
        data +
        ", botIndex, latitude, longitude, timestamp FROM " +
        sensor;
    } else {
      query_statement =
        "SELECT " + data + ", botIndex, timestamp FROM " + sensor;
    }
    db.query(query_statement, (err, result) => {
      if (err) {
        message = "Error";
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

app
  .route("/grid_map/:map/:timestamp")

  .get(function (req, res) {
    const grid_map = req.params.map;
    const timestamp = req.params.timestamp;

    query_statement = "SELECT * FROM " + grid_map + " WHERE timestamp = '" + timestamp + "';";
    db.query(query_statement, (err, result) => {
      if (err) {
        message = "Error";
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
