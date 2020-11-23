/**
 * O tipo boolean é primitivo, imutável e representado pelas palavras reservas true e false; 
 */

 // o typeof verifica o tipo da variavel,nesse caso um boolean
 console.log(typeof true);
 console.log(typeof false);

 // usando funçao construtora 

 console.log(new Boolean(true));
 console.log(new Boolean(false));

 // quando fazemos um typeof de new Boolean ele retorna um object

 console.log(typeof new Boolean(true));



 let condition = true;

 if(condition) {
    console.log('this condition is true');
 } else {
    console.log('this condition is false');
 }
// nessa condiçao cai no primeiro bloco,mas se mudarmos cai no segundo;

let conditionExempl = new Boolean(true);

if(conditionExempl) {
console.log('this condition is true');
} else {
console.log('this condition is false');
}

// nesse exemplo utilizamos a funçao construtora que quando evaluado como true retorna true e false  tambem retorna true;

// isso ocorre porque acontece coersao de tipo

/**
 * A coersao de tipo acontece quando um tipo de dado é utilizado em um contexto onde ele é convertido de forma  implicita ou explicita
 */

// somente esses 6 casos são evaluados para false;
console.log(!!0);
console.log(!!NaN);
console.log(!!"");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
