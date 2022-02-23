// Filter -> Sempre vai retornar um array, com a mesma quantidade de elemetos ou menos
// Retorno os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 6, 35, 9, 78 , 4, 10, 87, 8];

// function callbackFilter(valor, indice, array) {

//     // quando é valor boolean, melhor retornar direto a condição ou arrow function
//     // if (valor > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     return valor > 10;
    
// }
const numerosFiltrados = numeros.filter(valor => valor > 10);//roda uma função de callback
console.log(numerosFiltrados);

//-------------------------------------

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas qucom mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoa = [
    {nome:'João', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Letícia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47},
];
const pessoaComNomeGrande = pessoa.filter(obj => obj.nome.length >=5);
console.log(pessoaComNomeGrande);

const pessoaMaisCinquenta = pessoa.filter(obj => obj.idade > 50);
console.log(pessoaMaisCinquenta);

const pessoaTerminadaComA = pessoa.filter(obj => { return obj.nome.toLowerCase().endsWith('a')});
console.log(pessoaTerminadaComA);