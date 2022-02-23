// Some todos os números (reduce)

const numero = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numero.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}); 
console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    {nome:'João', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Letícia', idade: 19},
    {nome:'Rosana', idade: 64},
    {nome:'Wallace', idade: 63}
];
const maiorIdade = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
});
console.log(maiorIdade);