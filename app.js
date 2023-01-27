const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = new express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")
});


app.post("/", function(req, res) {
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    console.log(email);

    url = "https://Google.com"
    const request = https.request(url,method="POST", function(response) {
        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html")
        } else {
            res.sendFile(__dirname +"/failure.html")
        }
    })
})

app.listen(3000, function() {
    console.log("server is runnung on port 3000");
});
