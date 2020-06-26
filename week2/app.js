var express = require('express');
var app = express();
var path = require("path")

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/user.html'));
});

app.get('/user/', (req, res) => {
    res.send({id:2, login: 'Nancy', age:20});
});

app.listen(3000, function(){
    console.log('Listening to port: '+ 3000 );
});
