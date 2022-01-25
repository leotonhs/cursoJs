// Escreva uma função chamada ePaisagem que 
// que recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

// function ePaisagem(height, width) {
//     return height > width ? false : true;
//     }
// console.log(ePaisagem(10, 15));

const ePaisagem = (width, height) => width > height;
console.log(ePaisagem(1080, 1920));