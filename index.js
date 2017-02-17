var express = require('express');

var app = express();
app.set("view engine", "pug");

app.get('/', function(req, res) {
  var nombre = new Object();
  nombre.primerNombre = "Luis ";
  nombre.apellido = "Ramirez";

  var numero1 = 4;
  var numero2 = 8;

  var paises = ["México", "China", "Canada", "Papua Nueva Guinea"];


  res.render("index", {nombre:nombre, numero1:numero1,
     numero2:numero2, paises:paises});
});

app.listen(8080);
