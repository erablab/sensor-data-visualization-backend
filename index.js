// const db = require("./db.js");
// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv").config();
// const port = process.env.PORT || 3100;
// const host = process.env.HOST;
// db.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("connect");
//   }
// });

// app.use(express.static("public"));
// app.use(express.json());
// app.use(cors({ origin: true, credentials: true }));
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app
//   .route("/raw/:sensor/:data")

//   .get(function (req, res) {
//     const sensor = req.params.sensor;
//     const data = req.params.data;
//     if (sensor != "power_sensor") {
//       query_statement =
//         "SELECT " +
//         data +
//         ", botIndex, latitude, longitude, timestamp FROM " +
//         sensor;
//     } else {
//       query_statement =
//         "SELECT " + data + ", botIndex, timestamp FROM " + sensor;
//     }
//     db.query(query_statement, (err, result) => {
//       if (err) {
//         message = "Error";
//         res.send({
//           code: 1,
//           message: message,
//           result: err,
//         });
//       } else {
//         message = "Successful";
//         res.send({
//           code: 0,
//           message: message,
//           result: result,
//         });
//       }
//     });
//   });

// app
//   .route("/grid_map/:map/:timestamp")

//   .get(function (req, res) {
//     const grid_map = req.params.map;
//     const timestamp = req.params.timestamp;

//     query_statement = "SELECT * FROM " + grid_map + " WHERE timestamp = '" + timestamp + "';";
//     db.query(query_statement, (err, result) => {
//       if (err) {
//         message = "Error";
//         res.send({
//           code: 1,
//           message: message,
//           result: err,
//         });
//       } else {
//         message = "Successful";
//         res.send({
//           code: 0,
//           message: message,
//           result: result,
//         });
//       }
//     });
//   });

// app.listen(port, host, () => {
//   console.log("Server started on port " + port);
// });


var mysql = require('mysql');
var express = require('express');

var app = express();
var port = process.env.PORT || 8005;

app.get('/',function(req,res){
   
   var mysqlHost = process.env.MYSQL_HOST || 'localhost';
   var mysqlPort = process.env.MYSQL_PORT || '3306';
   var mysqlUser = process.env.MYSQL_USER || 'root';
   var mysqlPass = process.env.MYSQL_PASS || 'root';
   var mysqlDB   = process.env.MYSQL_DB   || 'node_db';

   var connectionOptions = {
     host: mysqlHost,
     port: mysqlPort,
     user: mysqlUser,
     password: mysqlPass,
     database: mysqlDB
   };

   console.log('MySQL Connection config:');
   console.log(connectionOptions);

   var connection = mysql.createConnection(connectionOptions);
   
   connection.connect();

   console.log('connnected')
    
   connection.end();
});


app.listen(port, function(){
    console.log('Sample mySQL app listening on port ' + port);
});