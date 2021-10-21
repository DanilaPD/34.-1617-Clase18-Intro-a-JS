const nombre = "Pam";
const edad = 35;

const uniendoConMas = "Hola, soy " + nombre + " y tengo " + edad + " años.";

console.log(uniendoConMas);

const uniendoConBackTicks = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(uniendoConBackTicks);

//No siempre en la vida van a necesitar "backticks"... no se compliquen.
const simple = "programación";
console.log("Hola, yo enseño " + simple);

//Concatenar con método:
const parte1 = "Hola, soy Pam ";
const parte2 = "y tengo 35 años.";

const uniendo = parte1.concat(parte2);
console.log(uniendo);