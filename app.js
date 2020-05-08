// import {crearArchivo} from './multiplicar/multiplicar';
// const {crearArchivo} = require('./multiplicar/multiplicar');

// var base = 6;
// crearArchivo(base).then(nombre => console.warn(nombre))
//  .catch(err => console.log(err));


// let data = '';
// for (let i = 1; i < 11; i++) {
//   console.log(`${base} * ${i} = ${base * i}`);
//   data += `${base} * ${i} = ${base * i} \n`; 
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//   if (err) throw err;
//   console.log(`El archivo tabla-${base} ha sido creado!!!`);
// });
process.env.NOMBRE = 'matias flores';

console.log(process.env.NOMBRE);