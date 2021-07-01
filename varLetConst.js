// var vs let vs const
var edad = 17;
var edad = 18;
console.log(edad);

let nombre = 'Lau';
// let nombre = 'Laureano'; // <- error
nombre = 'Laureano';
console.log(nombre);

const apellido = 'Vera';
// apellido = 'Kaldi'; // <- error

var edadVar = 10;
if (true) {
  var edadVar = 20;
  console.log(edadVar);
}
console.log(edadVar);

let edadLet = 10;
if (true) {
  let edadLet = 20;
  console.log(edadLet);
}
console.log(edadLet);

const edadConst = 10;
if (true) {
  const edadConst = 20;
  console.log(edadConst);
}
console.log(edadConst);