function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function funcaoDoInterval() {
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);

// Em uma função anônima dentro de uma variável abaixo
const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000); // tempo em milissegundos

setTimeout(function (){
    clearInterval(timer);
}, 3000);

setTimeout(function (){
    console.log('Hello world!');
}, 5000);