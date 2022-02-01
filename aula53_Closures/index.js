//Habilidade que a função tem de acessar o seu escolpo léxico.

function retornaFuncao(nome) { //() {
    //const nome = 'Luiz';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Leoton');
console.dir(funcao);// acessiível pelo navegador
console.dir(funcao2);// acessiível pelo navegador