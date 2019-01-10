var express = require("express")
var bodyParser = require("body-parser")

var PORT = process.env.PORT || 8080

var app = express()

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

var routes = require("./controllers/controller.js")

app.use(routes)

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT)
})



// Weather server data

var express = require('express');
var request = require('request-promise');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var ejs = require('ejs');

// var app = express();

// app.set('view engine', 'ejs');

// // app.set('view engine');
// app.use(bodyParser.urlencoded({ extended : true}));

// mongoose.connect('mongodb://project2:pinky1@ds151354.mlab.com:51354/weather')

// var citySchema = new mongoose.Schema({
//     name : String 
// });

// var cityModel = mongoose.model('City', citySchema);

// // var lasvegas = new cityModel({name : 'Las Vegas'});
// // var toronto = new cityModel({name : 'Toronto'});
// // var sydney = new cityModel({name : 'Sydney'});
// // lasvegas.save()
// // toronto.save()
// // sydney.save()

// async function getWeather(cities) {
//     var weather_data = [];

//     for (var city_obj of cities) {
//         var city = city_obj.name;
//         var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e2b506380fe6b8b79acad137f9b37948`;

//         var response_body = await request(url);

//         var weather_json = JSON.parse(response_body);

//         var weather = {
//             city : city,
//             temperature : Math.round(weather_json.main.temp),
//             description : weather_json.weather[0].description,
//             icon : weather_json.weather[0].icon
//         };

//         weather_data.push(weather);
//     }

//     return weather_data;
// }

// //var city = 'Las Vegas';

// app.get('/', function(req, res) {

//     cityModel.find({}, function(err, cities) {

//         getWeather(cities).then(function(results) {

//             var weather_data = {weather_data : results};

//             res.render('weather', weather_data);
//             console.log(weather_data)
//         });

//     });      

// });

// app.post('/', function(req, res) {

//     var newCity = new cityModel({name : req.body.city_name});
//     newCity.save();

//     res.redirect('/');

// });

// app.listen();

////////////////////////nonsense?????????????????


const apiKey = 'e2b506380fe6b8b79acad137f9b37948'
//Using bodyparser middleware
app.use(bodyParser.urlencoded({extended:true}))
// exposing public folder to express
app.use(express.static('public'))
// setting templating engine to handlebars
app.set('view engine')
// Get request to render view.
app.get('/',function(req,res){
    res.render()
})
// Post operation to make api request for weather data.
app.post('/',function(req,res){
    let cityName = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
    request(url, function (err, response, body) {
        if(err){
        res.render({weather: null, error: 'Error, please try again'})
        } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
            res.render( {weather: null, error: 'Error, please try again'})
        } else {
            let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`
            res.render( {weather: weatherText, error: null})
        }
        }
    });
})
// server listening to port 8080
app.listen()