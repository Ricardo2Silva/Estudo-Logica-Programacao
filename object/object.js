/***
 * Um objeto é uma coleção dinâmica de propriedades definidas por chaves, 
 * que podem ser do tipo String ou Symbol, e valores que podem ser de qualquer tipo de dado
 */

 /***
  * É possível criar objetos de várias formas: pela notação literal, por meio de uma função construtora,
  * ou do método create da Object API
  */

  let objeto = {};
  console.log(objeto);

  let objeto2 = new Object();
  console.log(objeto2);

  let objeto3 = Object.create(null);
  console.log(objeto3);


  // Uma das diversas maneiras de atribuir propriedades a um objeto é durante a sua inicialização, pela notação literal 


  const book = {
    title: "Aprendendo Objeto",
    year: 2020,
    author: "Ricardo Silva"
  }
  console.log(book);

 // podemos construir  objeto a partir de outras variaveis 
  const title =  "Aprendendo Objeto";
  const year = 2020;
  const author = "Ricardo Silva";
  
  const book2 = {
    title: title,
    year: year,
    author: author
  }

// quando o nome da propriedade tiver o mesmo nome que a variedade podemos encurtar o código

const book3 = {
    title,
    year,
    author
}
console.log(book3)

// Observação: Dependendo da chave é necessário, declará-la diretamente como string 

const ex = {
    "number-of-pages": 463
}
console.log(ex)

//Tambem é possivel computar as chaves em tempo de execução

const key1= "title";
const key2= "year";
// quando colocamos [],estamos dizendo o seguinte: olha vai nessa variavel, verifica a referencia e usa esse valor 
const book4 = {
    [key1]: "aprendendo objeto",
    [key2]: 2020
}
console.log(book4);

// Além da notação literal, é possivel atribuir propriedades aos objetos por meio de sua referência

const livros = {};
livros.pages = 464;
livros.author = "Ricardo Silva";
console.log(livros);

// Assim como na notação literal, é possível computar as chaves de um objeto em tempo de execução por meio de sua referência

const keyEx1 = "title";
const keyEx2 = "author";

const livr = {};
livr[keyEx1] = "Aprendendo Objeto";
livr[keyEx2] = "Ricardo Silva";

console.log("////////",livr);

// Cada uma das propriedades de um objeto podem ser consultadas por meio da sua referência, de forma direta

console.log(book.title)
console.log('##############');

// É possivel consultar cada uma das propriedades de um objeto por meio da computação de chaves

for( let key in book3){
    //quando imprimimos key ele retorna as chaves
    console.log(key)

    //quando imprimimos book3[key] ele retorna os valores das chaves
    console.log(book3[key]);
}



const book5 = {
    title: "Aprendendo Objeto",
    year: 2020,
    author: "Ricardo Silva"
}

const book6 = {};

for(let key in book5){
    book6[key] = book5[key];
}

console.log(book6)