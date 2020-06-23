require('dotenv').config();
var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var database = require('./db');
var db = database.connect();
var app = express();
const routes = require('./routes');
app.use(cors());

app.use(bodyParser.json());//Парсить данные json
app.use(bodyParser.urlencoded({extended: true}));//Парсить данные формы

app.use("/", routes);

app.listen(3012, function(){
    db.connect()
    .then(function (obj) {
        console.log('API app started');
        obj.done();
    })
    .catch(function (error) {
        console.log("ERROR: no connect database");
        process.exit(-1);
    });
})



