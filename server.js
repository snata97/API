require('dotenv').config();
var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var database = require('./db');
var db = database.connect();
var app = express();
const routes = require('./routes');
// app.use(cors());
// app.options('*', cors({credentials: true, origin: true}));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Content-Type", "application/json");
    //res.setHeader("Access-Control-Request-Method", "GET,POST,PUT,DELETE");
    //res.setHeader("Access-Control-Request-Headers", "Origin,X-Requested-With,Content-Type,Accept");
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
