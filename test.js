//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

// Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
    );
    next();
});

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

//Initialising connection string
var dbConfig = {
    user: "Anuwat",
    password: "11111111",
    server: "ANUWAT-THISUKA\\SQLEXPRESS",
    database: "IIoT",
};

//Function to connect to database and execute query
var executeQuery = function (req, res) {
    sql.connect(dbConfig, function (err) {
        if (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        } else {
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(req, function (err, response) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                } else {
                    console.log(response);
                    res.send(response);
                }
            });
        }
    });
};

//GET ALL ACTIVE USERS FOR PATHWAYS
app.get("/users", function (req, res) {
    var query = "select * from [IIoT].[dbo].[db_b14_area01]";
    console.log(query);
    executeQuery(query, res);
});
