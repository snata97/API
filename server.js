var express = require('express');
var bodyParser = require('body-parser');
var database = require('./db');
var db = database.connect();
var app = express();
const routes = require('./routes');

app.use(bodyParser.json());//Парсить данные json
app.use(bodyParser.urlencoded({extended: true}));//Парсить данные формы
app.use("/", routes);


app.listen(3012, function(){
    console.log('API app started');
})