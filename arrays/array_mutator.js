// Os mutator methods quando invocados modificam o array;

// push - adiciona um elemento no final

const languages = ["Java", "C++","Python"];
console.log(languages.push("Angular"));// verifica a quantidade que tem no array
console.log(languages);


// pop - remove um elemento do final 

console.log(languages.pop());// retorna o elemento que foi tirado
console.log(languages);


// unshift - adiciona um elemento no inicio

console.log(languages.unshift("Angular"));// verifica a quantidade que tem no array
console.log(languages);

//shift - remove o elemento do inicio


console.log(languages.shift());// verifica a quantidade que tem no array
console.log(languages);

// splice - remove, substitui ou adiciona um ou mais elementos em uma determinada posição


console.log(languages.splice(1, 1)) // onde o primeiro parametro é a posição e o segundo é a quantidade de elementos que devem ser removidos; 
console.log('*****',languages);

// adicionando elementos
console.log(languages.splice(1, 0, "React JS","Vue JS")) // onde o primeiro parametro é a posição e o segundo parametro 0, significa que não vai retirar  e sim adicionar
console.log(languages);

// substituindo elementos

console.log(languages.splice(1,2,"C")) // a partir da 1 posição, remove 2 elementos e  acrescenta 0 3 parametro;
console.log(languages); 


// sort - Ordena os elementos de acordo com a função  de ordenação;

const linguagens = [
    {
        name: 'Python',
        year: 1991
    },
    {
        name: 'C',
        year: 1972
    },
    {
        name: 'Java',
        year: 1995
    },
    
]

linguagens.sort(function (a,b)  {
    return (a.year - b.year)
})

console.log(linguagens);

// reverse - inverte a  ordem dos elementos;

linguagens.reverse();
console.log(linguagens)


// fill - preenche os elementos de acordo com a posiçao de inicio e fim

const linguas = ['java', 'python', 'angular'];
linguas.fill('React',1); // ele preenche array com a palavra  a partir da posição 1
console.log(linguas);

linguas.fill('React'); // ele preenche array inteiro com a palavra
console.log(linguas);