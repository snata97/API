require('dotenv').config();
var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var database = require('./db');
var db = database.connect();
var app = express();
const routes = require('./routes');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
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



