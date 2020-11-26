/**
 * As expressões regulares são estruturas formadas por uma sequencia de caracteres, que especificam um padrão formal que servem para validar
 * extrair ou mesmo substituir caracteres dentro de uma string;
 */

let regExp = /john@gmail.com/
let result = regExp.test("john@gmail.com");// ele retorna um boolean se a condiçao estiver contida na string;
console.log(result);

let result2 = regExp.exec("john@gmail.com");// ele retorna um array mais complexo;
console.log(result2);

/**Metacaracteres -Parte 1 */

// . - Representa qualquer caractere

/**Escapando caracteres especiais */

// \ - A barra é utilizada antes de caracteres especiais, com o  objetivo de escapá-los

let regExpBar = /john@gmail\.com/; // quando coloco \ antes de caracteres especiais ele bloqueia
let resultBar = regExpBar.test("john@gmail.com");
console.log(resultBar);


/**
 * Iniciando e finalizando com um determinado caractere
*/

// ^ - Inicia com um determinado caractere
// $ - Finaliza com um determinado caractere;

let regExpInit = /^john@gmail\.com$/; // quando coloco \ antes de caracteres especiais ele bloqueia
let resultInit = regExpInit.exec("john@gmail.com...");
console.log(resultInit);


// obs: toda vez que a expressao nao atender,no exec retorna null e no teste retorna false;

/**
 * Grupos de caracteres
 */

 /**
  * [abc] - Aceita qualquer caractere dentro do grupo, nesse caso a,b e c
  * [^abc] - Não aceita qualquer caractere dentro do grupo,nesse caso a,b e c
  * [0-9] - Aceita qualquer caractere entre 0 e 9
  * [^0-9] - Não aceita qualquer caractere entre 0 e 9
  */


 let regExpGroup = /^[a-z][a-z][a-z][a-z]@gmail\.com$/; // quando coloco \ antes de caracteres especiais ele bloqueia
 let resultIGroup = regExpGroup.exec("john@gmail.com");
 console.log(resultIGroup);

 /** Quantificadores */
 
 // Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres

 /**
  * {n} - Quantifica um número especifico
  * {n,} - Quantifica um numero minimo
  * {n,m} - Quantifica um numero minimo e um numero maximo
  * ? - Zero ou um
  * * - Zero ou mais
  * + - Um ou mais  
  */


  /** Metacaracteres */

  /***
   * \w - Representa o conjunto de [a-zA-Z0-9_]
   * \W - Representa o conjunto de [^a-zA-Z0-9_]
   * \d - Representa o conjunto [0-9]
   * \D - Representa o conjunto [^0-9]
   * \s - Representa um espaço em branco
   * \S - Representa um nao espaço em branco
   * \n - Representa uma quebra de linha 
   * \t - Representa um tab
   * 
   */

   /**Grupos de captura*/

   //()- Determina um grupo de captura para realizar a extração de valores de uma determinada string 