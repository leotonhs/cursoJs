// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome:'Leoton',
    sobrenome: 'Silva',
    idade: 32
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

const frutas = ['maça', 'pêra', 'uva', 'melância', 'banana'];

for (let lista in frutas) {
    console.log(frutas[lista]);
}