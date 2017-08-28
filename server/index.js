var express = require('express')
var mongoose = require("mongoose");
var bodyParser = require('body-parser')
var sessions = require('./auth/session');
var cors = require('cors');
var dbConnect = require('./config/db/mlab-config')
var port = process.env.PORT || 3000

var server = express();


server.use(cors());

server.use(sessions);
server.use(express.static(__dirname + '/../public' ))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

var authRouter = require("./auth/auth-routes.js");
server.use("/", authRouter);


server.listen(port, ()=>{
  console.log('Listening on port: ', port)
})




var songRouter = require('./routes/songs')
server.use('/api/songs', songRouter)


