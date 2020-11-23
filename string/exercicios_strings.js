// Escreva o nome com a primeira letra de cada nome em maiusculo;

let nome = 'ricardo jonas da silva';
let n = nome.split(' ');
let nomeCerto = '';
for(let i = 0; i < n.length; i++) {
    
    nomeCerto+= n[i].substring(0,1).toUpperCase().concat( n[i].substring(1).toLowerCase()).concat(' ');   
}
console.log(nomeCerto);


// crie uma funçao e verifique se uma palavra é um palindromo

// split transforma em array,reverse inverte a ordem e join transforma em string
const isPalindromo = palavra => {

    let inverso = palavra.split('').reverse().join('');
    if(palavra == inverso){
        console.log('é um palindromo')
    } else console.log('não é um palindromo')
}
isPalindromo('ovo')


