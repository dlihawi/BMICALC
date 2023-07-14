
const express = require("express");
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/", function(req, res){
  const body = req.body;
  const weight = Number(body.weight);
  const height = Number(body.height);
  const result = weight / (height * height);
  res.send(`Your BMI result is ${result}`);
});

app.listen(3000, function(){
  console.log("server is running on port ${port}.");
});
