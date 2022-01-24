// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

//i - index
// for (let i = 0; i <= 5; i++) {
//     console.log(`Linha ${i}`);
// }

// for (let i = 400; i <=500; i += 10) {
//     console.log(`Linha ${i}`); // incrementando 10 a 10
// }

//exemplo, checando se um número é par

// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0;
//     console.log(i, par);
// }

// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'ímpar';
//     console.log(i, par);
// }


// percorrendo array

const frutas = ['Maça', 'Pêra', 'Uva', 'Banana', 'Abacate', 'Morango', 'Mamão'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}