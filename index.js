let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    //res.writeHead(200, {"Content-Type": "text/plain"});
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(nick, msg){
        io.emit('chat message', nick,msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});