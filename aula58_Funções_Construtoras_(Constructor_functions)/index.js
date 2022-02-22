//Função construtora -> retorna objetos (utiliza new tipo = Pessoa (new)), são um molde para criar objetos
//Função fabrica -> retorna objetos
// Construtora -> 

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 1234;
    const metodoInterno = function() {};

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método.');
    };
}

const p1 = new Pessoa('Leoton', 'Henrique');// new cria um novo objeto vazio, faz o this apontar para o objeto que está sendo utilizado e retorna implicitamente o objeto para a variável.
const p2 = new Pessoa('João', 'Silva');


console.log(p1.nome);
console.log(p2);
p1.metodo();
