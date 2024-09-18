const fs = require('fs');
var animes = [];

function guardarDB(){
  let data = JSON.stringify(animes);
  fs.writeFile('data/datos.json', data, err => {
    if (err) throw new Error('No se pudo subir');
  });
}

function cargarDB() {
  animes = require('../data/datos.json');
  console.log(animes);
}

function agregar(nombre) { 
  cargarDB();
  let personaje = {
    nombre,
    emision: true,
  };
  animes.push(personaje);
  guardarDB();
}

module.exports = {
  agregar
}