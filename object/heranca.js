/**
 * O principal objetivo da herança é permitir o reuso de código por meio de compartilhamento de propriedades entre objetos,
 *  evitando a duplicaçao
 */

 /**
  * Na linguagem Javascript a herança é realizada entre objetos e não classes
  */
const functionalLanguages = {
    paradigm: 'Functional'
}

const scheme = {
    name: 'Scheme',
    year: 1975,
    paradigm: 'Functional'
}

const javascript = {
    name: 'Javascript',
    year: 1995,
    paradigm: 'Functional'
}

console.log(functionalLanguages)
console.log(scheme);
console.log(javascript);

// A propriedade __proto__é uma referência para o protótipo do objeto

const javascript2 = {
    name: 'Javascript',
    year: 1995,
    __proto__: functionalLanguages
}
console.log(javascript2);

// Porque a propriedade paradigm não foi exibida dentro do objeto?

/**
 * porque  como a propriedade nao pertence ao objeto em si ela nao aparece,
 * mas se vc fizer o console do objeto.__proto__ ela retorna o seu valor
 */

console.log(javascript2.__proto__)



/**
 * O método hasOwnProperty pode ser utilizado para determinar se uma propriedade pertence ao objeto
 */

for(let key in javascript2){
    console.log(key, javascript2.hasOwnProperty(key))
}

/**
 * Os métodos Object.setPrototypeOf e Object.getPrototypeOf permitem a interação com o protótipo do objeto
 */

Object.setPrototypeOf(javascript,functionalLanguages);

/**
 *  Com o método Object.create é possivel criar um objeto passando o seu  protótipo por parametro
 * 
*/
const object = Object.create(functionalLanguages);
object.scheme = 'scheme';
object.year = 1975;

console.log(object)

// sem o seu protótipo o objeto perde algumas operações importantes
// agora quando criamos uma objeto e passamos null, ele deixa de herdar as propriedades de Object
const paradigm = Object.create(null);
paradigm.paradigm = 'Functional'

const object1 = Object.create(paradigm);
object1.scheme = 'scheme';
object1.year = 1975;

 for(let key in object1){
    // console.log(key,object1.hasOwnProperty(key));
 }

/*
*Caso a mesma propriedade exista no objeto e no seu protótipo, a propriedade do próprio objeto é retornada,
fazendo sombra á propriedade do protótipo 
*/

