var express = require('express');
var app = express();
var path = require("path")

app.use(express.static('public'));
app.use(express.json());

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Created!');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(3000, function(){
    console.log('Listening to port: '+ 3000 );
});
