const nomes = ['Luiz', 'Otávio', 'Henrique'];


// For clássivo - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('##########')

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('##########')

for (let valor of nomes) {
    console.log(valor);
}

console.log('##########')

// forEach() é um método do array que chama a função  para pecorrer cada elemento do array, passando parâmetros pegamos valor, indice e o array respectivamente.
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});