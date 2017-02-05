import express = require("express");
import bodyParser = require("body-parser");

import ReadingController = require("./controllers/readingsController");

let app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send('This is some gateway.')
}); 

app.post("/postreadings", function(req, res) {
    ReadingController.postReadings(req, res);
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!")
});
