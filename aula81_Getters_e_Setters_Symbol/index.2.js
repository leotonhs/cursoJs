class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        console.log('GET');
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        console.log('SET');
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

}

const p1 = new Pessoa('Leoton', 'Henrique');
p1.nomeCompleto = 'Leoton Henrique da Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
