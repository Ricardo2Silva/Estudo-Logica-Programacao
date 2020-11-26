/**
 * Os accessor methods quando invocados retornam informações especificas sobre o array;
 */

    const languages = ["Java", "Angular", "C", "Angular"];
 // indexOf: Retorna a posiçao do primeiro elemento encontrado
    console.log(languages.indexOf("Angular"))

 // lastIndexOf: Retorna a posiçao do ultimo elemento encontrado

    console.log(languages.lastIndexOf("Angular"))
 // includes: Retorna true se o elemento existir;
    console.log(languages.includes("Angular.js"))
 // concat: Retorna um novo array resultante da concatenação de um ou mais arrays
    const ooLanguages = ["Smalltalk", "C++", "Simula"];
    const funcionalLanguages = ["Haskell","Scheme"];
    const lang = [].concat(ooLanguages, funcionalLanguages);
   
    console.log(lang);

 // slice: Retorna partes de um determinado array de acordo  com a posição de inicio e fim
    const ex = lang;
    console.log(ex.slice(0, 2));

 //join: Converte o array para uma String, juntando os elementos com base em um separador
 console.log(ex.join(" "));