const express = require('express');
const app = express();
//var ids = [];
var personas = {
	nombre: "",
	edad: 0,
};

// Handle resquests to http://127.0.0.1:3000/ 
app.get("/", (req, res) => {
	res.send("Hola mundo");
});

app.get("/:id", (req, res) => {
	ids.push(req.params.id);
	console.log(ids);
});

app.get("/:nombre"+"/:edad", (req, res) => {
	res.send("hola");
	personas.nombre = req.params.nombre;
	personas.edad = req.params.edad;
	console.log(personas);
});



// Run server
app.listen(3000, () => {
  console.log("Server is running...");
});

