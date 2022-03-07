class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

const p1 = new Pessoa('Leoton', 'Silva'); // ver no inspecionar do browser comportamento


// para comparar com a função construtora

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p2 = new Pessoa2('Maria', 'Silva'); // ver no inspecionar do browser comportamento
