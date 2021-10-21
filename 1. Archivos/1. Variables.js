//3 formas de declarar variables:

//"Var" es global y es vieja, NO USAR.
var primera = "Hola, mundo";

//Las dos formas que vienen del ES6: "Let" y "Const". No son globales y existen donde hayan sido creadas.

//"Const" es constante: No se pueden cambiar.
const segunda = "Hola, parte 2";

//"Let": Sí se pueden cambiar.
let tercera = "Hola, parte 3";

//Para imprimir, usamos "console.log()".
console.log('primera:', primera);

console.log('segunda:', segunda);

console.log('tercera:', tercera);

//Podemos resignar el valor en los "Let" y los "Var".
tercera = "¡Cambiando el valor!";
console.log('tercera:', tercera);

//Las "constantes" son inmutables. Node a partir de este punto, corta la ejecución.
segunda = "¡Cambiando la constante!";
console.log(segunda);

//Las "Var" se pueden cambiar, pero como se rompió por la "constante", no lo va a correr:
primera = "¡Cambiando la Var!";
console.log(primera);