//existem 3 formas de declarar uma String de forma literal: aspas simples, aspas duplas ou acento grave

'JavaScript';
"JavaScript";
`Javascript`;

// Tambem é possivel declarar uma String  por meio da sua função construtora

new String('Javascript');

// A função construtora  é mais lenta e pode prejudicar a performance 

//Alguns tipos de caracteres não são permitidos e precisam ser escapados;

// existem tambem caracteres de controle que podem ser utilizados para quebrar as linhas, aumentar a indentação entre outras coisas

let daysOfWeek = "0 - Sun\n1 - Mon\n2 - Tue\n3 - Wed\n4 - Thu\n5 - Fri\n6 - Sat";
console.log(daysOfWeek);


// É possivel escrever caracteres utilizando seu code point no padrao Unicode;

