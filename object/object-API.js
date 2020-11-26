/**
 * O método Object.assign faz a cópia das propriedades dos objetos passados por 
 * parâmetro para o objeto alvo, que é retornado 
*/

const javascript = Object.create({});
Object.assign(javascript, {
    name: 'Javascript',
    year: 1995
})

console.log(javascript);

/**
 * O método Object.keys retorna as chaves das propriedades do objeto
*/

const javascript2 = {
    name: 'Javascript',
    year: 1995,
    paradigm: 'OO and functional'

}
console.log(Object.keys(javascript2));

/**
 * O método Object.values retorna os valores das propriedades do objeto
*/

console.log(Object.values(javascript2));

/**
 * O método Object.entries retorna as propriedades  do objeto em pares de chave e valor 
 */
console.log(Object.entries(javascript2))

/**
 * O método Object.is compara dois objetos considerando os tipos de dados, de forma similar ao operador === 
 */


const javascript3 = {
    name: 'Javascript',
    year: 1995,
    paradigm: 'OO and functional'

}

console.log(Object.is(javascript2, javascript2))
console.log(Object.is(javascript2, javascript3))

/**
 * defineProperty
 * 
 * configurable - Permite que uma determinada propriedadeseja apagada
 * 
 * enumerable - Permite que uma determinada propriedade seja enumerada
 * 
 * value - Define o valor de uma determinada propriedade
 * 
 * writable - Permite que uma determinada proprieade tenha seu valor modificado
*/

const javascript4 = {};
Object.defineProperty(javascript4, "name", {
    configurable: true, 
    writable: true,
    enumerable: true, // quando aplicamos ele mostra todos os valores
    value: 'javaScript' // quando aplicamos só o value todas as outras propriedades sao evaluadas como falsas,
})
// quando fazemos um console.log só quando tem value ele retorna objeto vazio,porém ele tem conteudo lá
console.log(javascript4)
console.log(javascript4.name)

//caso queiramos redefinir o valor  da propriedade só será modificado caso o writable for true;

javascript4.name = 'Ecmascript';

console.log(javascript4);

// caso queiramos apagar a propiedade só será modificado caso o configurable for true


delete javascript4.name;

console.log(javascript4)


/**
 * preventExtensions, seal e freeze 
 */


// preventExtensions - Impede que o objeto tenha novas propriedades,mas permite modificar  ou remover  as propriedades existentes

const java = {
    name: 'Java',
    exemplo: "aprendendo preventExtensions"
}
Object.preventExtensions(java);
// esta função verifica se o objeto é extensivel, se retorna false prevent extensions foi aplicado e se for true ao contrario;

// reatribuindo valor
java.name = 'javascript';

// inserindo propriedade
java.author = 'Brendan eich' // não permite  reatribuir

// deletando propriedade
delete java.exemplo;

console.log(java)
console.log(Object.isExtensible(java))

// seal - Impede que o objeto  tenha novas propriedades apague propriedades existentes, mas permite modificar propriedades existentes

Object.seal(java);

console.log(Object.isSealed(java))


// freeze - Impede que o objeto tenha novas propriedades, apague ou modifique propriedades existentes    
Object.freeze(java);
console.log(Object.isFrozen(java));


//Não é possivel alterar o protótipo do objeto, que se torna imutável  