// O tipo undefined é retornado caso a chave não seja encontrada 

const book ={
    title: 'Aprendendo  Objetos',
    author: 'Ricardo Silva'
}
console.log(book.subtitle) // undefined


// Qual é a diferença  entre os tipos undefined e null

/**
 * null -significa ausencia de valor
 * undefined -significa que aquela propriedade sequer existe
*/

// É possível consultar uma determinada chave por meio do operador in

/** Caution **/

// Não atribua para undefined ou null com a intenção de apagar uma propriedade 

// As propriedades de um objeto  podem ser apagadas por meio do operador delete

delete book.title;

console.log(book);