// as function possui argumentos que sustenta todos os argumentos enviados
// so funciona arguments quando usamos a expressão function, não funcionam em arrow functions

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
 
funcao(1, 2, 3, 4, 5, 6, 7);

console.log('##############################');

// ...numeros é o rest, o que sobrar dos argumentos

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        acumulador += numero;
    }
    console.log(acumulador); 
}
conta('+', 0, 20, 30, 40, 50);

console.log('##############################');
// resolve a situação dos arguments não poder ser usado nas arrows functions

const conta2 = (...args) => {
    console.log(args);
};

conta2('+', 1, 20, 30, 40, 50);