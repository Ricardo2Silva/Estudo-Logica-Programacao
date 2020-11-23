/**
 * O tipo Symbol  é primitivo, único e imutavel, atuando como chave única em um objeto   
 */

/**
 * Além disso, é utilizado em operações realizadas pelo interpretador,como no comando for/of ou em operações da,
 * Sring API como match, split, replace e muitas outras   
 */

 let regexp = /Javascript/;

 // console.log("/Javascript/".startsWith(regexp));

 /**
  * Neste caso vai estourar um erro,
  * TypeError: First argument to String.prototype.startsWith must not be a regular expression
    at String.startsWith (<anonymous>)
    at Object.<anonymous> (C:\Users\edney\OneDrive\Área de Trabalho\Ricardo-estudos\Estudo-Logica-Programacao\symbol\symbol.js:12:29)
  */

  // serve como um modificador para desligar esse reconhecimento da expressão regular e atuar como string;

  regexp[Symbol.match] = false;
  console.log("/Javascript/".startsWith(regexp)); // retornando true


  