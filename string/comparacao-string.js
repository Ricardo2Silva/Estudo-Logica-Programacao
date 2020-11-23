/**Vamos ver como está seu conhecimento de Strings no JavaScript. Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

Regras:

A função vai receber duas String.
A função retornará True ou False.
Letras repetidos contam como o mesma Lletra
Maiúsculo == minúsculo.
Exemplo:

“Mar” e “Ram” retornará True.
“marte” e “morte” retornará False.
“Banana” e “Ban” retornará True.
“BLOG” e “GLOB” retornará False.
“CaRoLiNa” e “cArOlInA” retornará True.
“Hum” e “H um” retornará False.**/


const compareStrings = (stringOne, stringTwo) => {
    stringOne = stringOne.toLowerCase();
    stringTwo = stringTwo.toLowerCase();

    let strOne = stringOne.split('');
    let filterStrOne = strOne.filter((p1, i) => strOne.indexOf(p1) === i)
    let strTwo = stringTwo.split('');
    let filterStrTwo = strTwo.filter((p2, i) => strTwo.indexOf(p2) === i)
    if(filterStrOne.sort().join() === filterStrTwo.sort().join()){
        return true;
    }
    return false;
}

console.log(compareStrings('marte', 'morte'))

