// IIFE -> Immediately invoked function expression
// me protege do escolpo global
(function(idade, peso, altura){

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(31, 80, 1.80);//invocando a função