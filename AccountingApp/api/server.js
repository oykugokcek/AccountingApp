const express = require("express");
const cors = require('cors');
const server = express();
const personRouter = require("./router/person-router")


server.use(cors());
server.use(express.json());

server.use("/api/person", personRouter);

const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "aqT7#K3v.",
    database: "accountingdb"
})

mysqlConnection.connect ((err) => {
    if (!err) {
        console.log("DB connection succeded.")
    } else {
        console.log("DB connection failed \n Error: " + JSON.stringify(err, undefined, 2) )
    }
})


server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

  
  
  server.get("/message", (req, res) => {
    res.status(200).json({ message: "Server ayaktadır." });
  });
  
  server.get("/users/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM Users WHERE id = ?", [req.params.id], (err, rows, fields) => {
      if(!err)
      res.send(rows);
      else
      console.log(err);
    })
  });
  
  server.get("/users", (req, res) => {
    mysqlConnection.query("SELECT * FROM Users", (err, rows, fields) => {
      if(!err)
      res.send(rows);
      else
      console.log(err);
    })
  });

  module.exports = server;