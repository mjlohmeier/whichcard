const express = require('express');
const cors = require('cors');
const server = express();
var bodyParser = require('body-parser');
server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.sendStatus(200)
});

server.post('/game/id',(req, res) => {
    let action = req.body;
    
    res.send(action);
});

server.listen(3005);

//lolololol