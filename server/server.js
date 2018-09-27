const express = require('express');
// const cors = require('cors');
const server = express();
var bodyParser = require('body-parser');

server.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });

// server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.sendStatus(200)
});

server.post('/game/:id',(req, res) => {
    console.log(req.body)
    let action = req.body;
    
    res.send(action);
});

server.listen(3005);