// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(valor => valor % 2 === 0);
console.log(numerosPares);

const numerosDobro = numerosPares.map(valor => valor * 2);
console.log(numerosDobro);

const numerosSomados = numerosDobro.reduce((acumulador, valor) => acumulador += valor);
console.log(numerosSomados);

// ... modo feito pelo instrutor

const numerosPares2 = numeros
    .filter(valor => valor % 2 ===0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares2);