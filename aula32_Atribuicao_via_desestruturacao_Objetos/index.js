const pessoa = {
    nome: 'Leoton',
    sobrenome: 'Silva',
    idade: 32,
    endereco : {
        rua: 'Coutinho',
        numero:509
    }
};

// // Atribuição via desestruturação
// const { nome, sobrenome} = pessoa; // atriuiu 2 variáveis, nome e sobrenome
// const {endereco: {rua, numero}, endereco} = pessoa;
// //console.log(nome, sobrenome);
// console.log(rua, numero, endereco);

const {nome, ...resto} = pessoa; // usando rest
console.log(resto);