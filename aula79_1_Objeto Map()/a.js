const pessoas = [
    { id: 1, nome: 'Luiz'},
    { id: 2, nome: 'Leoton'},
    { id: 3, nome: 'Maria'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa});
}

// for (const pessoas of novasPessoas.value) {
//     console.log(pessoas);
// }
console.log(novasPessoas);
novasPessoas.delete(2);
console.log(novasPessoas);