//O que se aplica em filter funciona em map, map vc consegue alterar o array
// retorna o valor alterado
const numeros = [5, 50, 80, 1, 2, 3, 6, 35, 9, 78 , 4, 10, 87, 8];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoa = [
    {nome:'João', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Letícia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47}
];

const nomes = pessoa.map(obj => obj.nome);
console.log(nomes);

const idades = pessoa.map(obj => ({ idade: obj.idade }));
console.log(idades);

// const comIds = pessoa.map(function(obj, indice) {
//     obj.id = (indice);
//     return obj;
// });

// sem alterar o obj original
const comIds = pessoa.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});
console.log(comIds);