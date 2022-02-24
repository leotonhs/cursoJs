//defineProperty -> Getter e Setters (maneira de proteger propriedade)
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Erro: Utilize apenas números!');
            }
            estoquePrivado= valor;
        }

    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

p1.estoque = 'aushiduh';
console.log(p1.estoque);