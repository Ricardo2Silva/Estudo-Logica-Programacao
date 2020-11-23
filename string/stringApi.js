let nome = 'Ricardo';

// a propriedade length retorna o tamanho da lista;
console.log(nome.length)// 7

// a propriedade indexOf retorna a primeira posição encontrada do caractere passado por parametro;
console.log(nome.indexOf('i'))// 1 tudo em javascript começa em 0 sendo a posiçao da letra i na 1;

// a propriedade lastIndexOf retorna a ultima posição encontrada do caractere passado por parametro;
console.log(nome.lastIndexOf('r'))// 4 

// a propriedade toUpperCase retorna uma nova string convertendo as letras para maiusculas;
console.log(nome.toUpperCase())// RICARDO;

// a propriedade toLowerCase retorna uma nova string convertendo as letras para maiusculas;
console.log("RICARDO".toLowerCase())// ricardo;

// a propriedade charAt retorna  o caractere  na posição passada por parametro;
console.log(nome.charAt(1))// i;

// a propriedade charCodeAt retorna  o codigo com base na posição passada por parametro;
console.log(nome.charCodeAt(1))// 105;

// a propriedade fromCharCode retorna  o caractere  com base no codigo passado por parametro;
console.log(String.fromCharCode(82))// R;


// a propriedade includes retorna verdadeiro se a string contem  a string passada por parametro
console.log(nome.includes('Ric'))// true;

// a propriedade startsWith retorna verdadeiro se a string inicia com a string passada por parametro;
console.log(nome.startsWith('Ric'))// true
console.log(nome.startsWith('r'))// false
console.log(nome.toUpperCase().startsWith('RIC'))// true

// a propriedade endsWith retorna verdadeiro se a string termina com a string passada por parametro;
console.log(nome.endsWith('rdo'))// true

// a propriedade localeCompare retorna -1 se a string passada  por parametro for maior, 0 se for igual e 1 se for menor;
console.log(nome.localeCompare('rdo'))// 1
console.log(nome.localeCompare('Ricardo'))// 0
console.log(nome.localeCompare('ricardoj'))// -1

// a propriedade match  retorna  partes da string com base na RegExp passada por parametro
console.log('c++'.match(/\+/g));

// a propriedade search  retorna a primeira posiçao encontrada com base na RegExp passada por parametro
console.log('c++'.search(/\+/g));

/**
 * as propriedades search e match só aceita expressão regular
 */

// a propriedade replace  retorna uma nova string resultante da substituiçao da string
// ou RegExp passada no primeiro pelo segundo parametro

console.log('banana'.replace(/a/g, 4));//b4n4n4

/**
 * a propriedade slice  retorna uma prate da string que esta invocando a função
 *  iniciando na posiçao passada no primeiro parametro até a posicao final passada no segundo parametro
 * ou da posiçao passada no primeiro parametro  até o fim  caso o segundo parametro nao seja informado 
*/ 

console.log('JavaScript'.slice(0,4)); // Java quando passamos o segundo parametro é sempre n -1 neste caso é 3
console.log('JavaScript'.slice(4)); // Script quando passamos apenas um parametro é do index até o final
console.log('JavaScript'.slice(0, -6)); // Java  pouco utilizado ele vai do final até o index negativo
console.log('JavaScript'.slice(-6)); // Script 



/**
 * a propiedade split retorna um array 
 * contendo o resultado da divisao da string original de acordo com o criterio passado por parâmetro
 */

 console.log('c;javascript;ruby;angular'.split(';'));


 /**
  * a propriedade substring similar ao slice ,não aceita valores negativos como parametro e permite  a inversao dos parametros
  */

 console.log('JavaScript'.substring(0,4)); // Java
 console.log('JavaScript'.substring(4,0)); // Java neste caso ele inverte
 console.log('JavaScript'.substring(4)); // Script 
 
 /**
  * a propriedade concat retorna uma nova string resultante da concatenaçao da que esta invocando a funcao e da outra,
  * passada por parametro 
  */

 console.log('Java'.concat('Script')); // JavaScript 

/**
  * a propriedade padStart completa a string  com caracteres no inicio 
  */
 console.log('JavaScript'.padStart(12,'a')); // primeiro passamos a quantidade de letras que vamos passar,
 //se estiver espaço,ele completa no inicio,se nao estiver nao altera a string 
// aaJavascript


/**
  * a propriedade padEnd completa a string  com caracteres no final
  *  
  */  
 
  console.log('C'.padEnd(3,'+')); // C++  

// a propiedade repeat repete um caractere

console.log('C'.concat('+'.repeat(2))); // C++  


// a propriedade trim  elimina espaços em branco no inicio e no fim
console.log(' C '.trim()); // 

// a propriedade trimLeft  elimina espaços em branco no inicio 
console.log(' C '.trimLeft()); //  

// a propriedade trimRight  elimina espaços em branco no fim
console.log(' C '.trimRight()); // 


