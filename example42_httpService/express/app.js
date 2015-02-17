var express        =        require("express");
var bodyParser     =        require("body-parser");
var cors           =        require('cors');
var app            =        express();

app.use(cors());


var data = [
    {"firstName": "Jeff", "lastName": "Winger"},
    {"firstName": "Troy", "lastName": "Barnes"},
    {"firstName": "Britta", "lastName": "Perry"},
    {"firstName": "Abed", "lastName": "Nadir"}
];


app.get('/users', function(req, res) {
    res.send(data);
});

app.post('/users', function(req, res) {
    res.send(req.body);
});

app.listen(3000,function(){
    console.log("Started on PORT 3000");
});