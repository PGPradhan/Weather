const express = require("express");
const https = require("https");

const app = express();

app.get("/",function(req,res){
  //const querry = req.body.cityname;
  // const apiKey = 2855495f1923399c2320af0193dc4e14;
  // const unit = metric;
  const url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2855495f1923399c2320af0193dc4e14&unit=metric";
  https.get(url,function(response){
    console.log(response);
    response.on("data",function(data){
      const weatherData = JSON.parse(data)
      //console.log(weatherData);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      //const icon = weatherData.weather[0].icon;
      res.write("<p>The weather is currently"+ weatherDescription + "<p>");
      res.write("<h1>The temperature is currently"+ temp + "</h1>");
      res.send();

    })
  })

  //res.send("Server is up and running ");


})






app.listen(3000,function(){
  console.log("Server is running on port 3000");
})
