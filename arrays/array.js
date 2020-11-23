/**
 * Um Array é apenas um objeto que oferece operações para acessar e manipular suas propriedades;
*/

// é possivel inicializar apenas passando []  ou sua funçao contrutora;

// iniciando ela vazia
let arrayEx = [];
 
//utilizando  sua função construtora;
let arrayEx2 = new Array() 

// iniciando e já atribuindo  valor;
let  arrayEx3 = ["Javascript", "C++", "Angular"];

let arrayEx4 = new Array("Javascript", "C++", "Angular");

// é possivel inicializar passando apenas  um Number para a função  construtora

let numbers = new Array(1,2,3);
console.log(numbers);

let numbers2 = new Array(10);
// devemos tomar cuidado quando passarmos number para a funçao pois ele retorna 10 posicoes vazias;
console.log(numbers2);


/**
*  A propiedade length inidica a quantidade  de elementos que existem  dentro do Array
*/

const languages = [];
languages[0] = "Javascript";
languages[1] = "C++";
languages[2] = "Angular";
languages[3] = "Java"

console.log(languages.length);

// cuidado!!!
// os elementos vazios dentro do array não são considerados no length 



