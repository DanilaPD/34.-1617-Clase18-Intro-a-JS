//Adentro del "string", podemos poner comillas de otro tipo y usarlas como caracteres.
//La "barra" se pone antes de un caracter que tenga que ser especial, se llaman "caracteres de escape".
let comillasSimples =
  '¡Hola! "Estoy adentro de comillas" \'Igual podemos usar simples\'';
let comillasDobles =
  "¡Hola! \"Igual podemos usar dobles\" \n '¡Yo también estoy adentro de comillas!'";
let comillasInvertidas = `Soy un hola desde backtick`;

console.log(comillasSimples, comillasDobles, comillasInvertidas);

//Vamos a acceder a un caracter en particular:
let conMetodos = "Hola, mundo";

//Empezamos a contar desde el 0. Acá pedimos el caracter que está en la posición 3.
console.log('Usando métodos: ', conMetodos.charAt(3));

//Podemos hacerlo sin el "método" y pasamos, entre corchetes, a qué caracter queremos acceder:
console.log('Accediendo directamente al caracter: ', conMetodos[6]);

//Podríamos crear una variable nueva para guardar ese caracter que queremos:
let unaLetra = conMetodos.charAt(7);
console.log('Una letra: ', unaLetra);
