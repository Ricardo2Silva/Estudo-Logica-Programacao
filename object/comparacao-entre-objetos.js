// A comparação dos objetos é feita por meio de sua referência, 
//assim, ainda que dois objetos tenham exatamente as mesmas propriedades eles serão considerados diferentes 

const book1 = {
    title: "Aprendendo objetos",
    author: "Ricardo silva"
}

const book2 = {
    title: "Aprendendo objetos",
    author: "Ricardo silva",
    pages: 464
}

console.log(book1 == book2) // false
console.log(book1 == book1);// true

/** * uma das formas para comparar os objetos é analisando cada uma da suas propriedades por meio da comparação 
das chaves e valores **/ 

let equal = true;
// como estamos comparando o book1 com o 2 ele retorna true porqur ambos tem a mesma chave e valores exceto pages que nao entra na comparacao
for(let key in book1) {
    if(book1[key] !== book2[key]){
        equal= false;
    } 
}
console.log(equal)
// mas quando comparamos o book2 com o 1 ele retorna false porque ele percorre as chaves e verifica que o 1 nao tem a chave pages
for(let key in book2){
    if(book1[key] !== book2[key]){
        equal = false;
    }
}
console.log(equal)

/* agora se mudarmos o valor de alguma chave vai dá false 
porque para os objetos serem identicos as chaves e valores devem ser iguais */

/**
 * Para garantir que um objeto é igual ao outro é necessario verificar seus protótipos 
 */

 //continua na aula de herança