// ... rest, ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, dois, tres, ...resto] = numeros;
// console.log(um, dois, tres);
// console.log(resto);

const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);


//indice ->        0          1          2 
//indice ->     0  1  2    0  1  2    0  1  2  
const lista = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = lista;
console.log(lista3[2]);


// é possivel fazer a desestruturação com objetos {}