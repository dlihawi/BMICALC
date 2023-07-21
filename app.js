
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./'))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/calculator.html");
})

app.post("/", function(req, res) {
    var weight = parseInt(req.body.weight);
    var height = parseInt(req.body.height);
    var bmi = (weight / (height/100 * height/100)).toFixed(1);
    var message = '';
    if (bmi > 25) {
        var message = ' and you are considered <span style="color: red !important;">obese</span>.'
    } else {
        var message = ' and you are in a <span style="color:green !important;">healthy</span> range.'
    }
    if (isNaN(weight) || isNaN(height) ) {
        res.send(`<p style="color:red;font-size:40px;">Please enter numbers next time</p>`);
    } else {
        var reply = "Your BMI number is "
        res.send(`<p style="color:blue;font-size:40px;">${reply} ${bmi}${message}</p>`);
    }
   
})

app.listen(3000, function() {
  console.log("server is running on port ${port}.");
});