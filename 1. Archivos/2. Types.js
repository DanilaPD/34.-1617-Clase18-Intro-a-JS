//Los "strings" llevan comillas "" o ''.
let variable1 = "Soy un string.";

//"Typeof" nos va a decir el tipo de la variable.
console.log(typeof variable1);

//Ahora lo reasignamos y convertimos en un "número".
variable1 = 15;
console.log(typeof variable1);

//No hay un tipo separado para los decimales. No tenemos "floats".
let variable2 = 15.4;
console.log(typeof variable2);

//"Booleans": Solo "true" o "false"
let esVerdad = false;
console.log(typeof esVerdad);
console.log(esVerdad);

//"Array": Guarda cosas en orden. Con las [], le decimos que es un "array".
let frutas = ["banana", "frutilla", "pera", 25, true];
console.log(typeof frutas);

//"Objetos": Son similares a los "arrays", pero, en este caso, los hacemos con varios pares de "nombre: valor" y los ponemos entre {}.
let persona = {
  ojos: 2,
  piernas: 2,
  cabeza: 1,
  cola: false,
  nombre: "Pablo",
};
console.log(persona);
