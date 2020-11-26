/**
 * Os iteration methods quando invocados iteram sobre os elementos do array
 */

 const frameworks = ["angular.js", "ember.js","vue.js"];
 
// forEach: Executa a função passada por parâmetro para cada elemento
frameworks.forEach(fra => console.log(fra));

 // filter: Retorna um novo array contendo somente os elementos  que retornaram true na funçao passada por parametro

 const frameworks1 = [
   
    {
        name: "Angular.js",
        contributors: 1548
    },
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    },
 ];
 const result = frameworks1.filter(fr => fr.contributors > 1000);
 console.log(result);

 //find: Retorna o primeiro elemento que retornou true na funçao passada por parametro

 const find = frameworks1.find(fr => fr.name === "Ember.js");
 console.log(find)

 // some: retorna true se um ou mais elementos retornaram true na função passada por parametro 
 const some = frameworks1.some(fr => fr.name.includes("js"));
 console.log(some)

 // every: retorna true se todos os elementos retornaram true na funçao passada por parametro 

 const every = frameworks1.every(fr => fr.name.includes("js"));
 console.log(every)

 // map: retorna um novo array com base no retorno  da funçao passada por parametro

 const map = frameworks1.map( fr => fr.name);
 console.log(map);

 //reduce: retorna um valor com base no retorno da funçao passada por parametro

 const reduce = frameworks1.reduce( (p, c) => {
    return p + c.contributors
}, 0);
 console.log(reduce);